const express = require('express')
const bodyParser = require('body-parser');
const path = require('path')
const IO = require('socket.io')

let app = express()

app.all('*',function (req, res, next) {
	res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
	res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
	next();
});
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app = require("./user")(app)

let server = require('http').Server(app)

const io = IO(server);
io.on("connection", function (socket){
	socket.on("newName", function (data){
		io.emit("news", {name: data.name})
	})
})

module.exports = server;
