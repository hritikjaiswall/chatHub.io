import express from "express"; // ✅ You NEED this, for express.urlencoded/json
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import userRoute from "./routes/userRoute.js";
import cookieParser from "cookie-parser";
import messageRoute from "./routes/message.route.js";
import cors from "cors";
import { globalErrorHandler } from "./middleware/errorMiddleware.js";
import { app, server } from "./socket/socket.js";

dotenv.config({ path: "./.env" });

const PORT = process.env.PORT || 8000;

// ✅ You need express here to use express.urlencoded and express.json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "https://chathub-frontend.vercel.app",
  credentials: true
}));
app.use(globalErrorHandler);

// Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/message", messageRoute);

// Start server
server.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
