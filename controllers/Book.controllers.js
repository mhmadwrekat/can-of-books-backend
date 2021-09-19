'use strict';
const { bookModel } = require('../models/Book.models');

let bookController = (req, res) => {
    bookModel.find().then(data => {
        res.json(data);
    })
}
module.exports = bookController;