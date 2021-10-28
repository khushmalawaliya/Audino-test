//Schema Defining for The Genre

const mongoose = require('mongoose');

const GenreSchema = mongoose.Schema({
  genreName: String,
  books: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book'
    }
  ]
});

module.exports = mongoose.model('Genre', GenreSchema);
