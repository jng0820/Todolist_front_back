const express = require('express');
const router = express.Router();

router.get("",(req,res)=>{
        req.session.passport.user = null;
        res.send(200,'logout');
    }
)

module.exports = router;