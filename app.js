//connecting Database to nodejs
//(mongodb+srv://tugumeandree:<1234567890>@cluster0.9iurt.mongodb.net/<dbname>?retryWrites=true&w=majority)

const mongoose = require('mongoose');
const express = require ('express');

const server = express();
var hostname = '127.0.0.1';
var port = '8080';

server.get('/',function(req,res){
    res.json({msg:'Hello from our Node Server'});
});


server.listen(port,function(){
    console.log(`Server is running at http://${hostname}:${port}/`); 
})

mongoose.connect('mongodb://localhost/core4',{ useNewUrlParser: true,useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error',function(error){
    console.log('connection error');
});

db.once('open',function(){
    console.log('database connected');
});

//Data modelling
// mongoose.model();
// mongoose.Schema();

//EXTERNAL MODEL
//getting the model from models folder using it's path
// const Book = require('./models/Book.model'); 


//INTERNAL MODEL
const BookSchema = new mongoose.Schema({
    title: { type: String, unique: true },
    author: { type: String },
    category: { type: String }
});

const Book = mongoose.model('Book', BookSchema);

const book2 = new Book({
    title: 'Book 2',
    author: 'Joe Doe',
    category: 'Fiction'
});

//saves data to the database
book2.save();

// shows all the books available in the books collection
Book.find((err, books) => {
    if (err) {
      console.log(err);
    } else {
      console.log(books);
    }
  });