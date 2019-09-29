var dbconnect = require('./dbconnect');


function DBUse() {
    this.use = async function(qry) {
        // dbconnect.getConnection(function(conn) {
        //     conn.query(qry)
        //         .then((results) => {
        //             var output = {};
        //             console.log(results);
        //             output.datas = results;
        //             if(results.length == 0 || output.datas.affectedRows == 0){
        //                 return new Promise(function(resolve, reject){
        //                     resolve(null);
        //                 });
        //             }
        //             else{
        //                 return new Promise(function(resolve, reject){
        //                     resolve(output);
        //                 });
        //             }
        //         })
        //         .then(() => {
        //             conn.end();
        //         })
        //         .catch(err => {
        //             //handle error
        //             console.log(err);
        //             conn.end();
        //             return new Promise(function(resolve, reject){
        //                 resolve(null);
        //             });
        //         })
        // });
        var conn = await dbconnect.getConnectionAsync();
        conn.query(qry)
            .then((results) => {
                var output = {};
                output.datas = results;
                if(results.length == 0 || output.datas.affectedRows == 0){
                    return new Promise(function(resolve, reject){
                        resolve(null);
                    });
                }
                else{
                    return new Promise(function(resolve, reject){
                        resolve(output);
                    });
                }
            })
            .then(() => {
                conn.end();
            })
            .catch(err => {
                //handle error
                console.log(err);
                conn.end();
                return new Promise(function(resolve, reject){
                    resolve(null);
                });
            })
    }
}
 
module.exports = new DBUse();
