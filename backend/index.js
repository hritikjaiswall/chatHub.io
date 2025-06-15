import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/database.js";
import userRoute from "./routes/userRoute.js";
import cookieParser from "cookie-parser";
import messageRoute from "./routes/message.route.js";
dotenv.config({ path: "./.env" });

const app = express()
const PORT = process.env.PORT || 8000
// Middleware
app.use(express.json());
app.use(cookieParser());
//routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/message", messageRoute);

app.listen(PORT, () => {
    connectDB();
    console.log(`Environment: ${process.env.NODE_ENV}`);
    console.log(`Database URI: ${process.env.MONGODB_URI}`);
    console.log(`Server is running on port ${PORT}`);
});