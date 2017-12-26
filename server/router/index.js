module.exports = function (app){
	app = require("./user")(app);
	app = require("./other")(app);

	return app;
}
