const express = require('express');
const router = express.Router();
const controller = require('../db/dbhelper');

router.put('', (req, res)=>{
    var data = {
        a : "dd",
        b : "ee"
    }
    res.jsonp(data);
});

module.exports = router;