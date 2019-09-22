var express = require('express');
var router = express.Router();
var controller = require('../db/dbhelper');

router.get('', (req, res)=>{
    controller.getAll(req,res);
});

router.get('/:id', (req, res)=>{
    controller.gettodo(req,res);
});

module.exports = router;