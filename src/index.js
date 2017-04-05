import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Splash from '../src/components/Splash';
import './css/index.css';


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={Splash}>
    </Route>
  </Router>,
  document.getElementById('main')
);
