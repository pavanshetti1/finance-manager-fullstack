import React, { use, useState } from 'react'
import axiosInstance from '../config/axios';
import toast from 'react-hot-toast';
import {useNavigate, Link} from 'react-router-dom';

const Signup = () => {

  const [Name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault()
    try {
      setLoading(true);
      const { data } = await axiosInstance.post("/api/register", {
        name: Name,
        email,
        password,
      });

      toast.success("Signup successful!");
      localStorage.setItem("token", data.token);

      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login Failed!");
    }  finally{
      setLoading(false);
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-xl font-semibold text-center">Sign Up</h2>
       
        <form onSubmit={handleSignup} className="mt-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 border rounded my-2 outline-none"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
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
          
          <button type="submit" className="w-full bg-green-500 text-white p-2 rounded cursor-pointer my-4 transform transition-transform duration-300 hover:scale-105">
            {loading ? "Loading..." : "Sign Up"}
          </button>
        </form>
        <p className="text-sm text-center mt-2">
          Already have an account? <Link to="/" className="text-blue-500">Login</Link>
        </p>
      </div>
    </div>
  )
}

export default Signup
