const express = require('express');
const router = express.Router();
const dbController = require('../services/dbhelper');

var isAuthenticated = function (req, res, next) {
    if (req.isAuthenticated())
      return next();
    res.send(401);
};

router.get('',isAuthenticated, (req, res)=>{
    var qry = `SELECT * FROM todolist where USER = "` + req.user.user_id+ `" ORDER BY PRIORITY DESC, EXPIRED_DATE ASC;`;
    dbController.use(req,res,qry);
});

router.get('/:id',isAuthenticated, (req, res)=>{
    var qry = "SELECT * FROM todolist WHERE TODO_IDX = " + req.params.id;
    dbController.use(req,res,qry);
});

router.post('',isAuthenticated, (req, res)=>{
    var input_data = req.body;
    var qry = "INSERT INTO todolist VALUES(null"+`,"`+input_data.title+`","`+input_data.content+`","`+input_data.date+
    `",`+input_data.priority+`,"`+req.user.user_id+`")`;
    dbController.use(req,res,qry);
});

router.put('/:id', isAuthenticated,(req, res)=>{
    var input_data = req.body;
    var qry = "UPDATE todolist SET "+`TITLE="`+input_data.title+`",CONTENT="`+input_data.content+`",EXPIRED_DATE ="`+input_data.date+`",PRIORITY = `+input_data.priority+" WHERE TODO_IDX = "+req.params.id+";";
    dbController.use(req,res,qry);
});

router.delete('/:id',isAuthenticated, (req, res)=>{
    var qry = "DELETE FROM todolist WHERE TODO_IDX = "+ req.params.id;
    dbController.use(req,res,qry);
});


module.exports = router;