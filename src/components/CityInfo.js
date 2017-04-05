import React, { Component } from 'react';
import '../css/Splash.css';
import 'react-materialize';

class CityInfo extends Component {
  // Replace with dynamic seeded data: cityName and cityPhoto
  render() {
    return (
        <div className="cityInfo">
            <h1>Your City Name</h1>
            <img src="#" alt="Your city!"/>
        </div>
    );
  }
}

export default CityInfo;
