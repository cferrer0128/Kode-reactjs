var path = require('path');
var router = require('express').Router();

//routes//
router.get('/', function(req, res){
    res.sendFile(path.join(__dirname,'../../client/index.html'));
});

module.exports = router;