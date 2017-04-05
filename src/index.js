import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Splash from '../src/components/Splash';
import App from './App';
import SignInForm from '../src/components/SignInForm';
import SignUpForm from '../src/components/SignUpForm';
import UserCityFeed from '../src/components/UserCityFeed';


import './css/index.css';


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={Splash}></Route>
    <Route path='/wayfarer' component={App}></Route>
    <Route path='/sign-in' component={SignInForm}></Route>
    <Route path='/sign-up' component={SignUpForm}></Route>
    <Route path='/user-city' component={UserCityFeed}></Route>
  </Router>,
  document.getElementById('main')
);
