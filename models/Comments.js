var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CommentsSchema = new Schema({
    comment: String,
    userId: String,
    datePosted: String,
    location: Object
}, {
    versionKey: false
});

var Comments = mongoose.model('Comments', CommentsSchema);
module.exports = Comments;
