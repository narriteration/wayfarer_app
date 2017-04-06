import React, { Component } from 'react';
import '../css/Splash.css';
import 'react-materialize';
import { browserHistory } from 'react-router';

class NavBarMain extends Component {

  goToSplash(e) {
    e.preventDefault();
    browserHistory.push('/');
  }

  render() {
    return (

      <div className="navBarMain">
<<<<<<< HEAD
      <nav>
         <div className="nav-wrapper">
           <a href="#" className="brand-logo">Wayfarer</a>
           <ul id="nav-mobile" className="right hide-on-med-and-down">
             <li><input id="search" type="search" required placeholder="Search..."/></li>
             <li><button type="submit" name="log-out" onClick={(e) => this.goToSplash(e)}>Log Out</button></li>
           </ul>
         </div>
         </nav>
    </div>
=======
          <nav>
               <div className="nav-wrapper">
                   <a href="#" className="brand-logo">Wayfarer</a>
                   <ul id="nav-mobile" className="right">
                       <li><input id="search" type="search" required placeholder="Search..."/></li>
                       <li><a href="/">Log Out</a></li>
                   </ul>
               </div>
          </nav>
       </div>
>>>>>>> c069e8ad051249751ab1e5b77bafa94374102f76

      );
    }
  }

export default NavBarMain;

// DELETED THIS CONTENT TO MAKE IT RENDER (THE CLASS AT THE END):
// <ul id="nav-mobile" className="right hide-on-med-and-down">
