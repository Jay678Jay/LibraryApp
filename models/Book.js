// This file defines the Mongoose schema for the 'Book' object,
// precisely matching the fields Member 1 has already defined.
// This part is fully implemented by Member 2, based on Member 1's work.

const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a title'],
      trim: true, // Removes whitespace from both ends of a string
    },
    author: {
      type: String,
      required: [true, 'Please add an author'],
      trim: true,
    },
    ISBN: { // Using uppercase ISBN as defined by Member 1
      type: String,
      required: [true, 'Please add an ISBN'],
      unique: true, // ISBN should be unique for each book
      trim: true,
    },
    available: { // Using 'available' boolean as defined by Member 1
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields automatically
  }
);

module.exports = mongoose.model('Book', bookSchema);