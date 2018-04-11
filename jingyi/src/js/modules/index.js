define(function(require, exports) {
    function initBanner(){
        var timer = null, 
            current = 0,
            time = 3000;
        var leng = $(".banner a").length;
        initDots();
        startLoop();

        $(".dots div").on("click", function (){
            clearInterval(timer)
            current = $(this).index();
            loop()
            startLoop();
        })

        function initDots() {
            var dotsHTML = '<div class="dots" style="width: '+ (30 * 2 + (12 + 4) * leng + 12) +'px; margin-left: -'+ (10 * leng + 30 + 6) +'px"><div class="active"></div>';
            for(var i = 1; i < leng; i++) {
                dotsHTML += '<div></div>'
            }
            dotsHTML += '</div>';
            $(".banner").append(dotsHTML);
        }

        function startLoop() {
            timer = setInterval(function (){
                current ++;
                if(current >= leng) {
                    current = 0
                }
                loop()
            }, time)
        }

        function loop() {
            $(".banner a").stop(true).fadeOut(300).eq(current).stop(true).fadeIn(300);
            $(".dots div").removeClass("active").eq(current).addClass("active");
        }
    }
	exports.init = function() {
        $(".header-nav").find("li[name='index']").addClass("active");
		initBanner()
	}
});
