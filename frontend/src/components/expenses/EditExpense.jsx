import React, { useEffect, useState } from 'react'
import axiosInstance from '../../config/axios';
import { motion } from "framer-motion";
import toast from 'react-hot-toast';


const EditExpense = ({isOpen, onClose, expense, onUpdate}) => {
    const [formData, setFormData] = useState({
        amount: "",
        category: "",
        description: "",
        date: ""
    });

    useEffect(() => {
      if(expense){
        setFormData({
            amount: expense.amount,
            category: expense.category,
            description: expense.description,
            date: expense.date.split("T")[0]
        })
      }
    }, [expense]);

    const handleChange = async (e) =>{
        setFormData({...formData, [e.target.name] : e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axiosInstance.put(`/expense/update/${expense._id}`, formData);
            toast.success("Expenses edited successfully");
            onUpdate();
            onClose();
        } catch (error) {
            console.log(error);
          toast.error("Failed to edit expense");  
        }
    }

    if(!isOpen) return null;
    
  return (
    <div className="fixed inset-0 bg-slate-600 bg-opacity-30 flex justify-center items-center">
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-6 rounded-lg shadow-lg w-96"
            >
                <h2 className="text-xl font-bold mb-4">Edit Expense</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
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
                    <div className="flex justify-end gap-2">
                        <button type="button" className="bg-gray-400 cursor-pointer text-white p-2 rounded-lg" onClick={onClose}>
                            Cancel
                        </button>
                        <button type="submit" className="bg-blue-500 cursor-pointer text-white p-2 rounded-lg">
                            Update Expense
                        </button>
                    </div>
                </form>
            </motion.div>
        </div>
  )
}

export default EditExpense