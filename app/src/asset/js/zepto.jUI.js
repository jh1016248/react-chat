let jUI = function (){};
import $ from 'zepto';
let appendEl = (el, className, time = 150) => {
    $("body").append(el);
    setTimeout(() => {
        $(className).addClass("active");
    }, time)
}

let removeEl = (className, time = 150) => {
    $(className).removeClass("active")
    setTimeout(() => {
        $(className).remove();
    }, time)
}
jUI.prototype = {
    showLoading() {
        let loading = `
                        <div class="jui-loading fadein">
                            <div class="jui-mask"></div>
                            <div class="loading-toast"></div>
                        </div>
                       `;
        if($(".jui-loading").length) {
            return false
        }
        appendEl(loading, '.jui-loading', 60);
    },
    hideLoading() { 
        removeEl(".jui-loading");
    },
    loading(imgList, callback) { 

    },
    confirm(option) {
        option = {
            title: '',
            content: '',
            successText: '',
            success: function (){},
            cancelText: '',
            cancel: function (){}
        }
    },
    toast() {

    },
    showMsg() {

    }
}
export default new jUI();