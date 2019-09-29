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
              callback_url : '/login/naver/callback'
            },
            kakao : {
              client_id : '74a6a0f36b8f78c4ef3e15a51d4ee042',
              callback_url : '/login/kakao/callback'
            }
        }
    }
})();