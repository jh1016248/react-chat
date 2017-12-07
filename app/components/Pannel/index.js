import React from 'react';
import './style.less'
class Pannel extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return(
      <div className="pannel">
        <div className="pannel-hd">
          {this.props.hd}
        </div>
        <div className="pannel-bd">
          {this.props.bd}
        </div>
      </div>
    );
  }
};
export default Pannel;
