import React from 'react';
import './style.less';

class Index extends React.Component {
  render () {

    return (
      <div className="user-wrap">

        {this.props.children}
      </div>
    )
  }
}
export default Index;
