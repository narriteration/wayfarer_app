import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './App';
import './css/index.css';

//import './index.css';
//import * as firebase from 'firebase';





ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
    </Route>
  </Router>,
  document.getElementById('root')
);
