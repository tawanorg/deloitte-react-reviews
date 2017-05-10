import React from 'react';
import ReactDOM from 'react-dom';
 
import { configureStore } from './store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import App from './containers/App/App';

import '../static/style.css';
global.jQuery = require('jquery');;
require('bootstrap');

// Initialize store
const store = configureStore(window.__INITIAL_STATE__);
const mountApp = document.getElementById('root');

ReactDOM.render(
  	<Provider store={store}>
	  <BrowserRouter>
	    <App />
	  </BrowserRouter>
	</Provider>,
  mountApp
);
