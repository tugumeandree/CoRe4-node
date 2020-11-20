const librarySchema = require('../Models/Book.model.js');

const  book_create_get  = function (req,res){
    librarySchema.find({},(err,bookList)=>{
        if(err){
            console.log(err);
        }else{
            res.json(bookList);
        }
    });
}

const book_create_post = function (req,res){
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
}

const  book_create_delete  = async function (req,res){
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
}
const  book_create_put  = async function (req,res){
try { 
    let book =  await librarySchema.findById(req.params.id)
    book.set({
        title : req.body.title,
        author : req.body.author,
        category : req.body.category
    })
   book = await book.save();
   res.send(book);
}
catch (err){
    res.status(400).json({
        msg : "invalid"
    })
}
}

module.exports = { 
    book_create_get,
    book_create_post,
    book_create_delete,
    book_create_put}

