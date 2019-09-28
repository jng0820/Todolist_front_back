const express = require('express');
const app = express();
const port = 8000;
const bodyParser = require('body-parser');
const passport = require('passport');
const flash = require('connect-flash'); 


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

var login = require('./routes/login');
var logout = require('./routes/logout');

app.use('/login',login);
app.use('/logout',logout);
app.listen(port,()=>{
    console.log("WAS port: " + port + " connected!")
});