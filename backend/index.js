const express = require('express');
const app = express();
const port = 8080;

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var get = require('./routes/get');
var post = require('./routes/post');
var put = require('./routes/put');
var del = require('./routes/delete');
app.use('/api',[get, post, put, del]);

app.listen(port,()=>{
    console.log("WAS port: " + port + " connected!")
});