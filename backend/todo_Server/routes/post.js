const express = require('express');
const router = express.Router();
const controller = require('../db/dbhelper');

var isAuthenticated = function (req, res, next) {
    if (req.isAuthenticated())
      return next();
    res.send(401);
};
  
router.post('',isAuthenticated, (req, res)=>{
    var input_data = req.body;
    var qry = "INSERT INTO todolist VALUES(null"+`,"`+input_data.title+`","`+input_data.content+`",now()`+//input_data.date+
    `,`+input_data.priority+`,"`+req.user.user_id+`")`;
    controller.use(req,res,qry);
});

module.exports = router;