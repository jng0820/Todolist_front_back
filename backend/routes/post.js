var express = require('express');
var router = express.Router();
var dbHelper = require('../db/dbconnect');

router.post('', (req, res)=>{
    var data = {
        a : "dd",
        b : "ee"
    }
    res.jsonp(data);
});

module.exports = router;