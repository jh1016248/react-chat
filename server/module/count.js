var mongoose = require('./db.js'),
    Schema = mongoose.Schema;

var CountSchema = new Schema({
    tag: {type: String},
    count: {type: Number}
});

module.exports = mongoose.model('count', CountSchema);