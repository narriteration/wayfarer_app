import React, { Component } from 'react';
import '../css/Splash.css';
import 'react-materialize';
import CityInfo from './CityInfo.js';
import AllCityPosts from './AllCityPosts';
import CommentForm from './CommentForm';



class CityFeed extends Component {

// TODO: Styles
// * write specific styles to make all three imported components pretty
//
// TODO: View logic
// * render this component after user clicks submit on SignInForm.js
  render() {
    return (

      <div className="cityFeed">
          <CityInfo cityName="San Francisco"/>
          <AllCityPosts />
          <CommentForm />
      </div>
    );
  }
}

export default CityFeed;
