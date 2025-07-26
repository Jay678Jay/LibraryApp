// This file sets up the Express server, connects to MongoDB using environment variables,
// and defines the main routes for the application.

import { path } from path;
import { fileURLToPath } from 'url';

//Create _dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db'); // Our new connection logic
const bookRoutes = require('./routes/bookRoutes');

// Member 4 will implement authRoutes. We include it here so the app knows about it.
const authRoutes = require('./routes/authRoutes');

// Load environment variables from .env file
require('dotenv').config();

// Connect to the database
connectDB();

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

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
app.use(express.static)
// Use the PORT from .env or default to 5000
const PORT = process.env.PORT || 5000;


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'frontend', 'build')));
  app.get(/^\/(?!api).*$/, (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'build', 'index.html'));
});
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});