const express = require('express');
const router = express.Router();
const controller = require('../db/dbhelper');

var isAuthenticated = function (req, res, next) {
    if (req.isAuthenticated())
      return next();
    res.send(401);
};

router.get('',isAuthenticated, (req, res)=>{
    var qry = `SELECT * FROM todolist where = "` + req.user.user_id+ `"`;
    controller.use(req,res,qry);
});

router.get('/:id',isAuthenticated, (req, res)=>{
    var qry = "SELECT * FROM todolist WHERE TODO_IDX = " + req.params.id;
    controller.use(req,res,qry);
});

module.exports = router;