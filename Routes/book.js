const express = require('express');
const router = express.Router();
const Book= require('../Models/Book');
const Genre= require('../Models/Genre');

//GET REQUESTS
router.get('/',async(req,res)=>{
    const books=await Book.find().populate('genre');
    return res.send(books);
});


router.get('/:id', async (req, res) => {
    const book = await Book.findById(req.params.id).populate('genre');
    return res.send(book);
  })


//SUBMIT A BOOK TO THE DB i.e. POST REQUESTS
router.post('/',async (req,res)=>{
    const post= new Book({
        bookId: req.body.bookId,
        bookName: req.body.bookName,
        authorName: req.body.authorName,
        thumbnailUrl: req.body.thumbnailUrl,
        audioUrl: req.body.audioUrl,
        Description: req.body.Description,		
        SummaryText: req.body.SummaryText,		// read section
        genre: req.body.genre
    });
    try{
    const savedBook= await post.save();
    res.json(savedBook);
    }
    catch(err){
        res.json({message: err});
    }
});

module.exports = router;