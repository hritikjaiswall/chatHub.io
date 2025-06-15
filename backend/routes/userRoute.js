import express from 'express';
import {registerUser,loginUser,logoutUser} from '../controllers/user.controller.js';
import {asyncHandler} from '../utils/asyncHandler.js';
import {verifyJWT} from '../middleware/auth.middleware.js';
const router = express.Router();

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/logout').post(verifyJWT,logoutUser);

export default router;
