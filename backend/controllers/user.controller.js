import userModel from '../models/user.model.js';
import {validationResult} from 'express-validator'; 

// Register a new user
export const registerUser = async(req, res)=> {
    const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }

    try{
        const {name, email, password} = req.body;
        const user = await userModel.findOne({email});
        if(user) {
            return res.status(400).json({message: 'User already exists'});  
        }

        const hashedPassword = await userModel.hashPassword(password);
        const newUser = new userModel({name, email, password: hashedPassword});
        await newUser.save();

        const token = newUser.generateAuthToken();
        res.cookie('token', token, {httpOnly: true}, {sameSite: 'None'}, {secure: true});

        return res.status(201).json({message: 'User registered successfully', token});
    } catch(error) {
        console.log(error);
        return res.status(500).json({message: error.message});
    }
}


// Login a user
export const loginUser = async(req, res)=> {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    try {
        
        const {email, password} = req.body;
        const user = await userModel.findOne({email}).select('+password');
        if(!user) {
            return res.status(400).json({message: 'Invalid email or password'});
        }

        const isMatch = await user.matchPassword(password);
        if(!isMatch) {
            return res.status(400).json({message: 'Invalid email or password'});
        }

        const token = user.generateAuthToken();
        res.cookie('token', token, {httpOnly: true}, {sameSite: 'None'}, {secure: true});

        return res.status(200).json({message: 'User logged in successfully', token});

    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

//logout user
export const logoutUser = async(req, res)=> {
    try {

        // Clear the token from the client-side
        res.cookie('token', '', {expires: new Date(0), httpOnly: true, sameSite: 'None', secure: true});
        res.clearCookie('token');
        return res.status(200).json({message: 'User logged out successfully'});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

// Get user profile
export const getUserProfile = async(req, res) => {
    try {
        return res.status(200).json(req.user);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}


//update profile
export const updateProfile = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    try {
        const {name} = req.body || req.user.name;
        const {email} = req.body || req.user.email;

        const user = await userModel.findByIdAndUpdate(req.user._id, {name, email}, {new: true});
        
        return res.status(200).json({message: 'User profile updated successfully', user});
        
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}