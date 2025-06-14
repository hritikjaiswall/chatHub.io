import mongoose from "mongoose"
import { Schema } from "mongoose"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config({ path: "./.env" });

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
    },
    refreshToken: {
        type: String,
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
    userSchema.methods.generateAccessToken = function() {
        return jwt.sign({
            _id: this._id,
            username: this.username,
            email: this.email,
            fullname: this.fullname,
        },
        process.env.ACCESS_TOKEN_SECRET,

        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY || "1d"
        }
        )
    }

    userSchema.methods.generateRefreshToken = function() {
         return jwt.sign({
            _id: this._id
        },
        process.env.REFRESH_TOKEN_SECRET,

        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY || "10d"
        }
        )
    }

const User = new mongoose.model("User", userModel)
export default User