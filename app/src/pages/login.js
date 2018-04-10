import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Input, Icon, Button } from 'antd'
import { hashHistory } from 'react-router'
class Login extends Component {
    static propTypes = {
        user: PropTypes.object,
        setUserInfo: PropTypes.func,
    }
    
    constructor() {
        super()
    }

    submit() {
        let userName = this.refs.username.refs.input.value,
            password = this.refs.password.refs.input.value

        let userInfo = {
            id: 1,
            name: 'jh',
            avatar: 'static/images/avatar/2.jpg'
        }
        
        this.props.setUserInfo(userInfo)
        hashHistory.push('/main')
    }

    render() {
        return (
            <div>
                <div className="login-wrap">
                    <div className="avatar text-c">
                        <img src="static/images/avatar/avatar.png" />
                    </div>
                    <div style={{width: '50%'}}>
                        <p className="text-c">欢迎归来</p>
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
                            <Link to="/register" style={{marginRight: '10px'}}>注册</Link>
                            <Button type="primary" size="large" onClick={this.submit.bind(this)}>登录</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

let mapStateToProps = state => {
    return {
    }
}

let mapDispatchToProps = dispatch => {
    return {
        setUserInfo: (user) => {
            dispatch({
                type: 'SET_USER_INFO',
                user
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)