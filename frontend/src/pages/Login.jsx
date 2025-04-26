import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import axiosInstance from '../config/axios'
import { toast } from 'react-hot-toast'

const Login = () => {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        setLoading(true);
        e.preventDefault()
        try {
            const { data } = await axiosInstance.post("/api/login", {
                email,
                password,
            });
            toast.success("Login successful!");
            localStorage.setItem("token", data.token);
            navigate("/dashboard");
        } catch (error) {
           toast.error(error.response?.data?.message || "Login Failed!");   
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded shadow-md w-96">
                <h2 className="text-xl font-semibold text-center">Login</h2>
                <form onSubmit={handleLogin} className="mt-4">
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-2 border rounded my-2 outline-none"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="relative w-full">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className="w-full p-2 border rounded my-2 outline-none"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 right-0 p-2 text-sm text-gray-600 cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>
                    <button 
                        type="submit" 
                        className="w-full my-5 cursor-pointer bg-blue-500 text-white p-2 rounded transform transition-transform duration-300 hover:scale-105"
                    >
                       {loading ? "Loading..." : "Login"}
                    </button>
                </form>
                <p className="text-sm text-center mt-2">
                    Don't have an account? <Link href="/signup" className="text-blue-500">Sign up</Link>
                </p>
            </div>
        </div>
    )
}

export default Login
