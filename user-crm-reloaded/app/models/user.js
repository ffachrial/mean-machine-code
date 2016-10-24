var mongoose    = require('mongoose');      // call mongoose for create model
var Schema      = mongoose.Schema;          // call Schema from mongoose

// user Schema
var UserSchema = new Schema({
    name        : String,
    username    : { type: String, required: true, index: { unique: true} },
    password    : { type: String, required: true, select: false }
});

module.exports = mongoose.model('User', UserSchema);