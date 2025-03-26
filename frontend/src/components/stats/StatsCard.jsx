import React from 'react'
import {motion} from 'framer-motion';

const StatsCard = ({title, value, icon, color}) => {

  return (
   <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      className={`p-6 rounded-lg shadow-md flex items-center gap-4 border-t-4 ${color} bg-white cursor-pointer`}>
     
        <div className="p-3 rounded-full bg-gray-100 text-3xl text-gray-700">
            {icon}
        </div>
        <div>
            <h3 className="text-gray-600 text-sm font-medium">{title}</h3>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
   </motion.div>
  )
}

export default StatsCard