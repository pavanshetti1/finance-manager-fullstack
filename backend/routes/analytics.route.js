import express from 'express';
import {authMiddleware} from '../middleware/auth.middleware.js';
import * as analyticsController from '../controllers/analytics.controller.js';  

const router = express.Router();


router.get("/monthly-summary", authMiddleware, analyticsController.getMonthlySummary);
router.get('/category-summary', authMiddleware, analyticsController.getCategorySummary);

export default router;

