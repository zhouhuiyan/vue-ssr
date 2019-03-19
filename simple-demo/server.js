const express = require('express');
const server = express();

server.get('/',(req,res)=>{
  res.send('<h1>hello world</h1>')
})

server.listen(3000);