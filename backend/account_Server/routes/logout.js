const express = require('express');
const router = express.Router();
const passport_process = require('../services/passport_process');
const config = require('../db/config');
const request = require('request');

var isAuthenticated = function (req, res, next) {
    if (req.isAuthenticated())
      return next();
    res.send(401);
  };

router.get("",isAuthenticated,(req,res)=>{
    var platform = req.user.platform
    var options = {};
    switch(platform){
        case 'naver':
            options = {
                uri : config.federation.naver.delete_url,
                qs:{
                    grant_type : 'delete',
                    client_id : config.federation.naver.client_id,
                    client_secret : config.federation.naver.secret_id,
                    access_token : req.session.ac,
                    service_provider : 'NAVER'
                }
            }
            break;
        case 'kakao':
            options = {
                uri : config.federation.kakao.delete_url,
                method : 'POST',
                headers : {
                  Authorization : "Bearer " + req.session.ac
                },
            }
            break;
    }
    req.logout();
    request(options, function(err, _, body){
      if(err){
          res.send(err);
      }
      else{
          res.send(200, '{logout : true}');
      }
  });
})

module.exports = router;