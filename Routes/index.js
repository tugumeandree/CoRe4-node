const express = require('express');
const router = express.Router();

// const librarySchema = require('../Models/Book.model.js');

const {book_create_get,book_create_post,book_create_delete,book_create_put}  = require('../Controllers/booksController');
const { findById } = require('../Models/Book.model');

// const verify = require('./verifyToken');

router.get('/books', book_create_get);
    
    // res.json({msg:'Hello from our Node Server'});

router.post('/postbooks',book_create_post );

router.delete('/delete/:id',book_create_delete);

router.put('/putbooks/:id',book_create_put);
// Book.find((err, books) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(books);
//     }
// });

//INTERNAL MODEL
// const BookSchema = new mongoose.Schema({
//     title: { type: String, unique: true },
//     author: { type: String },
//     category: { type: String }
// });

// const Book = mongoose.model('Book', BookSchema);

// const book2 = new Book({
//     title: 'Book 2',
//     author: 'Joe Doe',
//     category: 'Fiction'
// });

// //saves data to the database
// book2.save();
module.exports = router;