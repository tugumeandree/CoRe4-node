// //server with plain nodejs
// const http = require('http');
// const hostname = 'localhost';
// const port = '5000';
// //create server
// const server = http.createServer((req,res)=>{
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello From Server');
// });

// server.listen(port,hostname,(err)=>{
//     if(err) console.log(err);
//     console.log(`Server running at http://${hostname}:${port}/`);
// })

//server with expressjs
const express = require('express');
const hostname = 'localhost';
const port = '5000';
const server = express();

server.get('/',(req,res)=>{
    res.json(
        {
            userName:"andrew",
        password:"1234456",
        email:"andrew@gmail.com"
    }
        )
});
server.get('/products',(req,res)=>{
    res.json(
        {data:"Product Data"}
        )
});

server.listen(port,hostname,(err)=>{
    if(err) {
        console.log(err)
    };
    console.log(`Server running at http://${hostname}:${port}/`);
})