module.exports = function(app){
	app.get("/api/other/getInfo", function (req, res){
		console.log(1)
		res.send({
			ret: 1,
			msg: '哈哈哈'
		})
	})
	return app;
};
