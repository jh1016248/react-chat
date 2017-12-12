import React, { render } from 'react';
import { Router, IndexRoute, Link, Route, browserHistory, hashHistory} from 'react-router';

import Index from '../page/Index.js';

class App extends React.Component {
	constructor(props){
		super(props)
	}
	render () {
		return (
			<div>
	    	<Header></Header>
	        <div>
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
        </Route>
	    </Router>
		);
	}
}


export default router;
