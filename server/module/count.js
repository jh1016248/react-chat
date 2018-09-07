var mongoose = require('./db.js'),
    Schema = mongoose.Schema;

var CountSchema = new Schema({
    tag: {type: String},
    index: {type: Number}
});

module.exports = mongoose.model('counts', CountSchema);