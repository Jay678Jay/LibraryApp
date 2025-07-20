// This file contains the function to connect to your MongoDB database
// using the URI from the .env file. This part is fully implemented by Member 2.

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Member 1's DB_URI is now taken from process.env.MONGO_URI
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // These options are often recommended for Mongoose v5,
      // but are the default in Mongoose v6+ and can be omitted.
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;