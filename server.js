// This file sets up the Express server, connects to MongoDB using environment variables,
// and defines the main routes for the application.

const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // Our new connection logic
const bookRoutes = require('./routes/bookRoutes');

// Member 4 will implement authRoutes. We include it here so the app knows about it.
const authRoutes = require('./routes/authRoutes');

// Load environment variables from .env file
require('dotenv').config();

// Connect to the database
connectDB();

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// --- Routes ---
// Book routes (API Developer will fill in logic for these)
app.use('/api/books', bookRoutes);

// Authentication routes. Member 4 will fill in the logic for these controllers.
app.use('/api/auth', authRoutes);

// Basic route for testing server status
app.get('/', (req, res) => {
  res.send('Library App API is running...');
});

// Use the PORT from .env or default to 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});