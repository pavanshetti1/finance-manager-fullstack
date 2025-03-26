import express from 'express';
import {authMiddleware} from '../middleware/auth.middleware.js';
import * as expenseController from '../controllers/expense.controller.js';

const router = express.Router();

/* 
    add new expense
    POST METHOD
*/
router.post("/add", authMiddleware, expenseController.addExpense);

/* 
    get all expenses
    GET METHOD
*/
router.get("/all", authMiddleware, expenseController.getAllExpenses);

/* 
    update expense
    PUT METHOD
*/
router.put("/update/:id", authMiddleware, expenseController.updateExpense);

/*
    Delete expense
    delete method
*/
router.delete("/delete/:id", authMiddleware, expenseController.deleteExpense);

export default router;