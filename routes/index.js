var express = require('express');
var router = express.Router();
var https = require('http');
var config = require('../config');
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Hackerearth Api Test' });
    
});

router.post('/',function (req,res,next) {

    var source = req.body.sourcecode;
    var lang = req.body.languageselect;
    var type = req.body.typeselect;
    
    var url;
    if (type == "COMPILE"){
        url = config.he_compile_url;
    }
    else{
        url = config.he_run_url;
    }

    var dataStr = {client_secret:config.he_secret,
        source:source,
        lang:lang };


    request({
        uri: url,
        method: 'POST',
        form:dataStr

    },function (error,response,body) {
           res.render('result',{title:'Response',data:body});

    });


});

module.exports = router;
