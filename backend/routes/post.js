const express = require('express');
const router = express.Router();
const controller = require('../db/dbhelper');


router.post('', (req, res)=>{
    var input_data = req.body;
    var qry = "INSERT INTO todolist VALUES(null"+`,"`+input_data.title+`","`+input_data.content+`",`+input_data.date+`,`+input_data.priority+")";
    controller.use(req,res,qry);
});

module.exports = router;