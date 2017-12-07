import React from 'react';
import { Link } from 'react-router';
import SearchBar from '../SearchBar/index';
import {Menu, Dropdown,Button, Icon, Avatar} from 'antd';
import './style.less';
class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const menu = (
      <Menu>
        <Menu.Item size={"large"}>
          <a rel="noopener noreferrer"><Icon type="user"/> 我的主页</a>
        </Menu.Item>
        <Menu.Item size={"large"}>
          <a rel="noopener noreferrer"><Icon type="setting"/> 设置</a>
        </Menu.Item>
        <Menu.Item size={"large"}>
          <a rel="noopener noreferrer"><Icon type="poweroff" /> 退出</a>
        </Menu.Item>
      </Menu>
    )
    return(
      <div className="header">
        <div className="wrap">
          <div className="AppHeader-inner">
            <Link to="/" className="logo"></Link>
            <SearchBar></SearchBar>
            <div className="AppHeader-userinfo">
              <Link to="/">首页</Link>|<Link to="/user/register">注册1</Link>|<Link to="/user/login">登录</Link>
            </div>
            <Dropdown overlay={menu} trigger={['click']} >
              <a href="javascript:;">
                <Avatar shape="square" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </a>
            </Dropdown>
          </div>
        </div>
      </div>
    );
  }
};
export default Header;
