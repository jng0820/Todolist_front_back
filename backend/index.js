const express = require('express');
const app = express();
const port = 8080;

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(bodyParser.urlencoded({extended:false}));

app.listen(port,()=>{
    console.log("WAS port: " + port + " connected!")
});