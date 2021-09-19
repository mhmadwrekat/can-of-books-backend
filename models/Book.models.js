'use strict';
const mongoose = require('mongoose');

const bookSM = new mongoose.Schema({
    title: String,
    description: String,
    status: Boolean,
    email: String
});
const bookModel = mongoose.model('book', bookSM);
module.exports = {
    bookModel
}
//❤️Add Book❤️
/*
let seedBook = () => {
    let newBook = new bookModel({
        title : "Practical Magic" ,
        description : "The Owens sisters confront the challenges of life and love in this bewitching novel from New York Times bestselling author Alice Hoffman. For more than two hundred years, the Owens women have been blamed for everything that has gone wrong in their Massachusetts town. Gillian and Sally have endured that fate as well: as children, the sisters were forever outsiders, taunted, talked about, pointed at. Their elderly aunts almost seemed to encourage the whispers of witchery, with their musty house and their exotic concoctions and their crowd of black cats. But all Gillian and Sally wanted was to escape. One will do so by marrying, the other by running away. But the bonds they share will bring them back—almost as if by magi." ,
        status : true ,
        email : "www.Alice-Hoffman@gmail.com"
    }) ;
    newBook.save() ;
}
*/