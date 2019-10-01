const express = require('express');
const router = express.Router();


router.get("",(req,res)=>{
        req.logout()
        res.send(200,'{logout : true}')
    }
)

module.exports = router;