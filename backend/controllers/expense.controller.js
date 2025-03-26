    import expenseModel from '../models/expense.model.js';

// add new expense
export const addExpense = async (req, res) => {
    try {
        const { amount, category, description, date } = req.body;
        if (!amount || !category || !description || !date) {
            return res.status(400).json({ message: "All fields are required" });
        }
        
        const newExpense = new expenseModel({
            user: req.user.id,
            amount,
            category,
            description, 
            date
        });

        await newExpense.save();
        res.status(201).json({ message: "Expense added successfully" ,newExpense});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


// get all expenses
export const getAllExpenses = async ( req, res) => {
    try {
        const expenses = await expenseModel.find({ user: req.user.id }).sort({ date: -1 });

        res.status(200).json(expenses);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// update expense
export const updateExpense = async (req, res) => {
    try {
        const { amount, category, description, date } = req.body;
        if (!amount || !category || !description || !date) {
            return res.status(400).json({ message: "All fields are required" });
        }
        
        const expense = await expenseModel.findById(req.params.id);
        if (!expense) {
            return res.status(404).json({ message: "Expense not found" });
        }

        if (expense.user.toString() !== req.user.id) {
            return res.status(401).json({ message: "Not authorized" });
        }

        const updatedExpense = await expenseModel.findByIdAndUpdate(req.params.id, {
            amount,
            category,
            description,
            date
        }, { new: true });


        res.status(200).json({ message: "Expense updated successfully" , updatedExpense });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// delete expense
export const deleteExpense = async (req, res) => {
    try {
        const expense = await expenseModel.findById(req.params.id);
        if (!expense) {
            return res.status(404).json({ message: "Expense not found" });
        }

        if (expense.user.toString() !== req.user.id) {
            return res.status(401).json({ message: "Not authorized" });
        }

        await expenseModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Expense deleted successfully" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}