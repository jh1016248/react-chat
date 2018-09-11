const mongoose = require('mongoose');
const path = 'mongodb://localhost:27017/Chat';
mongoose.connect(path)
module.exports = mongoose;
