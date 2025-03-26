import React, { useEffect, useState } from 'react'
import axiosInstance from '../../config/axios'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const ExpenseTrendChart = () => {
    const [trendData, setTrendData] = useState([]); 
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        const fetchTrendData = async () => {    
            try {
                const {data} = await axiosInstance.get('/analytics/monthly-summary');
                const formattedData = data.map((item) => ({
                    month: `${item.month} ${item.year}`,
                    total: item.total,
                }))
                setTrendData(formattedData);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        fetchTrendData();
    }, [])

    if (loading) return <p className="text-gray-500 animate-pulse">Loading trend data...</p>;

  return (
    <div className="bg-white shadow-md p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">📈 Monthly Expense Trends</h3>
        <div className="w-full h-[300px] sm:h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trendData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="total" stroke="#FF8042" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    </div>
  )
}

export default ExpenseTrendChart