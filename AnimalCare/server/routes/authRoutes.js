const express = require("express");
const { body } = require("express-validator");
const { register, login, getMe } = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

/* ── POST /api/auth/register ─────────────────────────────────────────── */
router.post(
    "/register",
    [
        body("name")
            .trim()
            .notEmpty().withMessage("Name is required.")
            .isLength({ min: 2 }).withMessage("Name must be at least 2 characters."),
        body("email")
            .trim()
            .notEmpty().withMessage("Email is required.")
            .isEmail().withMessage("Please enter a valid email address."),
        body("password")
            .notEmpty().withMessage("Password is required.")
            .isLength({ min: 6 }).withMessage("Password must be at least 6 characters."),
    ],
    register
);

/* ── POST /api/auth/login ────────────────────────────────────────────── */
router.post(
    "/login",
    [
        body("email").trim().notEmpty().withMessage("Email is required.").isEmail().withMessage("Enter a valid email."),
        body("password").notEmpty().withMessage("Password is required."),
    ],
    login
);

/* ── GET /api/auth/me  (protected) ───────────────────────────────────── */
router.get("/me", protect, getMe);

module.exports = router;