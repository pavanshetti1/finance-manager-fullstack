import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

export const getFinancialInsights = async (req, res) => {
    try {
        const {expenses} = req.body;

        const prompt =  `
                        You are a financial advisor. Based on the user's monthly expenses:
                        ${JSON.stringify(expenses)}

                        Provide clear, concise financial insights covering:
                        1. **Budgeting Tips**: Identify 2-3 key areas to reduce expenses or optimize spending.
                        2. **Future Expense Predictions**: Highlight possible upcoming expenses based on trends.
                        3. **Investment Suggestions**: Offer 2-3 beginner-friendly investment strategies. 
                        4. **Savings Strategy**: Suggest a simple savings plan.
        
                        Keep the response **brief (max 200 words)** and **easy to understand**.
                        `;

        const content = await model.generateContent(prompt);
        const response = content.response.text();

        res.json({insights: response});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Something went wrong' });
    }
}