import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Header extends Component {
    static propTypes = {
        themeColor: PropTypes.string
    }
    constructor() {
        super()
    }
    render() {
        return (
          <div style={{color: this.props.themeColor}}>header components</div>
        )
    }
}


export default Header