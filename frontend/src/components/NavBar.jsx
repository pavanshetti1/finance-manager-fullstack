import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { FiMenu, FiX } from "react-icons/fi"; 
import { Link, useNavigate } from 'react-router-dom'
import axiosInstance from '../config/axios'
import { toast } from 'react-hot-toast'


const NavBar = () => {
    const { user } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();    

        const handleLogout = async () => {      
                try {
                        localStorage.removeItem("token");
                        await axiosInstance.get("/api/logout");   
                        toast.success("Logout successful!");
                        navigate("/");          
                } catch (error) {
                        
                }
        }


return (
    <nav className="max-w-screen bg-slate-600 text-white p-4 flex justify-between items-center">
                    {/* Logo */}
                    <h1 className="text-xl font-bold truncate">FinanceApp</h1>

                    {/* Sidebar Toggle Button for Mobile */}
                    {!isOpen && (
                            <button
                                    className="md:hidden text-white text-2xl"
                                    onClick={() => setIsOpen(!isOpen)}
                            >
                                    <FiMenu />
                            </button>
                    )}

                    {/* Sidebar Navigation (Mobile & Desktop) */}
                    <div
                            className={`fixed top-0 left-0 h-full min-w-64 bg-slate-600 p-5 transform ${
                                    isOpen ? "translate-x-0" : "-translate-x-full"
                            } transition-transform md:relative md:translate-x-0 md:flex md:space-x-4 md:bg-transparent md:p-0`}
                    >
                        {/* Close button inside Sidebar */}
                        <button
                                className="md:hidden text-white text-2xl mb-4"
                                onClick={() => setIsOpen(false)}
                        >
                                <FiX />
                        </button>

                        {/* Sidebar Links */}
                        <ul className="space-y-4 md:flex md:items-center md:space-y-0 md:space-x-6">
                                <li>
                                        <Link to="/dashboard" className="block md:inline-block hover:text-gray-300">Dashboard</Link>
                                </li>
                                <li>
                                        <Link to="/expenses" className="block md:inline-block hover:text-gray-300">Expenses</Link>
                                </li>
                                <li>
                                        <Link to="/analytics" className="block md:inline-block hover:text-gray-300">Analytics</Link>
                                </li>
                                <li>
                                        <Link to="/edit-profile" className="block md:inline-block hover:text-gray-300">Edit Profile</Link>
                                </li>
                                <li>
                                        <button
                                        onClick={handleLogout}  
                                        className="bg-red-500 px-3 py-2 rounded-md cursor-pointer text-white block md:inline-block hover:bg-red-600 transition">Logout</button>
                                </li>
                        </ul>
                    </div>
            </nav>
)
}

export default NavBar