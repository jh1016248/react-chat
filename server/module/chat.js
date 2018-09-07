var mongoose = require('./db.js'),
    Schema = mongoose.Schema;

var MusicSchema = new Schema({
	id: {type: Number},
    nickName: { type: String },
    picUrl: { type: String },
});

module.exports = mongoose.model('musics', MusicSchema);