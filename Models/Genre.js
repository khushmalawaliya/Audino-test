//Schema Defining for The Genre


const mongoose = require('mongoose');

const GenreSchema=mongoose.Schema({

    genreName: String,
});

module.exports=mongoose.model('Genre',GenreSchema);