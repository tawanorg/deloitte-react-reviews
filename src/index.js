import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configureStore } from './store';
// Initialize store
const store = configureStore(window.__INITIAL_STATE__);
const mountApp = document.getElementById('root');

ReactDOM.render(
  <App store={store}/>,
  mountApp
);
