import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import bgVideo from "../assets/Background.mp4";

export default function Login({ onNavigate }) {
    const { login } = useAuth();
    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPass, setShowPass] = useState(false);

    const handleChange = (e) =>
        setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        if (!form.email || !form.password) {
            setError("Please fill in all fields.");
            return;
        }
        setLoading(true);
        const result = await login(form);
        setLoading(false);
        if (!result.success) setError(result.error);
    };

    return (
        <div style={styles.page}>

            {/* 🎥 Background Video */}
            <video autoPlay loop muted playsInline style={styles.videoBg}>
                <source src={bgVideo} type="video/mp4" />
            </video>

            {/* 🌑 Overlay */}
            <div style={styles.overlay}></div>

            {/* 🎬 Animation Keyframes */}
            <style>
                {`
                @keyframes spin {
                    to { transform: rotate(360deg); }
                }
                @keyframes zoom {
                    from { transform: scale(1); }
                    to { transform: scale(1.08); }
                }
                `}
            </style>

            {/* 🧊 Card */}
            <div
                style={styles.card}
                className="fade-in"
                onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-6px)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
            >
                <div style={styles.iconWrap}>🩺</div>

                <h1 style={styles.title}>Welcome back</h1>
                <p style={styles.subtitle}>Sign in to your VetAI account</p>

                <form onSubmit={handleSubmit} style={styles.form}>

                    {/* Email */}
                    <div style={styles.fieldGroup}>
                        <label style={styles.label}>Email address</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            autoComplete="email"
                            style={styles.input}
                        />
                    </div>

                    {/* Password */}
                    <div style={styles.fieldGroup}>
                        <label style={styles.label}>Password</label>
                        <div style={{ position: "relative" }}>
                            <input
                                type={showPass ? "text" : "password"}
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                placeholder="••••••••"
                                autoComplete="current-password"
                                style={{ ...styles.input, paddingRight: 44 }}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPass((s) => !s)}
                                style={styles.eyeBtn}
                                tabIndex={-1}
                            >
                                {showPass ? "🙈" : "👁️"}
                            </button>
                        </div>
                    </div>

                    {/* Error */}
                    {error && (
                        <div style={styles.errorBox}>
                            ⚠️ {error}
                        </div>
                    )}

                    {/* Submit */}
                    <button type="submit" disabled={loading} style={styles.submitBtn}>
                        {loading ? (
                            <span style={styles.loadingWrap}>
                                <Spinner /> Signing in...
                            </span>
                        ) : "Sign In"}
                    </button>
                </form>

                <p style={styles.switchText}>
                    Don't have an account?{" "}
                    <button onClick={() => onNavigate("register")} style={styles.linkBtn}>
                        Create one
                    </button>
                </p>
            </div>
        </div>
    );
}

function Spinner() {
    return (
        <span style={{
            width: 14,
            height: 14,
            border: "2px solid rgba(255,255,255,0.3)",
            borderTopColor: "#fff",
            borderRadius: "50%",
            display: "inline-block",
            animation: "spin 0.7s linear infinite",
        }} />
    );
}

const styles = {
    page: {
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        position: "relative",
        overflow: "hidden",
    },

    videoBg: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        zIndex: -100   // 🔥 push it fully behind everything
    },

    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7))",
        zIndex: -1,
    },

    card: {
        background: "rgba(255, 255, 255, 0.08)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.15)",
        borderRadius: 20,
        padding: "40px 36px",
        width: "100%",
        maxWidth: 420,
        zIndex: 1,
        boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },

    iconWrap: {
        width: 52,
        height: 52,
        borderRadius: 14,
        background: "linear-gradient(135deg, #1D9E75, #4A8FC4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 26,
        marginBottom: 20,
    },

    title: {
        fontSize: 24,
        fontWeight: 700,
        color: "#fff",
        marginBottom: 6,
    },

    subtitle: {
        fontSize: 14,
        color: "rgba(255,255,255,0.5)",
        marginBottom: 28,
    },

    form: {
        display: "flex",
        flexDirection: "column",
        gap: 18,
    },

    fieldGroup: {
        display: "flex",
        flexDirection: "column",
        gap: 6,
    },

    label: {
        fontSize: 13,
        color: "rgba(255,255,255,0.6)",
    },

    input: {
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 10,
        padding: "11px 14px",
        color: "#fff",
        fontSize: 14,
        outline: "none",
        width: "100%",
    },

    eyeBtn: {
        position: "absolute",
        right: 12,
        top: "50%",
        transform: "translateY(-50%)",
        background: "transparent",
        border: "none",
        cursor: "pointer",
    },

    errorBox: {
        background: "rgba(226,75,74,0.1)",
        border: "1px solid rgba(226,75,74,0.3)",
        borderRadius: 10,
        padding: "10px 14px",
        color: "#E24B4A",
        fontSize: 13,
    },

    submitBtn: {
        background: "linear-gradient(135deg, #1D9E75, #4A8FC4)",
        border: "none",
        borderRadius: 10,
        padding: "13px",
        color: "#fff",
        fontSize: 15,
        fontWeight: 600,
        cursor: "pointer",
    },

    loadingWrap: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        justifyContent: "center",
    },

    switchText: {
        marginTop: 24,
        textAlign: "center",
        fontSize: 13,
        color: "rgba(255,255,255,0.4)",
    },

    linkBtn: {
        background: "transparent",
        border: "none",
        color: "#1D9E75",
        fontWeight: 600,
        cursor: "pointer",
        textDecoration: "underline",
    },
};