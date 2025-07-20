// This file defines the API endpoints for book-related operations.
// Member 2 sets up the routes.
// Member 3 (API Developer) will fill in the logic for the controller functions.
// Member 4 (Authentication Developer) will later add middleware to protect these routes.

const express = require('express');
const router = express.Router();
const {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
} = require('../controllers/bookController');

// Authentication middleware (protect, authorizeRoles) will be added here by Member 4
// once they have implemented it. For now, these routes are public.

// Routes for /api/books
router.route('/').get(getBooks).post(createBook);
router.route('/:id').get(getBookById).put(updateBook).delete(deleteBook);

module.exports = router;