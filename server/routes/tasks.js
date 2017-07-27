var path = require('path');
var routerApi = require('express').Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://userdb:userdb@ds163718.mlab.com:63718/cferrerdb', ['tasks']);

//Get All Tasks
routerApi.get('/tasks', function(req , res){
    db.tasks.find(function(err , tasks){
        if(err){
            res.send(err);
        }
        console.log(tasks);
        res.json(tasks);
        
    });
});



module.exports = routerApi;