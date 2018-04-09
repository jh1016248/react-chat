import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ChatPanelHeader from './chatPanelHeader'
import MessagePanel from '../containers/messagePanel'
import Toolbar from './toolbar'
import InputPanel from './inputPanel'

import './styles/chat.less'

class Chat extends Component {
    constructor(){
        super()
    }
    
    render() {
        return (
            <div className="chat-panel">
                <ChatPanelHeader/>
                <MessagePanel/>
                <Toolbar/>
                <InputPanel/>
            </div>
        )
    }
}

export default Chat