require('babel-polyfill');

const debug = require('./debug');

if( debug.enabled ){
  debug.init();
}

import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('root');

ReactDOM.render(
  <h1>Hello, Pathway Commons App!</h1>,
  root
);
