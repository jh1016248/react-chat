var webpack = require('webpack')
var webpackConfig = require('../webpack.config')
var compiler = webpack(webpackConfig)
var app = require('./router')

var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
    log: () => {}
})

app.use(devMiddleware)
app.use(hotMiddleware)
app.listen(3000)
console.log('listen 3000')
