var express = require('express');
var router = express.Router();
router.post('/',function(req,res,next){
    var mobile = req.body.mobile;
    var pwd = req.body.pwd;
    if(mobile=='root'&&pwd=='root'){
        res.json({
            status:1
        });
    }else{
        res.json({
            status:0
        });
    }
});
module.exports = router;