const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const pool = require("../config/db");

/* ── Helper: generate JWT ─────────────────────────────────────────────── */
function generateToken(user) {
    return jwt.sign(
        { id: user.id, name: user.name, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN || "7d" }
    );
}

/* ── REGISTER ─────────────────────────────────────────────────────────── */
async function register(req, res) {
    // 1. Check validation errors from express-validator
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array()[0].msg });
    }

    const { name, email, password } = req.body;

    try {
        // 2. Check if email already exists
        const [existing] = await pool.query(
            "SELECT id FROM users WHERE email = ?",
            [email]
        );
        if (existing.length > 0) {
            return res.status(409).json({ error: "An account with this email already exists." });
        }

        // 3. Hash the password (salt rounds = 12)
        const hashedPassword = await bcrypt.hash(password, 12);

        // 4. Insert new user into DB
        const [result] = await pool.query(
            "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
            [name.trim(), email.toLowerCase().trim(), hashedPassword]
        );

        const newUser = { id: result.insertId, name: name.trim(), email: email.toLowerCase().trim() };

        // 5. Return JWT + user info
        res.status(201).json({
            message: "Account created successfully.",
            token: generateToken(newUser),
            user: newUser,
        });
    } catch (err) {
        console.error("Register error:", err);
        res.status(500).json({ error: "Server error during registration." });
    }
}

/* ── LOGIN ────────────────────────────────────────────────────────────── */
async function login(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array()[0].msg });
    }

    const { email, password } = req.body;

    try {
        // 1. Find user by email
        const [rows] = await pool.query(
            "SELECT id, name, email, password FROM users WHERE email = ?",
            [email.toLowerCase().trim()]
        );

        if (rows.length === 0) {
            return res.status(401).json({ error: "Invalid email or password." });
        }

        const user = rows[0];

        // 2. Compare password with hashed version in DB
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: "Invalid email or password." });
        }

        const safeUser = { id: user.id, name: user.name, email: user.email };

        // 3. Return JWT + user info
        res.json({
            message: "Login successful.",
            token: generateToken(safeUser),
            user: safeUser,
        });
    } catch (err) {
        console.error("Login error:", err);
        res.status(500).json({ error: "Server error during login." });
    }
}

/* ── GET ME (fetch logged-in user's profile) ──────────────────────────── */
async function getMe(req, res) {
    try {
        const [rows] = await pool.query(
            "SELECT id, name, email, created_at FROM users WHERE id = ?",
            [req.user.id]
        );

        if (rows.length === 0) {
            return res.status(404).json({ error: "User not found." });
        }

        res.json({ user: rows[0] });
    } catch (err) {
        console.error("GetMe error:", err);
        res.status(500).json({ error: "Server error." });
    }
}

module.exports = { register, login, getMe };