const express = require('express');
const router = express.Router();
var controller = require("../db/dbhelper")

var NaverStrategy = require('passport-naver').Strategy;
var KakaoStrategy = require('passport-kakao').Strategy;

router.get("")