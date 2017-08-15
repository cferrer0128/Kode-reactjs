var path = require('path');
var fs = require('fs');
var express = require('express');
//imports
var indexRoutes = require('./routes/index');
var routerApi = require('./routes/tasks');
var config = require('../webpack.config.js');
var webpack = require('webpack');
var webpackDevMiddleWare = require('webpack-dev-middleware');
var webpackHotMiddleWare = require('webpack-hot-middleware');
var bodyParser = require('body-parser');
//create App.
var app = express();

//hot-module
var compiler = webpack(config);
app.use(webpackDevMiddleWare(compiler,{noInfo:true,publicPath:config.output.publicPath}));
app.use(webpackHotMiddleWare(compiler));

//view engine///
app.set('view engine','html');
//engine...
app.engine('html',function(path,options,callback){

    fs.readFile(path,'utf-8',callback);

});
//now we should configure the APi to use bodyParser and look for JSON data in the body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//middleware//
app.use(express.static(path.join(__dirname,'../client')));
//To prevent errors from Cross Origin Resource Sharing, we will set our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  //and remove cacheing so we get the most recent comments
  res.setHeader('Cache-Control', 'no-cache');
  next();
});
//routes
app.use('/',indexRoutes);
app.use('/api', routerApi);
//erros//
app.use(function(err , req , res, next){
    res.status(err.status || 500);
});

routerApi.get('/' , function(req, res){
    res.json({ message: 'API Initialized! on webpack...'});
});


//server app//
module.exports = app;
