import React, { Component } from 'react';
import '../css/Splash.css';
import 'react-materialize';

class NavBarMain extends Component {
  render() {
    return (
      <div className="navBarMain">


      <nav>
         <div class="nav-wrapper">
           <a href="#" class="brand-logo">Wayfarer</a>
           <ul id="nav-mobile" class="right hide-on-med-and-down">
             <li><a href="//">Log Out</a></li>
           </ul>
         </div>
       </nav>


    </div>
    );
  }
  }


export default NavBarMain;
