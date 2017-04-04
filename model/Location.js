var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var locationSchema = new Schema({
    City: String,
    Country: String
});

var Location = mongoose.model('Location', locationSchema);
module.exports = Location;
