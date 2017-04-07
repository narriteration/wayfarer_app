import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Splash from '../src/components/Splash';
import App from './App';
import SignInForm from '../src/components/SignInForm';
import UserProfile from '../src/components/UserProfile';
import SignUp from '../src/components/SignUp';
import CityFeed from '../src/components/CityFeed'


import './css/index.css';


ReactDOM.render(
  <Router history={browserHistory}>

    <Route path='/' component={Splash}></Route>
    <Route path='/wayfarer' component={App}></Route>
    <Route path='/sign-in' component={SignInForm}></Route>
    <Route path='/sign-up' component={SignUp}></Route>
    <Route path='/city-feed' component={CityFeed}></Route>
    <Route path='/user-profile' component={UserProfile}></Route>

  </Router>,
  document.getElementById('main')
);
