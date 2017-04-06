var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CommentsSchema = new Schema({
    title: String,
    comment: String,
    // make this a object of type object reference (see mongoose associations lab in our schedule)
    _user: String,
    datePosted: String,
    // make this a object of type object reference (see mongoose associations lab in our schedule)
    _location: String
}, {
    versionKey: false
});

var Comments = mongoose.model('Comments', CommentsSchema);
module.exports = Comments;
