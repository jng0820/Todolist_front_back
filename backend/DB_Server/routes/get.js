const express = require('express');
const router = express.Router();
const controller = require('../db/dbhelper');

router.get('', (req, res)=>{
    var qry = "SELECT * FROM todolist";
    controller.use(req,res,qry);
});

router.get('/:id', (req, res)=>{
    var qry = "SELECT * FROM todolist WHERE TODO_IDX = " + req.params.id;
    controller.use(req,res,qry);
});

module.exports = router;