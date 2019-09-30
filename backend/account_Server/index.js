const express = require('express');
const app = express();
const port = 8000;
const bodyParser = require('body-parser');
const passport = require('passport');
const flash = require('connect-flash'); 
const cookieSession = require('cookie-session');
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

var login = require('./routes/login');
var logout = require('./routes/logout');

app.use(cookieSession({
    keys: ['yunseok'],
    cookie: {
      maxAge: 100 * 60 * 60 // 쿠키 유효기간 1시간
    }
  }));
  
app.use('/login',login);
app.use('/logout',logout);
app.listen(port,()=>{
    console.log("WAS port: " + port + " connected!")
});