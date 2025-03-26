import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';    

const userSchema = new mongoose.Schema({
    name: {
        type:String, 
        required: true
    },
    email: {
        type:String, 
        require:true, 
        unique:true
    },
    password: {
        type:String, 
        required:true,
        select: false
    }
}, {timestamps: true});


userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({id: this._id, email: this.email}, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
}

userSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

userSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password, 10);
}

const User = mongoose.model('user', userSchema);
export default User;