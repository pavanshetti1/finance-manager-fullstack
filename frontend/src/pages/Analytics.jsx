import React from 'react'
import Layout from '../components/Layout'
import AIInsights from '../components/analytics/AIInsights'
import CategoryBreakdownChart from '../components/analytics/CategoryBreakdownChart'
import ExpenseTrendChart from '../components/analytics/ExpenseTrendChart'
import TopSpendingList from '../components/analytics/TopSpendingList'

const Analytics = () => {
  return (
    <Layout> 
        <h2 className="text-3xl font-bold mb-6">Analytics & Insights</h2>
        
        <AIInsights />

        <div className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
                <h3 className="text-lg font-semibold">Category Breakdown</h3>
                <CategoryBreakdownChart />
            </div>
            <div>
                <h3 className="text-lg font-semibold">Expense Trend</h3>
                <ExpenseTrendChart />
            </div>
        </div>

        <div className='mt-6'>
          <h3 className="text-lg font-semibold">Top Spending Categories</h3>
          <TopSpendingList />
        </div>

    </Layout>
  )
}

export default Analytics