import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";
import { useEffect } from "react";

const ProtectedRoute = () => {
    const { user, loading } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!loading && !user) {
            toast.error("You need to login first!");
        }
    }, [loading, user]);

    if (loading) return <p>Loading...</p>;

    return user ? <Outlet /> :  <Navigate to="/" replace />;
};

export default ProtectedRoute;

