const express = require('express');
const app = express();
const port = 3000;

var NaverStrategy = require('passport-naver').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var KakaoStrategy = require('passport-kakao').Strategy;



app.listen(port,()=>{
    console.log("WAS port: " + port + " connected!")
});