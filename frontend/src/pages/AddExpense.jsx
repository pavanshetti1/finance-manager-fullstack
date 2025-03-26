import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout';
import axiosInstance from '../config/axios';
const AddExpense = () => {
    const [formData, setFormData] = useState({
        date: '',
        category: '',
        description: '',
        amount: ''
    })
    const navigate = useNavigate();

    const handleChange = (e)=> {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axiosInstance.post('/expense/add', formData);
            toast.success("Expense added successfully");
            navigate("/expenses");
        } catch (error) {
            toast.error("Failed to add expense");
        }
    }
    

  return (
    <Layout>
        <h2 className="text-2xl font-bold mb-4">Add Expense</h2>
        <div className='w-full md:mt-20 mt-10 flex justify-center items-center'>
            <form onSubmit={handleSubmit} className="space-y-4 md:w-96  bg-white p-6 rounded-lg shadow-md">
                <input
                    type="number"
                    name="amount"
                    placeholder="Amount"
                    value={formData.amount}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-lg"
                    required
                />
                <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-lg"
                    required
                />
                <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-lg"
                />
                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-lg"
                    required
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg w-full">
                    Add Expense
                </button>
            </form>
        </div>
    </Layout>
  )
}

export default AddExpense