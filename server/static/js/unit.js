/*
this 作为一个对象的属性被调用时候指向该对象
*/
;(function (window) {
	window.JhUI = function () {};

	JhUI.prototype.showMessage = function (opt){
		var notAutoClear = opt.duration === 0,
			duration = !notAutoClear ? opt.duration || 2000 : 0,
			msg = opt.msg;
		var timeStamp = (new Date()).getTime();

		var newMessage = document.createElement("div");
		newMessage.classList.add("jh-message");
		newMessage.innerText = msg;
		newMessage.setAttribute("data-num", timeStamp)
		document.body.appendChild(newMessage)

		setTimeout(function (){
			newMessage.classList.add("active")
		}, 0)
		if(notAutoClear){
			newMessage.onclick = function (){
				removeMessage()
			}
		}
		else{
			setTimeout(function (){
				removeMessage()
			}, duration)
		}
		function removeMessage() {
			newMessage.classList.remove("active")
			setTimeout(function (){
				document.body.removeChild(newMessage);
			}, 400)
		}
	}

	JhUI.prototype.transfer = function (send, target){
		setStyle(send, {
			transition: 'all .2s',
			opacity: 0
		})
		setStyle(target, {
			display: 'block',
			opacity: 0
		})
		setTimeout(function (){
			setStyle(send, {
				transition: 'none',
				display: 'none',
				opacity: 0
			})
			setStyle(target, {
				transition: 'all .2s',
				opacity: 1
			})
			setTimeout(function (){
				target.style.transition = 'none';
			}, 200)
		}, 200)
	}


	JhUI.prototype.ajax = function (opt){
		var xhr = new XMLHttpRequest();
		var success = opt.success;
		xhr.onreadystatechange = function (){
			if(xhr.readyState == 4 && xhr.status == 200){
				if(typeof success == 'function'){
					success(xhr.responseText);
				}
			}
		}
		xhr.open(opt.type, opt.url, true);
        if(opt.type=="POST"){
            xhr.setRequestHeader("Content-type","application/x-www-four-urlencoded");
        }
		xhr.send(opt.data);
	}

	function setStyle (el, styles) {
		for(var i in styles){
			el.style[i] = styles[i];
		}
	}
})(window);
