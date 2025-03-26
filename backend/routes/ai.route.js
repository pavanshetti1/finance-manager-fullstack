import express from 'express';
import * as aiController from '../controllers/ai.controller.js';
import { authMiddleware } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/insights', authMiddleware, aiController.getFinancialInsights);

export default router;