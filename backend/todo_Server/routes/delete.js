const express = require('express');
const router = express.Router();
const controller = require('../db/dbhelper');

router.delete('/:id', (req, res)=>{
    if(req.user == null){
        res.send(401);
    }
    var qry = "DELETE FROM todolist WHERE TODO_IDX = "+ req.params.id;
    controller.use(req,res,qry);
});

module.exports = router;