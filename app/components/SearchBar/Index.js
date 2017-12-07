import React from 'react';
import ReactDOM from 'react-dom';
import './style.less';
// import Button from 'antd/lib/button';
// import 'antd/lib/button/style';
import { Button, Icon } from 'antd';


class Route extends React.Component {
  constructor(props){
    super(props)
  }
  focus() {
    this.refs.searchform.classList.add('active');
  }
  blur() {
    this.refs.searchform.classList.remove('active');
  }
  render () {
    return (
      <div className="search-bar" ref="searchform">
        <div className="search-input">
          <input type="text" ref="input" placeholder="搜索你感兴趣的内容..." onBlur={this.blur.bind(this)} onFocus={this.focus.bind(this)}/>
          <div className="search-btn">
            <Icon type="search" style={{color: '#afbdcf', fontSize: '16px'}}/>
          </div>
        </div>
      </div>
    )
  }
}
export default Route;
