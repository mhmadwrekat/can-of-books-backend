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
/*//❤️Add Book❤️
let seedBook = () => {
    let newBook = new bookModel({
        title : "The World That We Knew" ,
        description : "In 1941, during humanity’s darkest hour, three unforgettable young women must act with courage and love to survive, from the New York Times bestselling author of The Dovekeepers and The Marriage of Opposites Alice Hoffman. In Berlin, at the time when the world changed, Hanni Kohn knows she must send her twelve-year-old daughter away to save her from the Nazi regime. She finds her way to a renowned rabbi, but it’s his daughter, Ettie, who offers hope of salvation when she creates a mystical Jewish creature, a rare and unusual golem, who is sworn to protect Lea. Once Ava is brought to life, she and Lea and Ettie become eternally entwined, their paths fated to cross, their fortunes linked. Lea and Ava travel from Paris, where Lea meets her soulmate, to a convent in western France known for its silver roses; from a school in a mountaintop village where three thousand Jews were saved. Meanwhile, Ettie is in hiding, waiting to become the fighter she’s destined to be ." ,
        status : true ,
        email : "www.Alice-Hoffman@gmail.com"
    }) ;
    newBook.save() ;
}
*/
module.exports = {
    bookModel
}
