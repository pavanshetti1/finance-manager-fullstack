import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Toaster} from 'react-hot-toast';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './routes/ProtectedRoute';
import Analytics from './pages/Analytics';
import ExpenseManagement from './pages/ExpenseManagement';
import AddExpense from './pages/AddExpense';
import EditProfile from './pages/EditProfile';

const App = () => {
  return (
   <>
      <Toaster position='top-right' reverseOrder={false} />
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/edit-profile" element={<EditProfile />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/expenses" element={<ExpenseManagement />} />
              <Route path="/expense/add" element={<AddExpense />} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
   </>
  )
}

export default App