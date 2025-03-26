import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL || "http://localhost:5000",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
});    


export default axiosInstance;   