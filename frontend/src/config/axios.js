import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL || "http://localhost:5000",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
});    

axiosInstance.interceptors.request.use(
  (config) => {
      const token = localStorage.getItem("token"); // ✅ Get token from localStorage
      if (token) {
          config.headers["Authorization"] = `Bearer ${token}`; // ✅ Attach token
      }
      return config;
  },
  (error) => {
      return Promise.reject(error);
  }
);



export default axiosInstance;   