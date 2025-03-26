import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

const ProtectedRoute = () => {
    const { user, loading } = useAuth();
    const navigate = useNavigate();

    if(!loading && !user) {
        toast.error("You need to login first!");
        return <Navigate to="/" />;
    }

    if (loading) return <p>Loading...</p>;

    return user ? <Outlet /> : navigate("/");
};

export default ProtectedRoute;

