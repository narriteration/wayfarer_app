var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var UserSchema = new Schema({
    userName: String,
    password: String,
    // TODO: Consider using a referenced ObjectID for this instead of a String
    currentCity: String
}, {
    versionKey: false
});

var User = mongoose.model('User', UserSchema);

module.exports = User;
