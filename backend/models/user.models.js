import mongoose from "mongoose";
import bcrypt from 'bcryptjs'


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        minlength: [8, 'Password must be at least 8 character long'],
        required: true,
    },
    picture: {
        type: String,
    },
    tenthPercentage:{
        type:Number,
        min:0,
        max:100,
        required: true,
    },
    twelfthPercentage:{
        type:Number,
        min:0,
        max:100,
        required: true,
    },
    program:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        min:5,
        max:100,
        required: true,
    },
    contact:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        enum:["Male","Female"],
        required: true,
    }

}, { timestamps: true });


userSchema.pre('save', async function (next) {

    if (!this.isModified('password')) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();

    } catch (error) {
        next(error);
    }
})

userSchema.methods.comparePassword = function(password){
    return bcrypt.compare(password,this.password);
}


export const User = mongoose.model('User',userSchema);