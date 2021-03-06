import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Icon } from 'antd'
import { Link } from 'react-router'
import './styles/header.less'

const ButtonGroup = Button.Group;

class Header extends Component {
    static propTypes = {
        user: PropTypes.object
    }
    constructor() {
        super()
    }
    render() {
        return (
            <div className="header">
                <div className="logo">logo</div>
                {/* <div className="nav">
                    <ButtonGroup>
                        <Button type="primary" size="large">
                            <Icon type="message" style={{fontSize: '20px', paddingRight: '8px'}}/>
                        </Button>
                        <Button type="primary" size="large">
                            <Icon type="user" style={{fontSize: '20px', padding: '0 8px'}}/>
                        </Button>
                        <Button type="primary" size="large">
                            <Icon type="setting"  style={{fontSize: '20px', paddingLeft: '8px'}}/>
                        </Button>
                    </ButtonGroup>
                </div> */}
                <div className="user-pannel" style={{float: 'right'}}>
                    <Link to="/login"><img src={this.props.user.avatar} title={this.props.user.nickName}/></Link>
                </div>
            </div>
        )
    }
}


export default Header