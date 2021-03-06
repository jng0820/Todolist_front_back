const express = require('express');
const router = express.Router();
const passport = require('passport');
const passport_process = require('../services/passport_process');
const isAuth = require('../services/isAuth');

router.get('/naver',
  passport.authenticate('naver')
);

router.get('/naver/callback',
  passport.authenticate('naver', {
    successRedirect: '/auth/login/success',
    failureRedirect: '/auth/login'
  })
);

router.get('/kakao',
  passport.authenticate('kakao')
);
  
router.get('/kakao/callback',
  passport.authenticate('kakao', {
    successRedirect: '/auth/login/success',
    failureRedirect: '/auth/login'
  })
);

router.get('/success',(req,res)=>{
  res.send(200,"<script>window.close()</script>");
})

router.get('/',isAuth,(req,res)=>{
  req.session.ac = req.user.ac;
  req.session.rf = req.user.rf;
  req.user.ac = req.user.rf = null;
  res.send(200,req.user);
})

module.exports = router;