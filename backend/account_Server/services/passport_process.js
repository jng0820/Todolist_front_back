const controller = require("../db/dbhelper")
const bcrypt = require('bcrypt');

const NaverStrategy = require('passport-naver').Strategy;
const KakaoStrategy = require('passport-kakao').Strategy;
const passport = require('passport') //passport module add
  , LocalStrategy = require('passport-local').Strategy;

const secret_config = require('../db/config');


passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
  }, function (req, username, password, done) {
        var qrystr = `SELECT * FROM User WHERE User_id = "`+ info.auth_id + `";`;
        controller.use(qrystr).then(function(data){
          if(data != null){
            if(bcrypt.compareSync(password, data.datas[0].password)){
                console.log("로그인 성공");
                return done(null, {
                    user_id: data.datas[0].USER_ID,
                    nickname: data.datas[0].NICKNAME
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
    if(data.datas.length != 0){
      done(null, {
          'user_id': data.datas[0].USER_ID,
          'nickname': data.datas[0].NICKNAME,
          'platform' : info.auth_type,
          'ac' : info.ac,
          'rf' : info.rf
      });
    }
    else{
        var qrystr = `INSERT INTO User values("`+ info.auth_id +`",null,null,"`+ info.auth_name +`");`;
        var input_data = await controller.use(qrystr)
          if(input_data) {
            done(null,{
                'user_id' : info.auth_id,
                'nickname' : info.auth_name,
                'platform' : info.auth_type,
                'ac' : info.ac,
                'rf' : info.rf
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
      'auth_email': _profile.email,
      'ac' : accessToken,
      'rf' : refreshToken
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
      'auth_email': _profile.id,
      'ac' : accessToken,
      'rf' : refreshToken
    }, done);
  }
));
