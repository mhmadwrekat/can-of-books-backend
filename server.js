'use strict';
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT;
const MONGO_SERVER = process.env.MONGO_SERVER;
const { seedBook } = require('./models/Book.models');
mongoose.connect(`mongodb+srv://${MONGO_SERVER}`, { useNewUrlParser: true, useUnifiedTopology: true });
const { bookController,
    createBookController,
    deleteBookController,
    updateBookController } = require('./controllers/Book.controllers');

//💙 UPDATE BOOK💙
app.put('/updatebook/:id', updateBookController)

// ❤️ DELETE BOOK❤️
app.delete('/deletebook/:id', deleteBookController);

// 💜  POST New BOOK💜 
app.post('/createbook', createBookController);

//🤍 GET Data From DB🤍
app.get('/data', bookController);

//🧡 Add Book🧡
app.get('/addbook', (req, res) => {
    seedBook();
    res.status(200).json({ 'message': 'Create Book SUCCESS ✔️!!' })
})

//💚 Welcome Message💚
app.get('/', (req, res) => {
    res.status(200).json({ "❤️": "Hello from The Back-End !✔️" })
})

//💙 PORT💙
app.listen(PORT, () => {
    console.log(`✔️ You In Port : ${PORT}✔️!`);
})