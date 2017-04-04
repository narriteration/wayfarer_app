'use strict'

//import dependencies
var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');


//TODO: require model's files

//Create instances
var app = express();
//var router = express.Router();


//Set port
const port = process.env.API_PORT || 3001;

//db config
//ADD YOUR INFO HERE!
//mongoose.connect

//config API to use bodyParser and look for JSON in req.body
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

//Prevent CORS errors
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  //Remove caching
   res.setHeader('Cache-Control', 'no-cache');
   next();
 });

 //set route path
app.route('/')
  .get(function(req, res) {
  res.send('Server.js is running');
});

app.listen(port, function() {
 console.log(`api running on port ${port}`);
});
