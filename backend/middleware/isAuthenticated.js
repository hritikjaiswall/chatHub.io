import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";

const isAuthenticated = asyncHandler(async (req, res, next) => {
  const token = req.cookies?.token || req.header("Authorization")?.replace("Bearer ", "");
  if (!token) {
    return res.status(401).json({ message: "Unauthorized request" });
  }

  const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  if (!decodedToken) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }

  req.id = decodedToken.userId; // 🔧 fixed key
  next();
});

export { isAuthenticated };
