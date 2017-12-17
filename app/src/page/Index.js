import React from 'react';
import {Link} from 'react-router';
import { Icon, Input, Button } from 'antd';
import http from '../api/index'
import { browserHistory } from 'react-router'

class Index extends React.Component {
  constructor() {
    super()
    this.state = {
      state: "login",
      errorMsg: '',
      btnLoading: false,
    }
  } 
  changeState() {
    var nowState = this.state.state;
    if(this.state.btnLoading){
      return false;
    }
    this.setState({
      state: nowState == 'login' ? 'register' : 'login',
      errorMsg: ''
    })
  }
  submit() {
    var that = this;
    var userName = document.querySelector("#userName").value,
        password = document.querySelector("#password").value;
    if(userName == ''){
      showError("*请输入你的昵称")
    }
    if(password.length < 6){
      showError("*请输入6位以上密码")
    }
    else{
      var reg = /[^\w\.\/]/ig;
      if(reg.test(password)){
        showError("*请输入数字或英文")
      }
      else{
        this.setState({
          btnLoading: true,
          errorMsg: ''
        })
        if(this.state.state == 'login'){
          http.login(userName, password, function (res){
            if(res.data.state == 0){
              showError(res.data.msg)
              that.setState({
                btnLoading: false
              })
            }
            else{
              browserHistory.push("/chat")
            }
          })
        }
        else{
          http.register(userName, password, function (res){
            if(res.data.state == 1){
              //注册成功
              browserHistory.push("/chat")
            }
            else{
              showError(res.data.msg)
              that.setState({
                btnLoading: false,
              })
            }
          })
        }
      }
    }

    function showError(msg) {
      that.setState({
        errorMsg: msg
      })
      return false;
    }
  }
  render () {
    return (
      <div>
        <div className="from-wrap">
          <h3 className="mb20">欢迎{this.state.state == 'login' ? '登录' : '注册'}</h3>
          <div className="mb10">
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} maxLength="10" ref="userName" id="userName" placeholder="昵称" />
          </div>
          <div className="mb10">
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} id="password" type="password" placeholder="密码" />
          </div>
          <Button type="primary" htmlType="submit" size="large" style={{width: "100%"}} className="login-form-button mb5" loading={this.state.btnLoading} onClick={this.submit.bind(this)}>
            {this.state.state == 'login' ? '登录' : '注册'}
          </Button>
          
          <div><a href="javascript:;" onClick={this.changeState.bind(this)}>{this.state.state == 'login' ? '注册' : '登录'}</a><p className="error-msg">{this.state.errorMsg}</p></div>
        </div>
      </div>
    )
  }
}
export default Index;
