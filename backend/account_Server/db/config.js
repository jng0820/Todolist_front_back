module.exports = (function(){
    return {
        db_info:{
            host: "localhost",
            port: 3306,
            user: "root",
            password: "0820",
            database: "user"
        },
        federation : {
            naver : {
              client_id : '11',
              secret_id : '11',
              callback_url : '/auth/login/naver/callback'
            },
            kakao : {
              client_id : '11',
              callback_url : '/auth/login/kakao/callback'
            }
        }
    }
})();