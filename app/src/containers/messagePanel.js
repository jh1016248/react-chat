import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import MessagePannel from '../components/messagePanel'

class MessageList extends Component {
    static propTypes = {
        messageList: PropTypes.object,
        initMessageList: PropTypes.func
    }    

    constructor() {
        super()
    }

    componentWillMount() {
        let list = [
            {
                type: 'text',
                host: false,
                id: '1',
                name: 'jh',
                content: '你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀',
                avatar: 'static/images/avatar/1.jpg',
                time: '17:08',
            },
            {
                type: 'text',
                host: true,
                id: '2',
                name: 'jh1',
                content: '我很好你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀',
                avatar: 'static/images/avatar/1.jpg',
                time: '17:09',
            }
        ]
        this.props.initMessageList(list)
    }

    render() {
        return (
            <MessagePannel messageList={this.props.messageList}/>
        )
    }
}

const mapStateToProps = state => {
    return {
        messageList: state.messageList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        initMessageList: list => {
            dispatch({
                type: 'INIT_MESSAGE_LSIT',
                list
            }) 
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageList)