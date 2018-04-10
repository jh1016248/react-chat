module.exports = function(app){
	app.post("/api/other/getInfo", function (req, res){
		res.send({
			ret: 1,
			msg: '哈哈哈'
		})
	})
	return app;
};
