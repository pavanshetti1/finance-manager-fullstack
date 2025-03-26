import React, { useEffect, useState } from 'react'
import StatsCard from './StatsCard'
import axiosInstance from '../../config/axios'
import { FaMoneyBillWave, FaChartLine, FaPiggyBank, FaShoppingCart } from "react-icons/fa";

const StatsSection = () => {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchStats = async () => {
      setLoading(true);
      try {
        const { data } = await axiosInstance.get("/analytics/monthly-summary");
        const latestStats = data.slice(-10);

        setStats(latestStats);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchStats();
  }, []);

  if (loading) return <p className="text-gray-500 animate-pulse">Loading stats...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
      {stats.length > 0 ? (
          stats.map((item, index) => (
              <StatsCard
                  key={index}
                  title={`Total Expenses - ${item.month} ${item.year}`} 
                  value={`$${item.total}`}
                  icon={<FaShoppingCart />}
                  color="border-red-500"
              />
          ))
      ) : (
        <p className="text-gray-500">No expense data available.</p>
      )}
    </div>
  )
}

export default StatsSection