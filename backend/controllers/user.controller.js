import { asyncHandler } from '../utils/asyncHandler.js';
import User from '../models/user.model.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { ApiError } from '../utils/ApiError.js';
import bcrypt from 'bcryptjs';

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

export { registerUser };
