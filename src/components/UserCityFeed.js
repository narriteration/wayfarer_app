import React, { Component } from 'react';
import '../css/App.css';
import 'react-materialize';
import CityInfo from './CityInfo.js'

class SignInForm extends Component {

TODO: Styles
* connect to materialize


  render() {
    return (
      <div className="userCityFeed">
          <CityInfo />
          <CityPost />
      </div>
    );
  }
}

export default UserCityFeed;
