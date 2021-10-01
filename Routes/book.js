const express = require('express');
const router = express.Router();
const Book= require('../Models/Book');
const Genre= require('../Models/Genre');

router.get('/',(req,res)=>{
    res.send('List of All Books');
});


router.get('/specific',(req,res)=>{
    res.send('Detail of specific Book');
});


//SUBMIT A BOOK
router.post('/',async (req,res)=>{
    const post= new Book({
        bookId: req.body.bookId,
        bookName: req.body.bookName,
        authorName: req.body.authorName,
        thumbnailUrl: req.body.thumbnailUrl,
        audioUrl: req.body.audioUrl,
        Description: req.body.Description,		//basic show before playing
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