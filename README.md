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
│── backend/               # Backend (Node.js, Express, MongoDB) <br>
│   ├── models/            # Mongoose Models (User, Expense) <br>
│   ├── routes/            # API Routes<br>
│   ├── middleware/        # Auth Middleware <br>
│   ├── config/            # Database & Env Configs <br>
│   ├── server.js          # Main Backend Server<br>
│<br>
│── frontend/              # Frontend (React, Tailwind, Vite) <br>
│   ├── src/ <br>
│   │   ├── components/    # Reusable UI Components <br>
│   │   ├── pages/         # Dashboard, Analytics, Expenses <br>
│   │   ├── context/       # Global State Management (Auth) <br>
│   │   ├── services/      # API Calls (Axios) <br>
│   │   ├── App.jsx        # Main React App <br>
│   ├── public/            # Static Files (Icons, Manifest) <br>
│<br>
│── .env                   # Environment Variables <br>
│── README.md              # Project Documentation <br>

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
```sh
npm run dev
```

## 📜 License
This project is open-source and free to use. Contributions are welcome! 😊

## 💡 Contributing
Pull requests are welcome! Please follow these steps:<br>
1️⃣ Fork the repo <br>
2️⃣ Create a new branch (git checkout -b feature-branch) <br>
3️⃣ Make your changes & commit (git commit -m "Added new feature") <br>
4️⃣ Push to the branch (git push origin feature-branch) <br>
5️⃣ Create a Pull Request on GitHub <br>

##💬 Feedback & Support
If you have any issues or suggestions, feel free to: <br>
📧 Email me: pavanshetti12@gmail.com <br>
📢 Create an issue on GitHub <br>
🙌 Happy Coding! 🚀🔥 
