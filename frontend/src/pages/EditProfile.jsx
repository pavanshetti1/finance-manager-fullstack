import { useEffect, useState } from "react";
import axiosInstance from "../config/axios";
import Layout from "../components/Layout";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
    const { user, setUser } = useAuth(); // Get current user from context
    const [formData, setFormData] = useState({
        name: "",
        email: "",
    });

    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            setFormData({ name: user.name, email: user.email});
        }
    }, [user]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
       
        try {
            const { data } = await axiosInstance.put("/api/update-profile", formData);
            toast.success("Profile updated successfully!");
            setUser(data.user); // Update context with new user data
            navigate("/dashboard");
        } catch (error) {
            console.log(error);
            toast.error("Failed to update profile");
        }
    };

    return (
        <Layout>
            <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
            <div className="w-full md:mt-30 md:flex justify-center items-center ">
                <form onSubmit={handleSubmit} className="md:max-w-1/2 space-y-4 bg-white p-6 rounded-lg shadow-md">
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-lg"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-lg"
                        required
                    />
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg w-full">
                        Update Profile
                    </button>
                </form>
            </div>
        </Layout>
    );
};

export default EditProfile;
