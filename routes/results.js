/**
 * Created by Brekkishhh on 19-06-2016.
 */

var express = require('express');
var router = express.Router();

var config = require('../config');
router.get('/',function (req,res,next) {

    res.render('result',{title:'Response',data:config.respons});
    
    
});

module.exports = router;