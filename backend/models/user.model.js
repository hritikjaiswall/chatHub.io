import mongoose from "mongoose"
import { Schema } from "mongoose"

const userModel = new Schema({
    userName:{
        type: String,
        required: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    profilePhoto:{
        type: String,
    },
    gender:{
        type: String,
        enum: ["male", "female", "other"],
        required: true
    }





},{timestamps: true})

const User = new mongoose.model("User", userModel)
export default User