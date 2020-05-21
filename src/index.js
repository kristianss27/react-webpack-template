import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Types from './TestTypography'

const title = 'React with Webpack and Babel';
 
ReactDOM.render(
  <Fragment>
  <App title={title} />
  <Types/>
  </Fragment>,
  document.getElementById('app')
);

module.hot.accept();

