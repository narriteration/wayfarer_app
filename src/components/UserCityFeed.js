import React, { Component } from 'react';
import '../css/Splash.css';
import 'react-materialize';
import CityInfo from './CityInfo.js';
import AllCityPosts from './AllCityPosts';
import NewPostForm from './NewPostForm';
import navBarMain from './NavBarMain';

class UserCityFeed extends Component {

// TODO: Styles
// * write specific styles to make all three imported components pretty
//
// TODO: View logic
// * render this component after user clicks submit on SignInForm.js


  render() {
    return (
      <div className="userCityFeed">
          <CityInfo /> // renders information specific to THIS city only
          <AllCityPosts /> // renders all CityPosts that ANY user has published about this city
          <NewPostForm /> // renders form to create new post about THIS city, on submit will close and add this post to CityPosts
      </div>
    );
  }
}

export default UserCityFeed;
