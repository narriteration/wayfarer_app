import React, { Component } from 'react';
import '../css/Splash.css';
import 'react-materialize';
import CityInfo from './CityInfo.js';
import AllCityPosts from './AllCityPosts';
<<<<<<< HEAD
import NavBarMain from './NavBarMain';
=======
import CommentForm from './CommentForm';
>>>>>>> 579c8322616e3dbc6a8c46259aa4afc8c26716e6

class UserCityFeed extends Component {

// TODO: Styles
// * write specific styles to make all three imported components pretty
//
// TODO: View logic
// * render this component after user clicks submit on SignInForm.js


<<<<<<< HEAD
  render() {
    return (
      <div className="userCityFeed">
          <CityInfo /> // renders information specific to THIS city only
          <AllCityPosts /> // renders all CityPosts that ANY user has published about this city
      </div>
    );
  }
=======
 render() {
   return (
     <div className="userCityFeed">
         <CityInfo />
         <AllCityPosts />
         <CommentForm />
     </div>
   );
 }
>>>>>>> 579c8322616e3dbc6a8c46259aa4afc8c26716e6
}

export default UserCityFeed;
