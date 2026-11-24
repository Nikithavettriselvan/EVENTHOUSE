import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/axios";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // On page load: if a token exists, find out who the user is
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLoading(false);
      return;
    }
    api
      .get("/users/me")
      .then((res) => setUser(res.data))
      .catch((err) => {
        if (err.response?.status === 401) localStorage.removeItem("token");
      })
      .finally(() => setLoading(false));
  }, []);

  const login = async (email, password) => {
    // FastAPI's login expects FORM data with the field name "username"
    const body = new URLSearchParams({ username: email, password });
    const res = await api.post("/auth/login", body);
    localStorage.setItem("token", res.data.access_token);
    const me = await api.get("/users/me");
    setUser(me.data);
    return me.data;
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);