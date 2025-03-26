import userModel from '../models/user.model.js';
import express from 'express';
import {body} from 'express-validator';
import * as userController from '../controllers/user.controller.js';
import {authMiddleware} from '../middleware/auth.middleware.js';

const router = express.Router();

/* REGISTER API
    POST MEHTOD
*/
router.post('/register', [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Invalid email address'),

], userController.registerUser);


/* LOGIN API
    POST METHOD
*/
router.post('/login', [
    body('email').isEmail().withMessage('Invalid email address'),
], userController.loginUser);


/* LOGOUT API
    GET METHOD
*/  
router.get('/logout', userController.logoutUser);

/* get USER profile API
    GET METHOD
*/
router.get('/profile', authMiddleware ,userController.getUserProfile);


/* update user profile
    PUT METHOD
*/
router.put("/update-profile", [
    authMiddleware,
    body('name').optional().notEmpty().withMessage("Name cannot be empty"),
    body('email').optional().isEmail().withMessage('Enter a valid email')
], userController.updateProfile);

export default router;