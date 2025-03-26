import expenseModel from '../models/expense.model.js';
import mongoose from 'mongoose';

export const getMonthlySummary = async (req, res) => {
    try {
        const userId = new mongoose.Types.ObjectId(req.user.id);

        const monthlySummary = await expenseModel.aggregate([
            {
                $match: {
                    user: userId,
                },
            },
            { $addFields: { expenseDate: { $toDate: "$date" } } },
            { $group: { _id: { month: { $month: "$expenseDate" }, year: { $year: "$expenseDate" } }, total: { $sum: "$amount" } } },
            { $sort: { "_id.year": 1, "_id.month": 1 } },
            { $project: { 
                _id: 0, 
                month: {
                    $let: {
                        vars: { 
                            months: [null, "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] 
                        },
                        in: { $arrayElemAt: ["$$months", "$_id.month"] }
                    }
                },
                year: "$_id.year",
                total: 1
            }}
        ]);

        res.json(monthlySummary);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Something went wrong' });
        
    }
}

export const getCategorySummary = async (req, res) => {
   
    try {
        const userId = new mongoose.Types.ObjectId(req.user.id);    
        const categorySummary = await expenseModel.aggregate([
            { $match: { user: userId } },
            { $group: { _id: "$category", total: { $sum: "$amount" } } },
            { $sort: { total: -1 } }
        ]);

        res.json(categorySummary);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }

}