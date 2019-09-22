var dbconnect = require('./dbconnect');


function DBUse() {
    this.getAll = function(request, response) {
        dbconnect.getConnection(function(conn) {
            conn.query('SELECT * FROM todolist')
                .then((results) => {
                    var output = {};
                    output.datas = results;
                    if(results.length){
                        dbconnect.sendJSON(response, 200, output);
                    }
                    else{
                        dbconnect.sendJSON(response, 404, '');
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
    this.gettodo = function(request, response){
        dbconnect.getConnection(function(conn) {
            conn.query('SELECT * FROM todolist WHERE TODO_IDX ='+request.params.id)
                .then((results) => {
                    var output = {};
                    output.datas = results;
                    if(results.length){
                        dbconnect.sendJSON(response, 200, output);
                    }
                    else{
                        dbconnect.sendJSON(response, 404, '');
                    }
                    
                })
                .then((res) => {
                    conn.end();
                })
                .catch(err => {
                    console.log(err);
                    conn.end();
                })
        });
    }
}
 
module.exports = new DBUse();
