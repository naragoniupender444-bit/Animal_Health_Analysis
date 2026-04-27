import { useState } from "react";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Header from "./components/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

/* Inner app — consumes auth context */
function AppInner() {
    const { user, loading } = useAuth();
    const [page, setPage] = useState("login"); // "login" | "register"

    // While rehydrating from localStorage, show nothing (avoids flash)
    if (loading) {
        return (
            <div style={{
                minHeight: "100vh", display: "flex",
                alignItems: "center", justifyContent: "center",
                background: "#0f1923",
            }}>
                <div style={{ display: "flex", gap: 8 }}>
                    {["#1D9E75", "#4A8FC4", "#E24B4A"].map((c, i) => (
                        <div key={i} style={{
                            width: 10, height: 10, borderRadius: "50%", background: c,
                            animation: `bounce 1.2s ${i * 0.2}s ease-in-out infinite`,
                        }} />
                    ))}
                    <style>{`@keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }`}</style>
                </div>
            </div>
        );
    }

    return (
        <div style={{
            minHeight: "100vh",
            background: "transparent",   // 🔥 important
        }}>
            <Header onNavigate={setPage} currentPage={page} />

            {/* Route: if logged in → Dashboard, else → Login or Register */}
            {user ? (
                <Dashboard />
            ) : page === "register" ? (
                <Register onNavigate={setPage} />
            ) : (
                <Login onNavigate={setPage} />
            )}
        </div>
    );
}

/* Wrap everything in AuthProvider */
export default function App() {
    return (
        <AuthProvider>
            <AppInner />
        </AuthProvider>
    );
}