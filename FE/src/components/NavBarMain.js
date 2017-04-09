import React, { Component } from 'react';
import 'react-materialize';
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

      );
    }
  }

// DELETED THIS CONTENT TO MAKE IT RENDER (THE CLASS AT THE END):
// <ul id="nav-mobile" className="right hide-on-med-and-down">
