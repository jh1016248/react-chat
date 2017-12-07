var express = require('express');

var app = express();
app.use(express.static('../app'));
app.use(express.static('../static'));

app.get('/', (req, res) => {
  console.log(111)
  res.send("hello world");
})

module.exports = app;
