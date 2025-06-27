import express from "express";
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

// CORS setup for both local dev and deployed frontend
app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://chathubio.vercel.app"
  ],
  credentials: true
}));

// Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/message", messageRoute);

// Global Error Handler
app.use(globalErrorHandler);

// Start Server
server.listen(PORT, () => {
  connectDB();
  console.log(`🚀 Server running on port ${PORT}`);
});
