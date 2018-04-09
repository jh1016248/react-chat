import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Message from './message'
import './styles/messagePanel.less'

class MessagePanel extends Component {
    static propTypes = {
        messageList: PropTypes.object
    }
    
    constructor(){
        super()
    }

    componentWillMount() {
        console.log(this.props.messageList)
    }
    
    render() {
        return (
            <div className="message-panel">
                <div className="message-wrap mini-scroll">
                    {
                        this.props.messageList.length && this.props.messageList.map((item, index) => {
                            return (
                                <Message message={item} key={index}/>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        messageList
    }
}
export default MessagePanel