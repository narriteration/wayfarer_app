'use strict'

//import dependencies
var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    db = require('./models');


//Create instances
var app = express();


//Set port
const port = process.env.API_PORT || 3001;

//db config
//ADD YOUR INFO HERE!

//config API to use bodyParser and look for JSON in req.body
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

//Prevent CORS errors
app.use(function(req, res, next) {
  res.setHeader('AccessControlAllowOrigin', '*');
  res.setHeader('AccessControlAllowCredentials', 'true');
  res.setHeader('AccessControlAllowMethods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('AccessControlAllowHeaders', 'AccessControlAllowHeaders, Origin,Accept, XRequestedWith, ContentType, AccessControlRequestMethod, AccessControlRequestHeaders');

  //Remove caching
   res.setHeader('CacheControl', 'nocache');
   next();
 });


//set route path
app.get('/', function(req, res) {
  res.json({message: 'API initialized'});

});

//Get Locations
app.get('/api/locations', function(req, res) {
  db.Location.find({}, function(err, locations){
    res.json(locations);
  })
});

//Create Location
app.post('/api/locations', function(req, res) {
  db.Location.create(req.body, function(err, location) {
      if (err) { console.log('error', err); }
      console.log(location);
      res.json(location);
    });
})

//get single location
app.get('/api/locations/:locationId', function(req, res) {
    db.Location.findOne({_id: req.params.locationId}, function(err, foundLocation) {
        if (err) {
            console.log('got an error');
        }
        res.json(foundLocation)
    })
})


app.get('/api/users', function(req, res) {
  db.User.find({}, function(err, users){
    res.json(users);
  })
});

//creating user
app.post('/api/user', function(req, res) {
  db.User.create(req.body, function(err, user) {
      if (err) { console.log('error', err); }
      console.log(user);
      res.json(user);
    });
})

//delete user
app.delete('/api/user/:userId', function(req, res){
  db.User.findOneAndRemove({ _id: req.params.userId }, function(err, foundUser){
    res.json(foundUser);
  });
})

//edit user
app.put('/api/user/:userId', function(req, res){
    console.log(req.body)
    db.User.findOneAndUpdate({_id: req.params.userId}, req.body, {new:true}, function(err, foundUser) {
        if (err) {
          console.log('got an error');
        }
      console.log(foundUser)
        res.json(foundUser)
    });
  // at this point person is null.
});

//create new comments
app.post('/api/comments', function(req, res) {
  console.log(db.Comments)
  db.Comments.create(req.body, function(err, comment){
    if (err) {
      console.log('got an error');
    }
    res.json(comment)
  })
});

//delete a comment
app.delete('/api/comments/:commentId', function(req, res){
  db.Comments.findOneAndRemove({ _id: req.params.commentId }, function(err, foundComment){
    res.json(foundComment);
  });
})

//edit comment
app.put('/api/comments/:commentId', function(req, res){
console.log(req.body)
  db.Comments.findOneAndUpdate({_id: req.params.commentId}, req.body, {new:true}, function(err, foundComment) {
        if (err) {
          console.log('got an error');
        }
      console.log(foundComment)
        res.json(foundComment)
  });
 });

//get single post
app.get('/api/comments/:commentId', function(req, res) {
    db.Comments.findOne({_id: req.params.commentId}, function(err, foundComment) {
        if (err) {
            console.log('got an error');
        }
        res.json(foundComment)
    })
})

//find all comments
app.get('/api/comments', function(req, res) {
    db.Comments.find({}, function(err, foundComments) {
        if (err) {
            console.log('got an error');
        }
        res.json(foundComments)
    })
})

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/wayfarer_app");

 app.listen(port, function() {
  console.log(`api running on port ${port}`);
 });
