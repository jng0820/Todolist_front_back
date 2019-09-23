var dbconnect = require('./dbconnect');


function DBUse() {
    this.use = function(request, response, qry) {
        dbconnect.getConnection(function(conn) {
            conn.query(qry)
                .then((results) => {
                    var output = {};
                    output.datas = results;
                    if(results.length == 0 || output.datas.affectedRows == 0){
                        dbconnect.sendJSON(response, 404, '');
                    }
                    else{
                        dbconnect.sendJSON(response, 200, output);
                    }
                })
                .then((res) => {
                    conn.end();
                })
                .catch(err => {
                    //handle error
                    console.log(err);
                    conn.end();
                })
        });
    }
}
 
module.exports = new DBUse();
