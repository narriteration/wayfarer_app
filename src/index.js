import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Splash from '../src/components/Splash';
import App from './App';
import SignInForm from '../src/components/SignInForm';
import SignUp from '../src/components/SignUp';
import './css/index.css';

// import CityFeed from '../src/components/CityFeed'
// import Layout from '../src/components/Layout';
// import CommentForm from '../src/components/CommentForm';
// import Profile from '../components/Profile';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={Splash}></Route>
    <Route path='/wayfarer' component={App}></Route>
    <Route path='/sign-in' component={SignInForm}></Route>
    <Route path='/sign-up' component={SignUp}></Route>
  </Router>,
  document.getElementById('main')
);

// <Route path='/wayfarer' component={App}></Route>

// <Route path='/city-feed' component={CityFeed}></Route>
// <Route path='/wayfarer' component={App}></Route>
// <Route path='/sign-in' component={SignInForm}></Route>
// <Route path='/sign-up' component={SignUp}></Route>
// <Route path='/city-feed' component={CityFeed}></Route>
