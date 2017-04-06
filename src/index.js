import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Splash from '../src/components/Splash';
import App from './App';
import SignInForm from '../src/components/SignInForm';
<<<<<<< HEAD
import SignUpForm from '../src/components/SignUpForm';
import UserCityFeed from '../src/components/UserCityFeed';
=======

import SignUp from '../src/components/SignUp';
import CityFeed from '../src/components/CityFeed'
>>>>>>> 579c8322616e3dbc6a8c46259aa4afc8c26716e6


import './css/index.css';


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={Splash}></Route>
    <Route path='/wayfarer' component={App}></Route>
    <Route path='/sign-in' component={SignInForm}></Route>

    <Route path='/sign-up' component={SignUp}></Route>
    <Route path='/city-feed' component={CityFeed}></Route>


  </Router>,
  document.getElementById('main')
);
