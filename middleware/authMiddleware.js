// This file will contain middleware functions for authentication and authorization.
// Member 2 creates the empty functions.
// Member 4 (Authentication Developer) will complete this.
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const JWT_SECRET = process.env.JWT_SECRET;

// Middleware to protect routes (ensure user is logged in)
const protect = async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1]; // Get token

      const decoded = jwt.verify(token, JWT_SECRET)
console.log('Decoded Token:', decoded);
      req.user = await User.findById(decoded.id).select('-password');
      if (!req.user) {
      return res.status(404).json({ message: 'User not found' });
}
      next();
    } catch (error) {
      console.error(error);
      return res.status(401).json({ message: 'Not authorized, invalid token' });
    }
  } else {
    return res.status(401).json({ message: 'Not authorized, no token' });
  }
};

// Middleware to authorize users based on roles
const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    // Check if user has one of the required roles
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Forbidden: You do not have the required role' });
    }
    next();
  };
};

module.exports = { protect, authorizeRoles };