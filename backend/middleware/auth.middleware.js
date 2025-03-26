import userModel from '../models/user.model.js';
import jwt from 'jsonwebtoken';

export const authMiddleware = async (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1] || req.cookies.token;
    if (!token) {
        return res.status(401).send({ message: 'Unauthorized' });
    }
    try {
        const data = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findOne({ _id: data.id});
        req.user = user;
        next();
    } catch (error) {
        return res.status(401).send({ message: 'Unauthorized' });
    }
}