import React, { Component } from 'react';
import '../css/Splash.css';
import 'react-materialize';

class NavBarMain extends Component {
  render() {
    return (
      <div className="navBarMain">


      <nav>
         <div className="nav-wrapper">
           <a href="#" className="brand-logo">Wayfarer</a>
           <ul id="nav-mobile" className="right hide-on-med-and-down">
             <li><input type="text" placeholder="Search..."/></li>
             <li><a href="//">Log Out</a></li>

           </ul>
         </div>


</nav>


    </div>
    );
  }
  }


export default NavBarMain;
