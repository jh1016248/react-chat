import React, { Component } from 'react'
import { Link } from 'react-router'
import { Input, Icon, Button } from 'antd'

class Register extends Component {
    constructor() {
        super()
        this.state = {
            userName: '',
            password: '',
        }
    }

    submit() {
        let userName = this.refs.username.refs.input.value,
            password = this.refs.password.refs.input.value;
            // register(userName, password)
            //     .then(res => {
            //         console.log(res)
            //     })
    }

    componentWillMount() {
        console.log($client)
    }

    render() {
        return (
            <div>
                <div className="login-wrap">
                    <div className="avatar text-c">
                        <img src="static/images/avatar/avatar.png" />
                    </div>
                    <div style={{width: '50%'}}>
                        <p className="text-c">欢迎加入</p>
                        <div className="mb10"></div>
                        <Input
                            placeholder="用户名"
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            size="large"
                            ref="username"
                        />
                        <div className="mb10"></div>
                        <Input
                            placeholder="密码"
                            type="password"
                            prefix={<Icon type="key" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            size="large"
                            ref="password"
                        />
                        <div className="mb10"></div>
                        <div className="text-r">
                            <Link to="/login" style={{marginRight: '10px'}}>登录</Link>
                            <Button type="primary" size="large" onClick={this.submit.bind(this)}>注册</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register