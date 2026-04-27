const fetch = require("node-fetch");
const pool = require("../config/db");

/* ── ANALYZE symptoms via Claude + save to DB ─────────────────────────── */
async function analyze(req, res) {
    const { animal, symptoms, customSymptoms = [] } = req.body;

    if (!animal || !symptoms || symptoms.length === 0) {
        return res.status(400).json({ error: "Please provide an animal and at least one symptom." });
    }

    const prompt = `You are an expert veterinary assistant. A user has a ${animal} showing these symptoms: ${symptoms.join(", ")}.

Respond ONLY with a valid JSON object (no markdown, no backticks) with this exact structure:
{
  "severity": "emergency" or "moderate" or "mild",
  "condition": "Most likely condition name",
  "summary": "2-3 sentence plain language summary of what may be happening",
  "firstAid": ["step 1", "step 2", "step 3"],
  "dos": ["do 1", "do 2", "do 3"],
  "donts": ["dont 1", "dont 2", "dont 3"],
  "vetRequired": true or false,
  "vetUrgency": "Immediately" or "Within 24 hours" or "Within a week" or "If symptoms persist",
  "homecare": "Brief paragraph about what the owner can do at home",
  "warning": "Any critical warning if severity is emergency, else empty string"
}`;

    try {
        // 1. Call Anthropic API
        const response = await fetch("https://api.anthropic.com/v1/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": process.env.ANTHROPIC_API_KEY,
                "anthropic-version": "2023-06-01",
            },
            body: JSON.stringify({
                model: "claude-sonnet-4-20250514",
                max_tokens: 1000,
                messages: [{ role: "user", content: prompt }],
            }),
        });

        const data = await response.json();

        if (data.error) {
            console.error("Anthropic API error:", data.error);
            return res.status(502).json({ error: "AI service error: " + data.error.message });
        }

        const raw = data.content?.map((b) => b.text || "").join("") || "";
        const result = JSON.parse(raw.replace(/```json|```/g, "").trim());

        // 2. Save to DB (linked to the logged-in user via req.user.id)
        const allSymptoms = symptoms.join(", ");
        const customList = customSymptoms.length > 0 ? customSymptoms.join(", ") : null;

        await pool.query(
            `INSERT INTO symptom_logs
         (user_id, animal, symptoms, custom_symptoms, condition_name, severity, result_json)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [
                req.user.id,
                animal,
                allSymptoms,
                customList,
                result.condition,
                result.severity,
                JSON.stringify(result),
            ]
        );

        // 3. Send result back to frontend
        res.json(result);
    } catch (err) {
        console.error("Analyze error:", err);
        res.status(500).json({ error: "Failed to analyze symptoms. Please try again." });
    }
}

/* ── GET HISTORY (last 20 assessments for logged-in user) ─────────────── */
async function getHistory(req, res) {
    try {
        const [rows] = await pool.query(
            `SELECT id, animal, symptoms, custom_symptoms, condition_name,
              severity, result_json, created_at
       FROM symptom_logs
       WHERE user_id = ?
       ORDER BY created_at DESC
       LIMIT 20`,
            [req.user.id]
        );

        // Parse result_json back to object for each row
        const history = rows.map((row) => ({
            ...row,
            result: row.result_json ? JSON.parse(row.result_json) : null,
            result_json: undefined,
        }));

        res.json({ history });
    } catch (err) {
        console.error("History error:", err);
        res.status(500).json({ error: "Failed to fetch history." });
    }
}

/* ── DELETE a single history entry ───────────────────────────────────── */
async function deleteHistory(req, res) {
    const { id } = req.params;
    try {
        // Make sure the log belongs to this user before deleting
        const [rows] = await pool.query(
            "SELECT id FROM symptom_logs WHERE id = ? AND user_id = ?",
            [id, req.user.id]
        );

        if (rows.length === 0) {
            return res.status(404).json({ error: "Record not found." });
        }

        await pool.query("DELETE FROM symptom_logs WHERE id = ?", [id]);
        res.json({ message: "Record deleted." });
    } catch (err) {
        console.error("Delete history error:", err);
        res.status(500).json({ error: "Failed to delete record." });
    }
}

module.exports = { analyze, getHistory, deleteHistory };