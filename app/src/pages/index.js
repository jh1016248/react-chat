import React, { Component } from 'react'
import { Link } from 'react-router'
import Header from '../components/header'
import Aside from '../components/aside'
import Chat from '../components/chat'
import './styles/index.less'

class Index extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className="wrap container">
                <Header/>
                <div className="body">
                    <Aside/>
                    <Chat/>
                </div>
            </div>
        )
    }
}

export default Index
