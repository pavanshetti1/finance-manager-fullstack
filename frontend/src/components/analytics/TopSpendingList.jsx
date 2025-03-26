import React, { useEffect, useState } from 'react'
import axiosInstance from '../../config/axios';

const TopSpendingList = () => {
    const [topCategory, setTopCategory] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

      const fetchTopCategory = async () =>{
        
        setLoading(true);
        try {
            const {data} = await axiosInstance.get('/analytics/category-summary');
            const sortedData = data.sort((a, b) => b.total - a.total).slice(0, 5);
            setTopCategory(sortedData);    
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
      }

        fetchTopCategory();
    }, [])
    

    if (loading) return <p className="text-gray-500 animate-pulse">Loading top spending data...</p>;

  return (
    <div className="bg-white shadow-md p-6 rounded-lg w-full">
        <h3 className="text-lg font-semibold mb-4">🔝 Top Spending Categories</h3>
        <ul className="space-y-3">
            {topCategory.map((item, index) => (
                <li key={index} className="flex justify-between p-3 bg-gray-100 rounded-lg">
                    <span className="font-medium">{item._id}</span>
                    <span className="text-red-500 font-bold">${item.total}</span>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default TopSpendingList