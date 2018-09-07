const express = require('express')
const bodyParser = require('body-parser')
const IO = require('socket.io')

let app = express()
app.use(express.static('static'));

app.all('*',function (req, res, next) {
	res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
	res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
	next();
});

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app = require("./router/index")(app)

let server = require('http').Server(app)

const io = IO(server);

let roomList = {
  10086: {
    roomName: '哈哈哈哈',
    num: 0,
    user: []
  }
};

io.on("connection", function (socket){
  let ROOMID = '';
  socket.on("join", data => {
    let userName = data.userName

    ROOMID = data.id
    let num = roomList[ROOMID].num
    roomList[ROOMID].num = num + 1
    roomList[ROOMID].user.push(userName)

    socket.join(ROOMID)
    io.to(ROOMID).emit("newUser", {userName: roomList[ROOMID].user})
    socket.on("sendMsg", data => {
  		io.to(ROOMID).emit("showMsg", { userName: userName, msg: data.msg })
  	})

    socket.on("disconnect", () => {
      let num = roomList[ROOMID].num;
      let userList = roomList[ROOMID].user;
      userList.forEach((item, index)=> {
        if(item == userName){
          roomList[ROOMID].user.splice(index, 1);
        }
      })
      roomList[ROOMID].num = num -1;
      io.to(ROOMID).emit("newUser", {userName: roomList[ROOMID].user})
    })
  })
})


app.get("/api/chat/roomList", (req, res) => {
  res.status(200)
  let list = [];
  for(let i in roomList){
    list.push({
      roomId: i,
      name: roomList[i].roomName,
      num: roomList[i].num
    })
  }
  res.send(list)
})
app.post("/api/chat/addRoom", (req, res) => {
  let roomName = req.body.roomName
  roomList.push({
    roomName: roomName,
    num: 0
  })
  res.send({
    ret: 1
  })
})

server.listen(3000)
console.log('listen 3000')
