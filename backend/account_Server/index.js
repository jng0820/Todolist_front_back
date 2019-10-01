const express = require('express');
const app = express();
const port = 8000;
const bodyParser = require('body-parser');
const passport = require('passport');
const flash = require('connect-flash'); 
// const cookieSession = require('cookie-session');
const cookieParser = require('cookie-parser');
const session = require('express-session');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use(session({
  'secret': '343ji43j4n3jn4jk3n'
}))

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