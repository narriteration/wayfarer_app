var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/wayfarer_app");


var Location = require('./Location.js')
module.exports.Location = Location;
