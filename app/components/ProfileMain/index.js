import React from 'react';
import { Link } from 'react-router';
import { Icon } from 'antd';
import SearchBar from '../SearchBar';
import Anim from '../Anim';
import './style.less';

class ProfileMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "set me free~ let me be",
    }
  }
  animText() {
    var el = [];
    this.state.text.split("").map(function (item, i){
      el.push(<Anim key={i} start={{display: 'inline-block',translateY:'10px',opacity: 0}} end={{opacity:1,translateY:[0,10]}} delay={i*100} duration="100">{item}</Anim>)
    })
    return el;
  }
  render() {
    return(
      <div className="profile-main wrap">
        <div className="Card mt20" style={{height: "100px"}}>
            {this.animText()}
        </div>
      </div>
    );
  }
};
export default ProfileMain;
