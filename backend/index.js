import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/database.js";

dotenv.config({ path: "./.env" });

const app = express()
const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    connectDB();
    console.log(`Environment: ${process.env.NODE_ENV}`);
    console.log(`Database URI: ${process.env.MONGODB_URI}`);
    console.log(`Server is running on port ${PORT}`);
});