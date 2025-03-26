import React, { useEffect, useState } from 'react'
import axiosInstance from '../../config/axios'
import ReactMarkdown from "react-markdown";


const AIInsights = () => {
    const [insights, setInsights] = useState("")
    const [loading, setLoading] = useState(false)   
    
   
      const fetchInsights = async () => {
        setLoading(true)
        try {
            const {data} = await axiosInstance.post('/ai/insights');
            console.log(data);
            setInsights(data.insights);
        } catch (error) {
            console.log(error);
            setInsights("Unable to generate insights at this moment.");
        } finally{
            setLoading(false);
        }
      }

      
      
  
    

  return (
    <div className="bg-white shadow-md p-6 rounded-lg">
            <div className='md:flex  md:justify-between md:items-center'>
              <h3 className="text-lg  font-semibold">🔍 AI-Powered Financial Insights</h3>
              <button
                onClick={() => fetchInsights()}
              className='bg-blue-500 p-2 text-white rounded-lg mt-2 md:mt-0'>Get Ai Insights</button>

            </div>
            {loading ? (<p className="text-gray-500 animate-pulse">Analyzing your expenses...</p>) : 
                (   <div className="mt-2 text-gray-700"> 
                        <ReactMarkdown>{insights}</ReactMarkdown>
                    </div>
                )
            }
    </div>
  )
}

export default AIInsights