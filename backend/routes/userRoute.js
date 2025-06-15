import express from 'express';
import {registerUser,loginUser,logoutUser,getOtherUsers} from '../controllers/user.controller.js';
import {asyncHandler} from '../utils/asyncHandler.js';
import {verifyJWT} from '../middleware/auth.middleware.js';
import {isAuthenticated} from '../middleware/isAuthenticated.js';

const router = express.Router();

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/logout').get(logoutUser);
router.route('/').get(isAuthenticated, getOtherUsers);

export default router;
