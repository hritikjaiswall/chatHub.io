import { asyncHandler } from '../utils/asyncHandler.js';
import User from '../models/user.model.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { ApiError } from '../utils/ApiError.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const generateAccessAndRefreshToken = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(500, "Error generating tokens");
  }
};

const registerUser = asyncHandler(async (req, res) => {
  const { fullName, userName, email, password, confirmPassword, gender } = req.body;

  if (!fullName || !userName || !email || !password || !confirmPassword || !gender) {
    throw new ApiError(400, 'All fields are required');
  }

  if ([fullName, userName, email, password, confirmPassword, gender].some(field => field.trim() === '')) {
    throw new ApiError(400, 'All fields are required');
  }

  if (password !== confirmPassword) {
    throw new ApiError(400, 'Passwords do not match');
  }

  if (await User.findOne({ userName })) {
    throw new ApiError(400, 'Username already exists');
  }

  if (await User.findOne({ email })) {
    throw new ApiError(400, 'Email already exists');
  }

  if (password.length < 6) {
    throw new ApiError(400, 'Password must be at least 6 characters long');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const profilePhoto = gender === 'male'
    ? `https://avatar.iran.liara.run/public/boy?userName=${userName}`
    : `https://avatar.iran.liara.run/public/girl?userName=${userName}`;

  const user = await User.create({
    fullName,
    userName,
    email,
    password: hashedPassword,
    gender,
    profilePhoto
  });

  return res.status(201).json(new ApiResponse(201, user, "User registered successfully"));
});

const loginUser = asyncHandler(async (req, res) => {
  const { userName, password } = req.body;

  if (!userName || !password) {
    throw new ApiError(400, 'All fields are required');
  }

  const user = await User.findOne({ userName });
  if (!user) {
    throw new ApiError(404, 'User not found');
  }

  const isPasswordCorrect = await user.isPasswordCorrect(password);
  if (!isPasswordCorrect) {
    throw new ApiError(400, 'Incorrect password');
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user._id);
  const loggedInUser = await User.findById(user._id).select("-password -refreshToken");

  const isProduction = process.env.NODE_ENV === "production";
  const options = {
    httpOnly: true,
    secure: isProduction,
    sameSite: 'strict',
    maxAge: 1 * 24 * 60 * 60 * 1000
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(new ApiResponse(200, { user: loggedInUser, accessToken, refreshToken }, "User logged in successfully"));
});

const logoutUser = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(req.user._id, {
    $set: { refreshToken: undefined }
  }, { new: true });

  const isProduction = process.env.NODE_ENV === "production";
  const options = {
    httpOnly: true,
    secure: isProduction,
    maxAge: 0
  };

  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, null, "User logged out successfully"));
});

export { registerUser, loginUser, logoutUser };
