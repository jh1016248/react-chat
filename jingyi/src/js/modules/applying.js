define(function(require, exports) {
	exports.init = function(name) {
        $(".header-nav").find("li[name='jobs']").addClass("active");
        $(".child a[name='" + name + "']").addClass("active");
        $(".m-nav li[name='" + name + "']").addClass("active");
	}
});