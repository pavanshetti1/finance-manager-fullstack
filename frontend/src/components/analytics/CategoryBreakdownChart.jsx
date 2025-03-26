import React, { useEffect, useState } from 'react'
import axiosInstance from '../../config/axios'
import {PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer} from 'recharts'

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A020F0", "#FF69B4"];

const CategoryBreakdownChart = () => {
    const [categoryData, setCategoryData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      const fetchCategoryData = async () => {
        setLoading(true);
        try {
            const {data} = await axiosInstance.get('/analytics/category-summary');
        
            const formattedData = data.map((item) => ({
                name:item._id,
                value: item.total,
            }));
            setCategoryData(formattedData);
        } catch (error) {
            console.log(error);
            
        } finally {
            setLoading(false);
        }
    }
        fetchCategoryData();
    }, [])
    
    if (loading) return <p className="text-gray-500 animate-pulse">Loading category data...</p>;

return (
    <div className="bg-white shadow-md p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">📊 Category Breakdown</h3>
        <div className="w-full h-[300px] sm:h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={categoryData}
                        cx="50%"
                        cy="50%"
                        outerRadius="80%"
                        fill="#8884d8"
                        dataKey="value"
                        label
                    >
                        {categoryData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    </div>
)
}

export default CategoryBreakdownChart