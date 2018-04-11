seajs.config({
    // 设置路径，方便跨目录调用
    base: "../src/js/",
    // 设置别名，方便调用
    alias: {

    },
    map: [
        [/^(.*\/javascripts\/.*\.(?:css|js))(?:.*)$/i, '$1?20151229']
    ],
    // 调试模式
    debug: false
})