const express = require ('express');
const server = express();
const dotenv = require('dotenv') 
const mongoose = require('mongoose');

var hostname = '127.0.0.1';

var port = '8080';

//Importing Routes
const authRouter = require('./Routes/auth');
const indexRouter = require('./Routes/index.js');

dotenv.config(); //loads environment variables from a .env file into process.env
//const lDatabase =  process.env.localDatabase;

//const path = require('path');

//Implementing middleware using the server.use method
// const bodyParser = require('body-parser');
server.use(express.json()); //Built-in middleware function; parses incoming requests with JSON payloads
server.use(express.urlencoded({ extended: true })); //Built-in middleware function; parses requests with urlencoded payloads
server.use(express.static('Public')); //Built-in middleware function; serves static files

<<<<<<< HEAD
//Router Middleware
server.use('/api/library/', indexRouter);
server.use('/api/user/', authRouter);

//Handling static files
server.get('/', (req, res) => {
    res.sendFile('./Public/index.html', { root: __dirname });
})

//server.use('/static', express.static('public'));
//server.use('/',indexRouter);
=======
server.use(express.json());
server.use(express.urlencoded());
server.use('/static', express.static('public'));
server.use('/',indexRouter);
>>>>>>> 4abdce7fdaabfb59eb6328f0e045d07dadd537da

//Test Route
server.get('/test', (req, res) => {
    res.send('Hello World!');
});
  

//Connecting Server to Databse
//(mongodb+srv://tugumeandree:<1234567890>@cluster0.9iurt.mongodb.net/<dbname>?retryWrites=true&w=majority)
mongoose.connect(process.env.localDatabase, 
    {   useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useFindAndModify: false, 
        useCreateIndex: true
    }
);
const db = mongoose.connection;

db.on('error', function (error) {
    console.log('connection error');
});

db.once('open', function () {
    console.log('database connected');
});

//Data modelling
//mongoose.Schema();
//mongoose.model();

//External modelling
//getting the model from models folder using it's path
//const Book = require('./Models/Book.model'); 

// shows all the books available in the books collection

server.listen(port, () => {
    console.log(`Server is running at http://${hostname}:${port}/`); 
});