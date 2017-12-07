import React from 'react';
import './style.less';
import ProfileHead from '../ProfileHead/'
import {userInfo} from '../../api/data.js'
 
class Route extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            "userInfo": '',
        }
    }
    componentWillMount() {
        console.log("componentWillMount")
        this.setState({"userInfo": userInfo})
    }
    render () {
        return (
            <div className="people">
                <ProfileHead userInfo={userInfo}></ProfileHead>
            </div>
        )
    }
}
export default Route;