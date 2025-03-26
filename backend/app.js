import express from 'express';
import env from 'dotenv';
env.config();
import cors from 'cors';
import connectDB from './config/connectdb.js';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.route.js';
import expenseRoutes from './routes/expense.route.js';
import anaylticsRoutes from './routes/analytics.route.js';
import aiRoutes from './routes/ai.route.js';

const app = express();
const PORT = process.env.PORT;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
connectDB();

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));


app.use("/api", authRoutes);
app.use("/expense", expenseRoutes);
app.use("/analytics", anaylticsRoutes);
app.use("/ai", aiRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});