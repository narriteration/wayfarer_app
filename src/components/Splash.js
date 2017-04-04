import React, { Component } from 'react';
import '../css/Splash.css';
import 'react-materialize';



class Splash extends Component {
 render() {
   return (
     <div className="Splash" id="header">
         <div className="Title">
            <h1>Welcome to Wayfarer!</h1>
            <p>A travel community for you to share city-specific tips about your favorite locations around the world.</p>
            <a className="btn waves-effect waves-light">Log In</a>
            <a className="btn waves-effect waves-light">Sign Up</a>
     </div>
   </div>
   );
 }
}

export default Splash;
