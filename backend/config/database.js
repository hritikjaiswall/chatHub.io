import mongoose from 'mongoose';
const connectDB = async () => {
    await mongoose.connect(process.env.MONGODB_URI).then(()=>{
        console.log("MongoDB connected successfully");
    }).catch((error) => {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1); // Exit the process with failure
    });
}

export default connectDB;