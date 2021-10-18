const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;


app.use(cors());

app.use(cookieParser());

app.use(express.json());

app.get('/home', function(req,res){
    res.json({message:'hello world'});
});

app.listen(port, function(){
    console.log('Server runing on port ${ port } ');
});