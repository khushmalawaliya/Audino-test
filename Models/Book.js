//Schema Defining for Book

const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
  bookId: String,
  bookName: String,
  authorName: String,
  thumbnailUrl: String,
  audioUrl: String,
  Description: String, //basic show before playing
  SummaryText: String, // read section
  genre: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Genre'
  }
});

module.exports = mongoose.model('Book', BookSchema);
