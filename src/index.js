import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../static/style.css';

global.jQuery = require('jquery');;
require('bootstrap');

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
