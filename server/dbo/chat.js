var mongoose = require('./db.js'),
    Schema = mongoose.Schema;

var MusicSchema = new Schema({
	id: {type: Number},
    musicId: {type: Number},
    name: { type: String },
    picUrl: { type: String },
    singer: { type: String },
});

module.exports = mongoose.model('musics', MusicSchema);