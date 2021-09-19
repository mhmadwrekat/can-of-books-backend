'use strict';
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
app.use(cors());
const PORT = process.env.PORT;
const MONGO_SERVER = process.env.MONGO_SERVER;
// const {seedBook} = require('./models/Book.models') ;
mongoose.connect(`${MONGO_SERVER}/Book`, { useNewUrlParser: true, useUnifiedTopology: true });
const bookController = require('./controllers/Book.controllers');

//❤️❤️❤️❤️❤️
app.get('/DataBooks', bookController);

//❤️❤️❤️❤️❤️
app.listen(PORT, () => {
    console.log(`You In Port : ${PORT} 💚!`);
});
//❤️❤️❤️❤️❤️
/*
app.get('/books' , (req , res) => {
    seedBook() ;
    res.json({'message' : 'Create Book SUCCESS 💚!'})
})
*/