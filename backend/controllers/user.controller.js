import { asyncHandler } from '../utils/asyncHandler.js';
import User from '../models/user.model.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { ApiError } from '../utils/ApiError.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const generateAccessAndRefreshToken = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken()
    const refreshToken = user.generateRefreshToken()
    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });
    return {
      accessToken,
      refreshToken
    }
  } catch (error) {
    throw new ApiError(500, "Error generating tokens");
  }
}

const registerUser = asyncHandler(async (req, res) => {
  const { fullName, userName, email, password, confirmPassword, gender } = req.body;

  // Check for missing fields
  if (!fullName || !userName || !email || !password || !confirmPassword || !gender) {
    throw new ApiError(400, 'All fields are required');
  }

  // Check for empty strings
  if ([fullName, userName, email, password, confirmPassword, gender].some(field => field.trim() === '')) {
    throw new ApiError(400, 'All fields are required');
  }

  // Check if passwords match
  if (password !== confirmPassword) {
    throw new ApiError(400, 'Passwords do not match');
  }

  // Check if username already exists
  const existedUser = await User.findOne({ userName });
  if (existedUser) {
    throw new ApiError(400, 'Username already exists');
  }

  // Check password length
  if (password.length < 6) {
    throw new ApiError(400, 'Password must be at least 6 characters long');
  }

  // Check if email already exists
  const existedEmail = await User.findOne({ email });
  if (existedEmail) {
    throw new ApiError(400, 'Email already exists');
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Set profile photo based on gender
  const maleProfilePhoto = `https://avatar.iran.liara.run/public/boy?userName=${userName}`;
  const femaleProfilePhoto = `https://avatar.iran.liara.run/public/girl?userName=${userName}`;

  // Create user
  const user = await User.create({
    userName,
    email,
    fullName,
    password: hashedPassword,
    gender,
    profilePhoto: gender === 'male' ? maleProfilePhoto : femaleProfilePhoto
  });

  // Send response
  return res
    .status(201)
    .json(new ApiResponse(201, user, 'User registered successfully'));
});

const loginUser = asyncHandler(async (req, res) => {
  const { userName, password } = req.body;
  if (!userName || !password) {
    throw new ApiError(400, 'All fields are required');
  }
  const existingUser = await User.findOne({ userName });
  if (!existingUser) {
    throw new ApiError(404, 'User not found');
  }
  // Check password
  const isPasswordCorrect = await existingUser.isPasswordCorrect(password);
  if (!isPasswordCorrect) {
    throw new ApiError(400, 'Incorrect password');
  }
  const tokenData = {
    'userId': existingUser._id,
    'userName': existingUser.userName
  };
  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user._id);
  const loggedInUser = await User.findById(existingUser._id).select("-password -refreshToken");

  const options = {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    maxAge: 1 * 24 * 60 * 60 * 1000 // 1 day
  };
  console.log(res.cookies)

  // Send response
  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(200, {
        user: loggedInUser,
        accessToken,
        refreshToken
      }, "User logged in successfully")
    );
});

export { registerUser, loginUser };
