import React, { Component } from 'react';
import '../css/Splash.css';
import 'react-materialize';
import { browserHistory } from 'react-router';


class Splash extends Component {

 goToLogIn(e) {
   e.preventDefault();
   console.log('You changed URL');
   //this.history.push('/sign-in');
   browserHistory.push('/sign-in');
 }
 goToSignUp(e) {
   e.preventDefault();
   console.log('You changed URL');
   //this.history.push('/sign-in');
   browserHistory.push('/sign-up');
 }

 render() {
   return (
     <div className="Splash" id="header">
         <div className="Title">
            <h1>Welcome to Wayfarer!</h1>
            <p>A travel community for you to share city-specific tips about your favorite locations around the world.</p>
            <a className="btn waves-effect waves-light" type="submit" onClick={(e) => this.goToLogIn(e)}>Log In</a>
            <a className="btn waves-effect waves-light" type="submit" onClick={(e) => this.goToSignUp(e)}>Sign Up</a>
     </div>
   </div>
   );
 }
}

export default Splash;
