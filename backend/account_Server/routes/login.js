const express = require('express');
const router = express.Router();
const passport = require('passport');
const passport_process = require('../services/passport_process');

var isAuthenticated = function (req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.send(401);
};

router.get('/naver',
  passport.authenticate('naver')
);

router.get('/naver/callback',
  passport.authenticate('naver', {
    successRedirect: '/login',
    failureRedirect: '/login'
  })
);

router.get('/kakao',
  passport.authenticate('kakao')
);
  
router.get('/kakao/callback',
  passport.authenticate('kakao', {
    successRedirect: '/login',
    failureRedirect: '/login'
  })
);

router.get('/',isAuthenticated,(req,res)=>{
  req.session.ac = req.user.ac;
  console.log(req.session.ac);
  req.session.rf = req.user.rf;
  req.user.ac = req.user.rf = null;
  res.send(200,req.user);
})

module.exports = router;