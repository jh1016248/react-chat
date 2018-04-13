define(function(require, exports) {
	exports.init = function(name) {
        $(".header-nav").find("li[name='about']").addClass("active");
        $(".child a[name='" + name + "']").addClass("active");
	}
});
