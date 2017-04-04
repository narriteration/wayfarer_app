import React, { Component } from 'react';
import '../css/App.css';
import 'react-materialize';
import NavBarDynamic from './NavBarDynamic';
import CityInfo from './CityInfo.js';
import AllCityPosts from './AllCityPosts';
import NewPostForm from './NewPostForm';

class SignInForm extends Component {

// TODO: Styles
// * write specific styles to make all three imported components pretty
//
// TODO: View logic
// * render this component after user clicks submit on SignInForm.js


  render() {
    return (
      <div className="userCityFeed">
          <NavBarDynamic /> // renders nav bar at top with appropriate buttons and search bar
          <CityInfo /> // renders information specific to THIS city only
          <AllCityPosts /> // renders all CityPosts that ANY user has published about this city
          <NewPostForm /> // renders form to create new post about THIS city, on submit will close and add this post to CityPosts
      </div>
    );
  }
}

export default UserCityFeed;
