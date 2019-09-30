var dbconnect = require('./dbconnect');


function DBUse() {
    this.use = async function(qry) {
        var output = {};
        var conn = await dbconnect.getConnectionAsync();
        var retval = await conn.query(qry).then((results) => {
            output.datas = results;
        }).then(() => {
            conn.end();
            return output;
        })
        .catch(err => {
            //handle error
            console.log(err);
            conn.end();
            return null;
        });
        return retval;
    }
}
 
module.exports = new DBUse();
