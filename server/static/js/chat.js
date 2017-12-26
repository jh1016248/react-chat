let socket;
let jhUi = new JhUI();

let chat = {
  userName: '',
  init() {
    this.addEvent();
  },
  connection(roomId) {
    console.log(roomId)
    let userName = $("#userName").value;
    socket = io('http://localhost:3000');
    socket.emit("join", { id: roomId, userName: userName })

    jhUi.transfer($("#room-list"), $("#app"))

    //有新人加入
    socket.on("newUser", function (data){
      let fragment = document.createDocumentFragment();
      let list = data.userName;
      for(let i = 0; i < list.length; i++){
        let li = document.createElement("li");
        li.innerHTML = `<p>${list[i]}</p>`;
        fragment.appendChild(li);
      }
      $("#userList").innerHTML = '';
      $("#userList").appendChild(fragment)
    })
    //有新消息
    socket.on('showMsg', function (data) {
      let newMsg = document.createElement("li");
      let className = '';
      if(data.userName == chat.userName){
        className = "text-r";
      }
      newMsg.innerHTML = `<li><span>${data.userName}</span>:<p class="${className}">${data.msg}</p></li>`;
      $("#msgList").appendChild(newMsg);
    });
  },
  getRoomList() {
    jhUi.ajax({
      type: 'GET',
      url: '/api/chat/roomList',
      success: function (res){
        var fragment = document.createDocumentFragment();
        res = JSON.parse(res)
        for(let i = 0; i < res.length; i++){
          let li = document.createElement("li");
          li.setAttribute("data-id", res[i].roomId)
          li.setAttribute("data-name", res[i].name)
          li.innerHTML = `<p class="room-name">${res[i].name}</p>
                          <p class="p2">用户数:${res[i].num}</p>`;
          fragment.appendChild(li);
        }
        $(".room-list").appendChild(fragment);
      }
    })
  },
  addEvent() {
    $("#btnSend").onclick = function() {
      var msg = $("#msg").value;
      socket.emit('sendMsg', {msg: msg});
    }

    $("#btnRegister").onclick = function (){
      var name = $("#userName").value;
      if(!name){
        $("#userName-msg").innerText = '请输入用户名';
        return false;
      }
      jhUi.transfer($("#register"), $("#room-list"));
      chat.userName = name;
      chat.getRoomList();
    }

    $(".room-list").onclick = function (e){
      let target = e.target;
      console.log(target.nodeName)
      if(target.nodeName == 'LI'){}
      else if(target.parentNode.nodeName == 'LI'){
        target = target.parentNode;
      }
      else{
        return false;
      }
      var id = target.getAttribute("data-id");
      $("#roomName").innerText = target.getAttribute("data-name");
      chat.connection(id)

    }
  }
}

chat.init();

function $(el){
  return document.querySelector(el)
}
