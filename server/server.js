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

//create App.
var app = express();

//hot-module
var compiler = webpack(config);
app.use(webpackDevMiddleWare(compiler,{noInfo:true,publicPath:config.output.publicPath}));
app.use(webpackHotMiddleWare(compiler));

//view engine///
app.set('view engine','html');

app.engine('html',function(path,options,callback){

    fs.readFile(path,'utf-8',callback);

});

//middleware//
app.use(express.static(path.join(__dirname,'../client')));
//routes
app.use('/',indexRoutes);
//api router...........
app.use('/api', routerApi);
//erros//
app.use(function(err , req , res, next){
    res.status(err.status || 500);
});
//server app//
module.exports = app;
