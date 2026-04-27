import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

const API = "http://localhost:5000/api";

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    // Rehydrate from localStorage on mount
    useEffect(() => {
        const storedToken = localStorage.getItem("vetai_token");
        const storedUser = localStorage.getItem("vetai_user");
        if (storedToken && storedUser) {
            setToken(storedToken);
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const saveSession = (userData, jwtToken) => {
        setUser(userData);
        setToken(jwtToken);
        localStorage.setItem("vetai_token", jwtToken);
        localStorage.setItem("vetai_user", JSON.stringify(userData));
    };

    const clearSession = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem("vetai_token");
        localStorage.removeItem("vetai_user");
    };

    /* ── Register ── */
    const register = async ({ name, email, password }) => {
        try {
            const res = await fetch(`${API}/auth/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password }),
            });
            const data = await res.json();
            if (!res.ok) return { success: false, error: data.error };
            saveSession(data.user, data.token);
            return { success: true };
        } catch {
            return { success: false, error: "Network error. Is the server running?" };
        }
    };

    /* ── Login ── */
    const login = async ({ email, password }) => {
        try {
            const res = await fetch(`${API}/auth/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });
            const data = await res.json();
            if (!res.ok) return { success: false, error: data.error };
            saveSession(data.user, data.token);
            return { success: true };
        } catch {
            return { success: false, error: "Network error. Is the server running?" };
        }
    };

    /* ── Logout ── */
    const logout = () => clearSession();

    return (
        <AuthContext.Provider value={{ user, token, loading, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
    return ctx;
}