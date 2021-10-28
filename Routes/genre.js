const express = require('express');
const router = express.Router();
const Genre = require('../Models/Genre');

router.get('/', async (req, res) => {
  const genres = await Genre.find().populate('books');
  return res.send(genres);
});

//SUBMIT GENRE DETAILS TO DB
router.post('/', async (req, res) => {
  console.log(req.body);
  const genre = new Genre({
    genreName: req.body.genreName
  });

  const savedGenre = await genre.save();
  console.log(savedGenre);
  return res.json(savedGenre);
});

module.exports = router;
