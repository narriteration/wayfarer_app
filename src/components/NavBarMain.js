import React, { Component } from 'react';
import 'react-materialize';
<<<<<<< HEAD
import { browserHistory } from 'react-router';

class NavBarMain extends Component {

  goToSplash(e) {
    e.preventDefault();
    browserHistory.push('/');
  }

  render() {
    return (

      <div className="navBarMain">
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
import '../css/NavBar.css';


export default class NavBarMain extends Component {
  render() {
    return (

      <div className="navBarMain" id="nav">
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
>>>>>>> a4aed00d70ea354c47845093360b0ae6b676284f

      );
    }
  }

<<<<<<< HEAD
export default NavBarMain;

=======
>>>>>>> a4aed00d70ea354c47845093360b0ae6b676284f
// DELETED THIS CONTENT TO MAKE IT RENDER (THE CLASS AT THE END):
// <ul id="nav-mobile" className="right hide-on-med-and-down">
