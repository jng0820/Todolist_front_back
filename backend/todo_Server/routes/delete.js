const express = require('express');
const router = express.Router();
const controller = require('../db/dbhelper');

router.delete('/:id', (req, res)=>{
    var qry = "DELETE FROM todolist WHERE TODO_IDX = "+ req.params.id;
    controller.use(req,res,qry);
});

module.exports = router;