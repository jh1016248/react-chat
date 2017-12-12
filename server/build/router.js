var express = require('express')
var path = require('path')
var IO = require('socket.io')

var app = express()
app.use(express.static('../static'))

var server = require('http').Server(app)

var io = IO(server);

io.on("connection", function (socket){
	socket.on("newName", function (data){
		io.emit("news", {name: data.name})
	})
})

app.get("/", function (req, res){
	console.log(1)
	res.send("hello world")
})

app.get("/api/info", function (req, res){
	console.log(1)
	res.send({
    a: '123'
  })
})

module.exports = server;
