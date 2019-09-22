const mariadb = require('mariadb');
const config = require('./config.js');

const pool = mariadb.createPool({
    host: config.host, port: config.port,
    user: config.user, password: config.password,
    connectionLimit: 5
});

function DB_Connect(){
    
    this.getConnection() = function(callback){
        pool.getConnection().then(conn=>{
        callback(conn);
        
        }).catch(err=>{
            throw err;
        })
        return null;
    };

    this.sendJSON = function(res, httpCode, body){
        var result = JSON.stringify(body);
        res.send(httpCode,result);
    }
}

module.exports = new DB_Connect();