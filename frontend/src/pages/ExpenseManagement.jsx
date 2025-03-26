import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../config/axios';
import { toast } from 'react-hot-toast';
import Layout from '../components/Layout';
import { FaEdit, FaTrash } from 'react-icons/fa';
import EditExpense from '../components/expenses/EditExpense';


const ExpenseManagement = () => {
    const [expenses, setExpenses] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedExpense, setSelectedExpense] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchExpense();
    }, [])
    

    const fetchExpense = async ()=>{
        setLoading(true);
        try {
            const {data} = await axiosInstance.get("/expense/all");
            setExpenses(data);
        } catch (error) {
            console.log(error);
        } finally{
            setLoading(false);
        }
    }

    const openEditModal = (expense) => {
        setSelectedExpense(expense);
        setIsEditModalOpen(true);
    }

    const handleDelete = async (id)=> {
        if(!window.confirm("Are you sure you want to delete this expense? ")) return;
        try {
            await axiosInstance.delete(`/expense/delete/${id}`)
            toast.success("Expense deleted successfully");
            fetchExpense();
        } catch (error) {
            console.log(error);
            toast.error("Failed to delete the expense");
        }
    }

    if(loading) return <p className='text-gray-500 animate-pulse'>Loading Expenses...</p>

return (
    <Layout>
        <div className='w-full flex flex-col md:flex-row justify-between items-center'>
            <h2 className='text-2xl font-bold mb-4'>Expense Management</h2>
            <button
                    onClick={() => navigate('/expense/add')}
                    className='bg-green-500 transition hover:bg-green-600 active:scale-95 text-sm md:text-base text-white px-2 py-1 md:px-4 md:py-2 rounded mb-4 cursor-pointer'
            >+ Add Expense</button>
        </div>

        <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-md rounded-lg ">
                <thead>
                    <tr className="bg-gray-200 ">
                            <th className="p-3">Date</th>
                            <th className="p-3">Category</th>
                            <th className="p-3">Description</th>
                            <th className="p-3">Amount</th>
                            <th className="p-3">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((expense) => (
                        <tr key={expense._id} className="text-center border-t hover:bg-gray-100 transition">
                            <td className="p-3">{new Date(expense.date).toLocaleDateString()}</td>
                            <td className="p-3">{expense.category}</td>
                            <td className="p-3">{expense.description}</td>
                            <td className="p-3 text-red-500">${expense.amount}</td>
                            <td className="p-3 flex justify-center gap-2">
                                    <button
                                            onClick={() => openEditModal(expense)}
                                            className="text-blue-500 cursor-pointer"
                                    >
                                            <FaEdit />
                                    </button>
                                    <button
                                           onClick={()=> handleDelete(expense._id)} 
                                            className="text-red-500 cursor-pointer"
                                    >
                                            <FaTrash />
                                    </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* edit expense modal  */}
            <EditExpense 
                isOpen={isEditModalOpen}
                onClose={()=> setIsEditModalOpen(false)}
                expense={selectedExpense}
                onUpdate={fetchExpense}
            />
        </div>
    </Layout>
)
}

export default ExpenseManagement