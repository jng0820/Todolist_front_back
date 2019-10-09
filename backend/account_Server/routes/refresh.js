const express = require('express');
const router = express.Router();
const config = require('../db/config');
const request = require('request');

var isAuthenticated = function (req, res, next) {
    if (req.isAuthenticated())
      return next();
    res.send(401);
  };

router.get("",isAuthenticated,(req,res)=>{
    var platform = req.user.platform;
    var options = {};
    switch(platform){
        case 'naver':
            options = {
                uri : config.federation.naver.refresh_url,
                qs:{
                    grant_type : 'refresh_token',
                    client_id : config.federation.naver.client_id,
                    client_secret : config.federation.naver.secret_id,
                    refresh_token : req.session.rf
                }
            }
            break;
        case 'kakao':
            options = {
                uri : config.federation.kakao.refresh_url,
                method : 'POST',
                headers : {
                    "Content-Type" : "application/x-www-form-urlencoded", 
                    "charset" : "utf-8"
                    
                },
                form : {
                    grant_type : 'refresh_token',
                    client_id : config.federation.kakao.client_id,
                    refresh_token : req.session.rf
                }
            }
            break;
    }
    request(options, function(err, _, body){
        if(err){
            res.send(err);
        }
        else{
            body = JSON.parse(body);
            req.session.ac = body.access_token;
            res.send(200,req.user);
        }
    });
})

module.exports = router;