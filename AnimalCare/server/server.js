const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Import routes
const authRoutes = require("./routes/authRoutes");
const symptomRoutes = require("./routes/symptomRoutes");

const app = express();

// ── Middleware ───────────────────────────────────────────────────────────
app.use(cors({
    origin: "http://localhost:5173", // Vite's default dev port
    credentials: true,
}));
app.use(express.json());

// ── Health check ────────────────────────────────────────────────────────
app.get("/", (req, res) => {
    res.json({ status: "VetAI backend is running ✅" });
});

// ── Routes ───────────────────────────────────────────────────────────────
app.use("/api/auth", authRoutes);
app.use("/api/symptoms", symptomRoutes);

// ── 404 handler ──────────────────────────────────────────────────────────
app.use((req, res) => {
    res.status(404).json({ error: `Route ${req.method} ${req.url} not found.` });
});

// ── Global error handler ─────────────────────────────────────────────────
app.use((err, req, res, next) => {
    console.error("Unhandled error:", err);
    res.status(500).json({ error: "Internal server error." });
});

// ── Start server ─────────────────────────────────────────────────────────
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 VetAI server running on http://localhost:${PORT}`);
});