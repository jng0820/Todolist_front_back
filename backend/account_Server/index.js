const express = require('express');
const cors = require('cors')
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
app.use(cors({
  Credential: true,
  origin: "http://localhost:8080/"
}));

app.use(cookieSession({
  keys: ['node_yun'],
  cookie: {
    maxAge: 100 * 60 * 60
  }
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

let login = require('./routes/login');
let logout = require('./routes/logout');
let refresh = require('./routes/refresh');

app.use('/auth/login',login);
app.use('/auth/logout',logout);
app.use('/auth/refresh',refresh);
app.listen(port,()=>{
    console.log("WAS port: " + port + " connected!")
});