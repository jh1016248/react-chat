const User = require("../module/user")
const Count = require("../module/count")
module.exports = function(app){
	app.post("/api/user/register", function (req, res){
		let nickName = req.body.userName,
			password = req.body.password;
		if(nickName && password){
			User.find({"nickName" : nickName}, function (err, user){
				if(!err){
					if(user.length > 0){
						res.send({
							state: 2,
							msg: '改昵称已被占用~'
						})
					}
					else{
						getLastCount("user", function (count){
							var ind = count + 1;
							var user = new User({
								id: ind,
								nickName: nickName,
								password: password,
								avatar: ""
							})
							User.create(user, function(err, docs) {
								setLastCount("user", ind, function() {
									// req.session.sign = true;
									// req.session.userId = ind;
									res.send({
										state: 1,
										msg: '注册成功！'
									})
								});
							})
						})
					}
				}
				else{
					res.send({
						state: 0,
						msg: '服务器出错啦'
					})
				}
			})
		}
	})

	app.post("/api/user/login", function (req, res){
		User.find({nickName: req.body.userName, password: req.body.password}, function (err, user){
			console.log(user)
			if(!err){
				if(user.length){
					res.send({
						state: 1,
						user: user
					})
				}
				else{
					res.send({
						state: 0,
						msg: '账号或者密码错误~'
					})
				}
			}
		})
	})

	function getLastCount(tag, callback) {
		Count.find({ "tag": tag }, function(err, doc) {
			if (!err) {
				callback(doc[0] ? doc[0].count : 0)
			}
		})
	}
	function setLastCount(tag, ind, callback) {
		console.log(tag, ind)
		Count.update({ "tag": tag }, { "count": ind }, function(err, doc) {
			if (!err) {
				callback && callback();
			}
		})
	}
	return app;
};
