import { combineReducers } from 'redux'
import messageList from './messageList'
import themeColor from './themeColor'

export default combineReducers({
    messageList,
    themeColor
})
