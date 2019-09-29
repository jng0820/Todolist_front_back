const mariadb = require('mariadb');
const config = require('./config.js');

const pool = mariadb.createPool({
    host: config.db_info.host,
    port: config.db_info.port,
    user: config.db_info.user,
    password: config.db_info.password,
    database: config.db_info.database,
    connectionLimit: 5
});
 
function dbconnect() {
    //
    this.getConnection = function(callback) {
        pool.getConnection()
            .then(conn => {
                callback(conn);
            }).catch(err => {
            //not connected
        });
    };
 
    //
    this.getConnectionAsync = async function() {
        try {
            let conn = await pool.getConnection();
            // console.log("conn = " + conn); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
            return conn;
        } catch (err) {
            throw err;
        }
        return null;
    };
 
    //
    this.sendJSON = function(response, httpCode, body) {
        var result = JSON.stringify(body);
        response.send(httpCode, result);
    };
}
 
module.exports = new dbconnect();
