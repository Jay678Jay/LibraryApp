const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const mainRoutes = require('./routes/main.routes');
const surveyRoutes = require('./routes/survey.routes');

dotenv.config();

const app = express();

// Updated CORS configuration to allow frontend access (local + Netlify)
const allowedOrigins = [
  'http://localhost:3000',
  'https://libraryappppixelforge.netlify.app'
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));

app.use(express.json());


app.use('/api', mainRoutes);
app.use('/api', surveyRoutes);


app.get('/', (req, res) => {
  res.send('Server is running...');
});


connectDB().then(() => {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
});
