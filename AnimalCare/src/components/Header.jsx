import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const S = {
    header: {
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(15,25,35,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        padding: "0 24px",
        height: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
    },
    logo: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        textDecoration: "none",
    },
    logoIcon: {
        width: 36,
        height: 36,
        borderRadius: 10,
        background: "linear-gradient(135deg, #1D9E75, #4A8FC4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 18,
        flexShrink: 0,
    },
    logoText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: 700,
        letterSpacing: "-0.3px",
    },
    logoSub: {
        color: "rgba(255,255,255,0.4)",
        fontSize: 11,
        display: "block",
        marginTop: -2,
    },
    nav: {
        display: "flex",
        alignItems: "center",
        gap: 8,
    },
    avatar: {
        width: 32,
        height: 32,
        borderRadius: "50%",
        background: "linear-gradient(135deg, #1D9E75, #4A8FC4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 13,
        fontWeight: 700,
        color: "#fff",
        flexShrink: 0,
        cursor: "pointer",
        position: "relative",
    },
    userName: {
        color: "rgba(255,255,255,0.75)",
        fontSize: 13,
        fontWeight: 500,
    },
    dropdown: {
        position: "absolute",
        top: "calc(100% + 10px)",
        right: 0,
        background: "#1a2d40",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 12,
        padding: "6px",
        minWidth: 180,
        boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
        zIndex: 200,
    },
    dropdownItem: {
        padding: "9px 12px",
        borderRadius: 8,
        cursor: "pointer",
        fontSize: 13,
        color: "rgba(255,255,255,0.7)",
        display: "flex",
        alignItems: "center",
        gap: 8,
        background: "transparent",
        border: "none",
        width: "100%",
        textAlign: "left",
    },
    logoutBtn: {
        background: "rgba(226,75,74,0.1)",
        border: "1px solid rgba(226,75,74,0.2)",
        borderRadius: 8,
        padding: "7px 14px",
        color: "#E24B4A",
        fontSize: 13,
        fontWeight: 500,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: 6,
    },
};

export default function Header({ onNavigate, currentPage }) {
    const { user, logout } = useAuth();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const initials = user?.name
        ? user.name.split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2)
        : "?";

    return (
        <header style={S.header}>
            {/* Logo */}
            <div style={S.logo}>
                <div style={S.logoIcon}>🩺</div>
                <div>
                    <span style={S.logoText}>VetAI Assistant</span>
                    <span style={S.logoSub}>Smart Animal Healthcare</span>
                </div>
            </div>

            {/* Right side */}
            <nav style={S.nav}>
                {user ? (
                    <>
                        {/* Username */}
                        <span style={S.userName}>Hi, {user.name.split(" ")[0]} 👋</span>

                        {/* Avatar + dropdown */}
                        <div style={{ position: "relative" }}>
                            <div
                                style={S.avatar}
                                onClick={() => setDropdownOpen((o) => !o)}
                                title="Account"
                            >
                                {initials}
                            </div>

                            {dropdownOpen && (
                                <div style={S.dropdown} onMouseLeave={() => setDropdownOpen(false)}>
                                    <div style={{ padding: "8px 12px 10px", borderBottom: "1px solid rgba(255,255,255,0.07)", marginBottom: 4 }}>
                                        <p style={{ margin: 0, fontSize: 13, fontWeight: 600, color: "#fff" }}>{user.name}</p>
                                        <p style={{ margin: 0, fontSize: 11, color: "rgba(255,255,255,0.4)" }}>{user.email}</p>
                                    </div>
                                    <button
                                        style={{ ...S.dropdownItem, color: "#E24B4A" }}
                                        onClick={() => { logout(); setDropdownOpen(false); }}
                                    >
                                        🚪 Sign Out
                                    </button>
                                </div>
                            )}
                        </div>
                    </>
                ) : (
                    <>
                        <button
                            onClick={() => onNavigate?.("login")}
                            style={{
                                background: "transparent",
                                border: "1px solid rgba(255,255,255,0.12)",
                                borderRadius: 8, padding: "7px 16px",
                                color: "rgba(255,255,255,0.7)", fontSize: 13, cursor: "pointer",
                                fontWeight: 500,
                            }}
                        >
                            Sign In
                        </button>
                        <button
                            onClick={() => onNavigate?.("register")}
                            style={{
                                background: "linear-gradient(135deg, #1D9E75, #4A8FC4)",
                                border: "none", borderRadius: 8, padding: "7px 16px",
                                color: "#fff", fontSize: 13, cursor: "pointer", fontWeight: 600,
                            }}
                        >
                            Get Started
                        </button>
                    </>
                )}
            </nav>
        </header>
    );
}