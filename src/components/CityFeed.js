import React, { Component } from 'react';
import '../css/Splash.css';
import 'react-materialize';
import CityInfo from './CityInfo.js';
import AllCityPosts from './AllCityPosts';
import CommentForm from './CommentForm';
import NavBarMain from './NavBarMain'



class CityFeed extends Component {

// TODO: Styles
// * write specific styles to make all three imported components pretty
//
// TODO: View logic
// * render this component after user clicks submit on SignInForm.js
  render() {
    return (

      <div className="cityFeed">
          <NavBarMain />
          <CityInfo cityName="San Francisco"/>
          <CommentForm />
          <AllCityPosts />

      </div>
    );
  }
}

export default CityFeed;
