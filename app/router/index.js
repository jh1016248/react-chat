import React, { render } from 'react';
import { Router, IndexRoute, Link, Route, browserHistory, hashHistory} from 'react-router';

import Header from '../components/Header/index.js';
import Index from '../page/Index.js';
import Find from '../page/Find.js';
import Users from '../page/user/index.js';
import Register from '../page/user/Register.js';
import Login from '../page/user/Login.js';

import Topic from '../page/Topic.js';

class App extends React.Component {
	constructor(props){
		super(props)
	}
	componentDidMount() {

	}
	render () {
		return (
			<div>
	    	<Header></Header>
	        <div className="wrap pt52">
	          {this.props.children}
	        </div>
	    </div>
		);
	}
}

class router extends React.Component {
	constructor(props){
		super(props)
	}
	componentDidMount() {

	}
	render () {
		return (
			<Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Index}/>
          <Route path="/find" component={Find} />
          <Route path="/topic" component={Topic} />
					<Route path="/user" component={Users} >
						<Route path="/user/register" component={Register} />
						<Route path="/user/login" component={Login} />
					</Route>
        </Route>
	    </Router>
		);
	}
}


export default router;
