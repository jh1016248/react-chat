import React, { render } from 'react'
import { Router, IndexRoute, Link, Route, hashHistory } from 'react-router'
import Index from '../pages/index'
import Register from '../pages/register'
import Login from '../pages/login'

class App extends React.Component {
	constructor(props) {
        super(props)
        this.state = {
            bgIndex: 1,
            pageW: 0, 
            pageH: 0,
            changeBackgroundTimer: null,
        }
    }

    updateBackground() {
        let pageW = window.outerWidth,
            pageH = window.outerHeight,
            // bgIndex = 8
            bgIndex = Math.floor((Math.random() * 4) + 1)
        this.setState({
            bgIndex,
            pageW,
            pageH,
            changeBackgroundTimer: setTimeout(() => {
                this.updateBackground()
            }, 30 * 1000)
        })
        
    }

    componentDidMount() {
        this.updateBackground()
    }

    componentWillUnMount() {
        clearTimeout(this.state.changeBackgroundTimer)
    }

	render() {
		return (
			<div>
                <div className="background" style={{
                    backgroundImage: "url(static/images/bg/" + this.state.bgIndex + ".jpg)", 
                    backgroundSize: this.state.pageW + 'px ' + this.state.pageH + 'px',
                }}></div>
				{this.props.children}
			</div>
		)
	}
}

class router extends React.Component {
	constructor(props) {
		super(props)
    }

	componentDidMount() {
    }
    
	render() {
		return (
			<Router history={hashHistory}>
				<Route path="/" component={App}>
					<IndexRoute component={Login} />
					<Route path="/login" component={Login}></Route>
					<Route path="/register" component={Register}></Route>
					<Route path="/main" component={Index}></Route>
				</Route>
			</Router>
		)
	}
}

export default router