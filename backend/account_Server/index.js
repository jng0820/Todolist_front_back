const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');


const passport = require('passport') //passport module add
  , LocalStrategy = require('passport-local').Strategy;
const cookieSession = require('cookie-session');
const flash = require('connect-flash'); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(cookieSession({
    keys: ['yunseok_key'],
    cookie: {
      maxAge: 100 * 60 * 60 // 쿠키 유효기간 1시간
    }
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
  
app.use("/login","./routes/login")
app.use("/logout","./routes/logout")
app.listen(port,()=>{
    console.log("WAS port: " + port + " connected!")
});