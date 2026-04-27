const mysql = require("mysql2/promise");
require("dotenv").config();

// Create a connection pool (more efficient than single connections)
const pool = mysql.createPool({
    host:     process.env.DB_HOST,
    port:     process.env.DB_PORT,
    user:     process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,      // max 10 simultaneous connections
    queueLimit: 0,
});

// Test the connection on startup
async function testConnection() {
    try {
        const conn = await pool.getConnection();
        console.log("✅ MySQL connected successfully");
        conn.release();
    } catch (err) {
        console.error("❌ MySQL connection failed:", err.message);
        process.exit(1); // Stop server if DB is unreachable
    }
}

testConnection();

module.exports = pool;