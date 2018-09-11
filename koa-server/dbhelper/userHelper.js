const User = require('../modules/user')
const jwt = require('jsonwebtoken')
const util = require('util')
const verify = util.promisify(jwt.verify) // 解密
const secret = 'chat-jwt';

exports.addUser = async (user) => {
    user = await user.save();
    return user
}

exports.getUser = async (query) => {
    let res = null;
    await User.find(query, function (err, user) {
        if(err) {
            res = {}
        }
        else{
            console.log(user)
            if(user.length) {
                res = user[0]
            }
        }
    })
    return res
}

exports.register = async (query) => {
    let res = {};
    let users = await User.find({loginName: query.loginName}, (err, list) => {
        if(err) {
        }
        else{
            return list
        }
    })
    if(users.length == 0) {
        let newUser = {
            id: '',
            loginName: query.loginName,
            nickName: query.loginName,
            type: 1,
            avatar: 'https://avatars2.githubusercontent.com/u/112332?v=5',
            password: query.password
        }
        await User.create(newUser).then(u => {
            res = {
                code: 1000,
                data: u,
                message: "注册成功！"
            }
        })
        return res
    }
    else{
        res = {
            code: 1002,
            data: {},
            message: "该账号已被注册"
        }
        return res
    }
}

exports.login = async (query) => {
    let res = {
        code: 1000,
        data: {},
        message: ""
    };
    let user = await User.findOne(query, (err, user) => {
        if(err) {
            return [];
        }
        else{
            return user
        }
    })
    if(user) {
        let payload = {
            id: user.id,
            loginName: user.loginName,
            nickName: user.nickName,
            type: user.type,
            avatar: user.avatar
        }
        let token = jwt.sign(payload, secret, {expiresIn: '24h'})
        res = {
            code: 1000,
            data: {
                token
            },
            message: '登录成功'
        }
    }
    else{
        res = {
           code: 1004,
           data: {},
           message: "用户名或密码错误"
        }
    }
    return res;
}

exports.getCurrentUser = async (ctx) => {
    let token = ctx.headers.token;
    let res = {};
    let payload
    if (token) {
        payload = await verify(token, secret)  // // 解密，获取payload
        ctx.body = {
            payload
        }
        res = {
            code: 1000,
            data: payload,
            message: '获取当前用户成功'
        }
    } else {
        res = {
            code: -1,
            data: {},
            message: '登录状态失效，请重新登录'
        }
    }
    return res
}