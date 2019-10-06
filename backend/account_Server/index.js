const express = require('express');
const app = express();
const port = 8000;
const bodyParser = require('body-parser');
const passport = require('passport');
const flash = require('connect-flash'); 
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use(cookieSession({
  keys: ['node_yun'],
  cookie: {
    maxAge: 100 * 60 * 60
  }
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

var login = require('./routes/login');
var logout = require('./routes/logout');
var refresh = require('./routes/refresh');

app.use('/login',login);
app.use('/logout',logout);
app.use('/refresh',refresh);
app.listen(port,()=>{
    console.log("WAS port: " + port + " connected!")
});