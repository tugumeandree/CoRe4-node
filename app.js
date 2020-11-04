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