import mongoose from "mongoose"
import { Schema } from "mongoose"

const userModel = new Schema({
    userName:{
        type: String,
        required: true,
    },
    // Add this in userModel
email: {
    type: String,
    required: true,
    unique: true,
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
    // userModel.pre("save",async function(next){
    //     if(!this.isModified("password")) return next();
    //     this.password = await bcrypt.hash(this.password, 10);
    //     next();
    // })

    userModel.methods.isPasswordCorrect = async function (password){
        return await bcrypt.compare(password, this.password);
    }

const User = new mongoose.model("User", userModel)
export default User