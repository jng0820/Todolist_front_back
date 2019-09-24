const express = require('express');
const router = express.Router();
const controller = require('../db/dbhelper');

router.put('/:id', (req, res)=>{
    var input_data = req.body;
    var qry = "UPDATE todolist SET "+`TITLE="`+input_data.title+`",CONTENT="`+input_data.content+`",EXPIRED_DATE =`+input_data.date+`,PRIORITY = `+input_data.priority+" WHERE TODO_IDX = "+req.params.id;
    controller.use(req,res,qry);
});

module.exports = router;