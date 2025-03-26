import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import axiosInstance from "../config/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Function to validate user authentication
    const authenticateUser = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            setUser(null);
            setLoading(false);
            return;
        }

        try {
            const { data } = await axiosInstance.get("/api/profile", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setUser(data);
        } catch (error) {
            console.error("Authentication failed", error);
            setUser(null);
            localStorage.removeItem("token");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        authenticateUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom Hook for easy access
export const useAuth = () => useContext(AuthContext);
