# 💰 Smart Personal Finance & Investment Manager

🚀 A **MERN-based** AI-powered personal finance manager to track expenses, analyze spending, and receive AI-driven financial insights.  

### 🌐 **Live Demo**  
🔗 [Finance Manager - Live Project](https://financed-manager.netlify.app/)  

---

## 📸 **Project Overview**  
This project helps users **track expenses**, **visualize financial insights**, and **get AI-driven investment suggestions**.  
### ✨ **Features**  
✅ **User Authentication** (Signup, Login, Logout)  
✅ **Expense Management** (Add, Edit, Delete Expenses)  
✅ **Financial Analytics** (Category breakdown, Monthly trends)  
✅ **AI-Powered Insights** (Spending patterns & Smart budgeting)  
✅ **Fully Responsive** (Optimized for Mobile & Desktop)  

---

## 🏗️ **Tech Stack**  

| **Technology**      | **Used For**        |
|---------------------|--------------------|
| **React.js**       | Frontend UI        |
| **Tailwind CSS**   | Styling & Layout   |
| **Node.js**        | Backend API        |
| **Express.js**     | Server Framework   |
| **MongoDB Atlas**  | Database           |
| **JWT & Cookies**  | Authentication     |
| **Axios**          | API Requests       |
| **React Router**   | Navigation         |

---

## 📂 **Project Structure**  
finance-manager/
│── backend/               # Backend (Node.js, Express, MongoDB)
│   ├── models/            # Mongoose Models (User, Expense)
│   ├── routes/            # API Routes
│   ├── middleware/        # Auth Middleware
│   ├── config/            # Database & Env Configs
│   ├── server.js          # Main Backend Server
│
│── frontend/              # Frontend (React, Tailwind, Vite)
│   ├── src/
│   │   ├── components/    # Reusable UI Components
│   │   ├── pages/         # Dashboard, Analytics, Expenses
│   │   ├── context/       # Global State Management (Auth)
│   │   ├── services/      # API Calls (Axios)
│   │   ├── App.jsx        # Main React App
│   ├── public/            # Static Files (Icons, Manifest)
│
│── .env                   # Environment Variables
│── README.md              # Project Documentation

# Project Documentation

---

## 🚀 **Setup & Installation**  

### **1️⃣ Clone the Repository**  
```sh
git clone https://github.com/your-username/your-repo-link.git
cd finance-manager
```
### 2️⃣ Backend Setup
#### 📁 Navigate to the backend folder
```sh
cd backend
npm install
```

#### 🔹 Create a .env file inside backend/
MONGO_URI=your-mongodb-connection-url
JWT_SECRET=your-secret-key
FRONTEND_URL=https://financed-manager.netlify.app

#### 🔹 Run the backend
```sh
npm run dev
```

### 3️⃣ Frontend Setup
#### 📁 Navigate to the frontend folder
```sh
cd frontend
npm install
```

#### 🔹 Create a .env file inside frontend/
VITE_BACKEND_URL=https://finance-manager-fullstack.onrender.com

#### 🔹 Run the frontend
npm run dev

## 📜 License
This project is open-source and free to use. Contributions are welcome! 😊

## 💡 Contributing
Pull requests are welcome! Please follow these steps:

1️⃣ Fork the repo
2️⃣ Create a new branch (git checkout -b feature-branch)
3️⃣ Make your changes & commit (git commit -m "Added new feature")
4️⃣ Push to the branch (git push origin feature-branch)
5️⃣ Create a Pull Request on GitHub

💬 Feedback & Support
If you have any issues or suggestions, feel free to:
📧 Email me: pavanshetti12@gmail.com
📢 Create an issue on GitHub
🙌 Happy Coding! 🚀🔥
