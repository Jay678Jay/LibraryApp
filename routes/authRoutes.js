// This file will define the API endpoints for authentication.
// Member 2 creates the file and sets up the router.
// Member 4 (Authentication Developer) will complete this by uncommenting and implementing.

const express = require('express');
const router = express.Router();


const {
  registerUser,
  loginUser,
  getUserProfile,
  logoutUser
} = require('../controllers/authController');

const {
  protect,
  authorizeRoles
} = require('../middleware/authMiddleware');

// Public routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser); // Client removes token

// Protected route
router.get('/profile', protect, getUserProfile); // Requires token

module.exports = router;
