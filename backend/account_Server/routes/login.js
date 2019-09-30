const express = require('express');
const router = express.Router();
const controller = require("../db/dbhelper")
const bcrypt = require('bcrypt');

const NaverStrategy = require('passport-naver').Strategy;
const KakaoStrategy = require('passport-kakao').Strategy;
const passport = require('passport') //passport module add
  , LocalStrategy = require('passport-local').Strategy;

  const secret_config = require('../db/config');

passport.serializeUser(function (user, done) {
done(null, user)
});

passport.deserializeUser(function (user, done) {
done(null, user);
});
  
var isAuthenticated = function (req, res, next) {
    if (req.isAuthenticated())
      return next();
    res.send(404);
};

passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
  }, function (req, username, password, done) {
        var qrystr = `SELECT * FROM User WHERE User_id = "`+ info.auth_id + `";`;
        controller.use(qrystr).then(function(data){
          if(data != null){
            if(bcrypt.compareSync(password, data[0].password)){
                console.log("로그인 성공");
                return done(null, {
                    user_id: data[0].user_id,
                    nickname: data[0].nickname
                });
            }
            else{
                console.log("패스워드가 일치하지 않습니다.");
                return done(false, null);
            }
        }
        else{
            console.log("사용자가 존재하지 않습니다.")
            return done(false, null);
        }
      });
    }
));

async function loginByThirdparty(info, done) {
    console.log('process : ' + info.auth_type);
    
    var qrystr = `SELECT * FROM User WHERE User_id = "`+ info.auth_id + `";`;
    var data = await controller.use(qrystr);
    if(data != null){
      done(null, {
          'user_id': data.datas[0].user_id,
          'nickname': data.datas[0].nickname
      });
    }
    else{
        var qrystr = `INSERT INTO User values("`+ info.auth_id +`",null,null,"`+ info.auth_name +`");`;
        var input_data = controller.use(qrystr)
          if(input_data) {
            done(null,{
                'user_id' : info.auth_id,
                'nickname' : info.auth_name
            });
          }
    }
    
}

passport.use(new NaverStrategy({
    clientID: secret_config.federation.naver.client_id,
    clientSecret: secret_config.federation.naver.secret_id,
    callbackURL: secret_config.federation.naver.callback_url
  },
  function (accessToken, refreshToken, profile, done) {
    var _profile = profile._json;

    console.log('Naver login info');
    console.info(_profile);

    loginByThirdparty({
      'auth_type': 'naver',
      'auth_id': _profile.id,
      'auth_name': _profile.nickname,
      'auth_email': _profile.email
    }, done);

  }
));

passport.use(new KakaoStrategy({
    clientID: secret_config.federation.kakao.client_id,
    callbackURL: secret_config.federation.kakao.callback_url
  },
  function (accessToken, refreshToken, profile, done) {
    var _profile = profile._json;
    console.log('Kakao login info');
    console.info(_profile);

    loginByThirdparty({
      'auth_type': 'kakao',
      'auth_id': _profile.id,
      'auth_name': _profile.properties.nickname,
      'auth_email': _profile.id
    }, done);
  }
));

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

router.get('/',(req,res)=>{
  var a = req.session;
  console.log(a);
})

module.exports = router;