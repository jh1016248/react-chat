const router = require('koa-router')()

const routers = router
    .get('/user',  ctx => {
        ctx.body = 'hhh'
    })
module.exports = routers