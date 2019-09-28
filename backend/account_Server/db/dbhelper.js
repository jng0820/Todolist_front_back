var dbconnect = require('./dbconnect');


function DBUse() {
    this.use = function(request, response, qry) {
        dbconnect.getConnection(function(conn) {
            conn.query(qry)
                .then((results) => {
                    var output = {};
                    output.datas = results;
                    if(results.length == 0 || output.datas.affectedRows == 0){
                        return output;
                    }
                    else{
                        return null;
                    }
                })
                .then((res) => {
                    conn.end();
                })
                .catch(err => {
                    //handle error
                    console.log(err);
                    conn.end();
                    return null;
                })
        });
    }
}
 
module.exports = new DBUse();
