'use strict';
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
app.use(cors());
const PORT = process.env.PORT;
const MONGO_SERVER = process.env.MONGO_SERVER;
 const {seedBook} = require('./models/Book.models') ;
mongoose.connect(`${MONGO_SERVER}/Book`, { useNewUrlParser: true, useUnifiedTopology: true });
const bookController = require('./controllers/Book.controllers');

//❤️Welcome Message❤️
app.get('/', (req, res) => {
    res.status(200).json({ "❤️": "Hello from The Back-End !" })
})
//❤️❤️❤️❤️❤️
app.get('/databooks', bookController);

//❤️❤️❤️❤️❤️
app.listen(PORT, () => {
    console.log(`You In Port : ${PORT} 💚!`);
});
/*//❤️Add Book❤️
app.get('/books' , (req , res) => {
    seedBook() ;
    res.json({'message' : 'Create Book SUCCESS ❤️💚!'})
})*/
