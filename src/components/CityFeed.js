import React, { Component } from 'react';
import '../css/Splash.css';
import 'react-materialize';
// import CityInfo from './CityInfo.js';
// import AllCityPosts from './AllCityPosts';
// import CommentForm from './CommentForm';



class CityFeed extends Component {

  render() {
    return (

      <div>
          <h1>CITY FEED</h1>
          {this.props.children}
      </div>
    );
  }
}

export default CityFeed;

//
// <CityInfo cityName="San Francisco"/>
// <AllCityPosts />
// <CommentForm />
