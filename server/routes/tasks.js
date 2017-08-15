var path = require('path');
var routerApi = require('express').Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://userdb:userdb@ds163718.mlab.com:63718/cferrerdb', ['tasks']);

//Get All Tasks
routerApi.route('/tasks')
.get(function(req , res){
     console.log('gettting task ' + JSON.stringify(req.body));
    db.tasks.find(function(err , tasks){
        if(err){
            res.send(err);
        }
        //console.log(tasks);
        res.json(tasks);
        
    });
})
.post(
    function(req , res){
      console.log('Posting task ' + JSON.stringify(req.body));
    var task = req.body;
        if(!task.title){
            res.status(400);
            res.json({
                "error": "Bad Data"
            });
        } else {
            db.tasks.save(task, function(err, task){
                if(err){
                    res.send(err);
                }
                res.json(task);
            });
        }
});



//delete Tasks
routerApi.delete('/task/:id', function(req , res){
  
     console.log('delete task ' + JSON.stringify(req.body));
    db.tasks.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
        if(err){
            console.log(err);
            res.send(err);
        }
         console.log('json task '+JSON.stringify(task));
        res.json(task);
    });
});

module.exports = routerApi;