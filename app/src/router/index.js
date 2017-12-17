import React, { render } from 'react';
import { Router, IndexRoute, Link, Route, browserHistory, hashHistory } from 'react-router';
import App from '../App'

import Index from '../page/Index.js';
import Chat from '../page/Chat.js';


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
					<IndexRoute component={Index} />
					<Route path="/Chat" component={Chat}></Route>
				</Route>
			</Router>
		);
	}
}

export default router;
