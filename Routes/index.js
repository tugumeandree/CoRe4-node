const express = require('express');
const router = express.Router();
const librarySchema = require('../Models/Book.model.js');

router.get('/',function(req,res){
    librarySchema.find({},(err,bookList)=>{
        if(err){
            console.log(err);
        }else{
            res.json(bookList);
        }
    });
    // res.json({msg:'Hello from our Node Server'});
});

router.post('/postbooks', (req,res)=>{
    const newBooks = new librarySchema({
        title: req.body.title,
        author: req.body.author,
        category: req.body.category
    });
    newBooks.save()
    .then((postedBooks)=>{
        res.json({
            postedBooks,
            msg:"posted books" + console.log("request posted")

        });
    })
    .catch((err)=>{
        res.json({success:false,msg: "Something went wrong" + console.log(err)})
    })
});

router.delete('/delete/:id',async (req,res) => {
    try{
        const bookId = await librarySchema.findById(req.params.id)
        await bookId.remove({
            id : req.params.id, 
            msg : console.log('Item deleted')
        })
    } catch (err) {
        console.error(err)
        res.json({
            msg : console.log(err)
        })
    }
    res.end();
})
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