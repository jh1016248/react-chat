import React, { render } from 'react'
import { Router, IndexRoute, Link, Route, browserHistory, hashHistory } from 'react-router'
import Index from '../pages/index'
import Register from '../pages/register'
import Login from '../pages/login'

class App extends React.Component {
	constructor(props) {
        super(props)
        this.state = {
            bgIndex: 1,
            pageW: 0, 
            pageH: 0
        }
    }

    updateBackground() {
        let pageW = window.outerWidth,
            pageH = window.outerHeight,
            bgIndex = 8
            // bgIndex = Math.floor((Math.random() * 9 ) + 1)
        this.setState({
            bgIndex,
            pageW,
            pageH
        })
        // setTimeout(() => {
        //     this.updateBackground()
        // }, 20 * 1000)
    }

    componentDidMount() {
        this.updateBackground()
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
			<Router history={browserHistory}>
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