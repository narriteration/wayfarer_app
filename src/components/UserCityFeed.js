import React, { Component } from 'react';
import '../css/Splash.css';
import 'react-materialize';
import CityInfo from './CityInfo.js';
import AllCityPosts from './AllCityPosts';
import CommentForm from './CommentForm';

class UserCityFeed extends Component {

// TODO: Styles
// * write specific styles to make all three imported components pretty
//
// TODO: View logic
// * render this component after user clicks submit on SignInForm.js


 render() {
   return (
     <div className="userCityFeed">
         <CityInfo />
         <AllCityPosts />
         <CommentForm />
     </div>
   );
 }
}

export default UserCityFeed;
