import React from 'react';
import Velocity from 'velocity-animate'
import './style.less';

class Anim extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            start: this.props.start,
            end: this.props.end,
        }
    }
    componentDidMount() {
        var that = this;
        var end = that.state.end;
        Velocity(that.refs.el, end, {
            duration: parseInt(that.props.duration),
            delay: that.props.delay
        });
    }
    render () {
        return (
            <span ref="el" style={this.props.start}>
                {this.props.children}
            </span>
        )
    }
}
export default Anim;
