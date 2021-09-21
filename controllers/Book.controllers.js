'use strict';
const { bookModel } = require('../models/Book.models');

// Retern All Data From DB
let bookController = (req, res) => {
    bookModel.find().then(data => {
        res.status(200).json(data);
    })
}
// Post New Book 
const createBookController = async (req, res) => {
    let bookData = req.body;
    let newBook = bookModel(bookData);
    newBook.save();
    let data = await bookModel.find({});
    res.status(201).json(data);
}
// DELETE BOOK
const deleteBookController = (req, res) => {
    let id = req.params.id;
    bookModel.findByIdAndDelete(id, (error, data) => {
        if (error) {
            res.status(500).send("ERROR ❌");
        } else {
            bookModel.find({}).then(books => {
                res.json(books);
            })
        }
    })
}
module.exports = {
    bookController,
    createBookController,
    deleteBookController
}