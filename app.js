const express = require('express')();
const mongoose= require('mongoose');
const app = express;
const bodyParser = require('body-parser');

require('dotenv/config');

app.use(bodyParser.json());

//Import Routes
const bookRoute= require ("./Routes/book");  //BOOK ROUTE
app.use('/book',bookRoute);

const genreRoute= require ("./Routes/genre");  //GENRE ROUTE
app.use('/genre',genreRoute);


//Routes


//DB connection 

mongoose.connect(process.env.DB,
()=>{
    console.log('connected to DB');
});


//Listening

app.listen(3000);