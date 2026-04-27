const express = require("express");
const { analyze, getHistory, deleteHistory } = require("../controllers/symptomController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// All symptom routes require a valid JWT
router.use(protect);

/* ── POST /api/symptoms/analyze  ──── analyze + auto-save to DB ───────── */
router.post("/analyze", analyze);

/* ── GET  /api/symptoms/history  ──── get user's last 20 assessments ──── */
router.get("/history", getHistory);

/* ── DELETE /api/symptoms/history/:id  ── delete one record ──────────── */
router.delete("/history/:id", deleteHistory);

module.exports = router;