import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import bgVideo from "../assets/Background.mp4";

export default function Register({ onNavigate }) {
    const { register } = useAuth();
    const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPass, setShowPass] = useState(false);

    const handleChange = (e) =>
        setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

    const validate = () => {
        if (!form.name.trim()) return "Please enter your full name.";
        if (!form.email.includes("@")) return "Please enter a valid email.";
        if (form.password.length < 6) return "Password must be at least 6 characters.";
        if (form.password !== form.confirm) return "Passwords do not match.";
        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        const validationError = validate();
        if (validationError) { setError(validationError); return; }
        setLoading(true);
        const result = await register({
            name: form.name,
            email: form.email,
            password: form.password
        });
        setLoading(false);
        if (!result.success) setError(result.error);
    };

    const strength = (() => {
        const p = form.password;
        if (!p) return 0;
        let s = 0;
        if (p.length >= 6) s++;
        if (p.length >= 10) s++;
        if (/[A-Z]/.test(p)) s++;
        if (/[0-9!@#$%]/.test(p)) s++;
        return s;
    })();

    const strengthLabel = ["", "Weak", "Fair", "Good", "Strong"][strength];
    const strengthColor = ["", "#E24B4A", "#EF9F27", "#4A8FC4", "#1D9E75"][strength];

    return (
        <div style={styles.page}>

            {/* 🎥 Video Background */}
            <video
                src={bgVideo}
                autoPlay
                loop
                muted
                playsInline
                onLoadedData={(e) => e.target.play()}
                style={styles.videoBg}
            />

            {/* 🌑 Overlay */}
            <div style={styles.overlay}></div>

            {/* 🎬 Animations */}
            <style>
                {`
                @keyframes spin { to { transform: rotate(360deg); } }
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
                <div style={styles.iconWrap}>🐾</div>

                <h1 style={styles.title}>Create your account</h1>
                <p style={styles.subtitle}>Join VetAI — free animal healthcare guidance</p>

                <form onSubmit={handleSubmit} style={styles.form}>

                    {/* Name */}
                    <Field label="Full Name">
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            style={styles.input}
                        />
                    </Field>

                    {/* Email */}
                    <Field label="Email Address">
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            style={styles.input}
                        />
                    </Field>

                    {/* Password */}
                    <Field label="Password">
                        <div style={{ position: "relative" }}>
                            <input
                                type={showPass ? "text" : "password"}
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                placeholder="Min. 6 characters"
                                style={{ ...styles.input, paddingRight: 44 }}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPass((s) => !s)}
                                style={styles.eyeBtn}
                            >
                                {showPass ? "🙈" : "👁️"}
                            </button>
                        </div>

                        {/* Strength */}
                        {form.password && (
                            <div style={{ marginTop: 6 }}>
                                <div style={{ display: "flex", gap: 4 }}>
                                    {[1,2,3,4].map(i => (
                                        <div key={i} style={{
                                            flex: 1,
                                            height: 3,
                                            borderRadius: 2,
                                            background: i <= strength ? strengthColor : "rgba(255,255,255,0.1)"
                                        }} />
                                    ))}
                                </div>
                                <span style={{ fontSize: 11, color: strengthColor }}>
                                    {strengthLabel}
                                </span>
                            </div>
                        )}
                    </Field>

                    {/* Confirm */}
                    <Field label="Confirm Password">
                        <input
                            type="password"
                            name="confirm"
                            value={form.confirm}
                            onChange={handleChange}
                            placeholder="Repeat password"
                            style={{
                                ...styles.input,
                                borderColor:
                                    form.confirm && form.confirm !== form.password
                                        ? "rgba(226,75,74,0.5)"
                                        : "rgba(255,255,255,0.1)",
                            }}
                        />
                    </Field>

                    {error && <div style={styles.errorBox}>⚠️ {error}</div>}

                    <button type="submit" disabled={loading} style={styles.submitBtn}>
                        {loading ? (
                            <span style={styles.loadingWrap}>
                                <Spinner /> Creating account...
                            </span>
                        ) : "Create Account →"}
                    </button>
                </form>

                <p style={styles.switchText}>
                    Already have an account?{" "}
                    <button onClick={() => onNavigate("login")} style={styles.linkBtn}>
                        Sign in
                    </button>
                </p>
            </div>
        </div>
    );
}

function Field({ label, children }) {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <label style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>
                {label}
            </label>
            {children}
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
        zIndex: -100,
        animation: "zoom 20s ease-in-out infinite alternate",
        filter: "brightness(0.8)",
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
        background: "rgba(255,255,255,0.08)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.15)",
        borderRadius: 20,
        padding: "40px 36px",
        width: "100%",
        maxWidth: 420,
        zIndex: 1,
        boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
        transition: "transform 0.3s ease",
    },

    iconWrap: {
        width: 52,
        height: 52,
        borderRadius: 14,
        background: "linear-gradient(135deg, #4A8FC4, #1D9E75)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 26,
        marginBottom: 20,
    },

    title: { fontSize: 24, fontWeight: 700 },
    subtitle: { fontSize: 14, color: "rgba(255,255,255,0.5)", marginBottom: 28 },

    form: { display: "flex", flexDirection: "column", gap: 16 },

    input: {
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 10,
        padding: "11px 14px",
        color: "#fff",
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
    },

    submitBtn: {
        background: "linear-gradient(135deg, #1D9E75, #4A8FC4)",
        border: "none",
        borderRadius: 10,
        padding: "13px",
        color: "#fff",
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
        color: "#4A8FC4",
        cursor: "pointer",
        textDecoration: "underline",
    },
};