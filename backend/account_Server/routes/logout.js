const router = express.Router();

router.get("",(req,res=>{
    req.session = null;
    var obj = {};
    res.send(200,obj);
})
)