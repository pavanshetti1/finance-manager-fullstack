import React, { useContext, useDebugValue, useEffect, useState } from 'react'
import { useAuth } from "../context/AuthContext";
import Layout from '../components/Layout'
import StatsSection from '../components/stats/StatsSection';
import axiosInstance from '../config/axios';
import { motion } from 'framer-motion';


const Dashboard = () => {
  const { user } = useAuth();
  const [expenses, setExpenses] = useState([]);
  const [filteredExpenses, setFilteredExpenses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [dateRange, setDateRange] = useState({start:"", end:""});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        const {data} = await axiosInstance.get("/expense/all");
        setExpenses(data);
        setFilteredExpenses(data);

        const uniqueCategoires = [...new Set(data.map((expense) => expense.category))];
        setCategories(uniqueCategoires);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }

    }
   
    fetchStats();
  }, [])

  //function to filter expenses
  useEffect(() => {
    let filtered = expenses;
    
    if(selectedCategory){
      filtered = filtered.filter((expense) => expense.category === selectedCategory);
    }

    if(dateRange.start && dateRange.end){
      filtered = filtered.filter(exp => {
        const expenseDate = new Date(exp.date);
        return expenseDate >= new Date(dateRange.start) && expenseDate <= new Date(dateRange.end);
      })
    }

    setFilteredExpenses(filtered);


  }, [selectedCategory, dateRange, expenses]);
  

  if (loading) return <p className="text-gray-500 animate-pulse">Loading expenses...</p>;

  return (
    <Layout>
      <motion.h2
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-6"
          >
            Dashboard Overview
        </motion.h2>
     
      <StatsSection />
      <div>
          <h3 className="text-lg font-semibold mt-8">Recent Expenses</h3>
          <p className="text-gray-500 mb-2">This section will show the latest transactions.</p>
      </div>
     
      {/* Filter Section */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap gap-4 mb-6"
      > 
        {/* Category Filter */}
        <select
            className="p-2 border rounded-lg"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
        >
            <option value="">All Categories</option>
            {categories.map((category, index) => (
                <option key={index} value={category}>{category}</option>
            ))}
        </select>

        {/* Date Range Filter */}
        <input
            type="date"
            className="p-2 border rounded-lg"
            value={dateRange.start}
            onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
        />
        <input
            type="date"
            className="p-2 border rounded-lg"
            value={dateRange.end}
            onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
        />
      </motion.div>

      {loading ? (
        <p>Loading expenses...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2">Date</th>
                <th className="p-2">Category</th>
                <th className="p-2">Description</th>
                <th className="p-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              {filteredExpenses.map((expense, index) => (
                <motion.tr
                  key={expense._id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="text-center border-t hover:bg-gray-100 transition"
                >
                  <td className="p-2">{new Date(expense.date).toLocaleDateString()}</td>
                  <td className="p-2">{expense.category}</td>
                  <td className="p-2">{expense.description}</td>
                  <td className="p-2 text-red-500">${expense.amount}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Layout>
  )
}

export default Dashboard