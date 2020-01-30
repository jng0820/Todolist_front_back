const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

const bodyParser = require('body-parser');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({
  Credential: true,
  origin: "http://localhost:8080"
}));
app.use(cookieSession({
    keys: ['node_yun'],
    cookie: {
      maxAge: 100 * 60 * 60
    }
}));

app.use(passport.initialize());
app.use(passport.session());

let todoController = require('./routes/todoController');

app.use('/api',todoController);

passport.deserializeUser(function (user, done) {
  done(null, user);
});

app.listen(port,()=>{
    console.log("WAS port: " + port + " connected!")
});