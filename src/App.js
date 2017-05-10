/**
 * Root Component
 */
import React from 'react';
import { Provider } from 'react-redux';
import { Route, Router, browserHistory, IndexRoute } from 'react-router';
import AppContainer from './containers/App/AppContainer';
import HomeContainer from './containers/Home/HomeContainer';

import '../static/style.css';
global.jQuery = require('jquery');;
require('bootstrap');

export default function App(props) {
	return (
		<Provider store={props.store}>
		  <Router history={browserHistory}>
		    <Route path="/" component={AppContainer}>
		      <IndexRoute name="Home" component={HomeContainer} />
		    </Route>
		  </Router>
		</Provider>
	);
}

App.propTypes = {
  store: React.PropTypes.object.isRequired,
};
