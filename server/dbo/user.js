var mongoose = require('./db.js'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
	id: {type: Number},
    nickName: { type: String },
    avatar: { type: String },
    password: {type: String}
});

module.exports = mongoose.model('user', UserSchema);