'use strict'

//import dependencies
var express = require('express'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    db = require('./models');


//TODO: require model's files

//Create instances
var app = express();
var router = express.Router();


//Set port
const port = process.env.API_PORT || 3001;

//db config
//ADD YOUR INFO HERE!
// mongoose.connect("mongodb://admin:123@ds153710.mlab.com:53710/wayfarer-app")

//config API to use bodyParser and look for JSON in req.body
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());
app.use(cors());

//Prevent CORS errors
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'false');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  //Remove caching
   res.setHeader('Cache-Control', 'no-cache');
   res.setHeader('Content-Type', 'application/json;charset=utf-8');
   next();
 });

//set route path
router.get('/', function(req, res) {
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
        // look up and use the .populate() function on _user and _location to make a comment that has its user and location data filled.
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
