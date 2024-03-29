import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        maxLength: 25
    },
    email:{
        type: String,
        required: true,
        // maxLength: 25
    },
    password:{
        type:String,
        required:true,
        // maxLength: 25
    },
    role:{
        type:String,
        required: true
    }
},{
    timestamps:true
})

const user = mongoose.model('users', userSchema)
export {user}