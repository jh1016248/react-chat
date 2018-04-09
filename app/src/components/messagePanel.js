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

    componentDidUpdate() {
        console.log(this.props.messageList)
    }


    render() {
        let messageList = this.props.messageList
        return (
            <div className="message-panel">
                <div className="message-wrap mini-scroll">
                    {
                        messageList.length && messageList.map((item, index) => {
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
        messageList: state.messageList
    }
}
export default MessagePanel