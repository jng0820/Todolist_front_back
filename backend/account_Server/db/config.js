module.exports = (function(){
    return {
        db_info:{
            host: "localhost",
            port: 3306,
            user: "root",
            password: "0820",
            database: "todolist"
        },
        federation : {
            naver : {
              client_id : 'yEo7Uc0S3m5JGm41JWPw',
              secret_id : 'diGVWPlEyh',
              callback_url : '/auth/login/naver/callback',
              refresh_url : 'https://nid.naver.com/oauth2.0/token',
              delete_url : 'https://nid.naver.com/oauth2.0/token'
            },
            kakao : {
              client_id : '74a6a0f36b8f78c4ef3e15a51d4ee042',
              callback_url : '/auth/login/kakao/callback',
              refresh_url : 'https://kauth.kakao.com/oauth/token',
              delete_url : 'https://kapi.kakao.com/v1/user/logout'
            }
        }
    }
})();