import React, { Component } from 'react';
// import '../css/App.css';
import 'react-materialize';

class CityInfo extends Component {
  // Replace with dynamic seeded data: cityName and cityPhoto
  render() {
    return (
        <div className="cityInfo">
            <h1>San Francisco</h1>
            <img src="## TODO: add src from database or seeded data ###" alt="Picture of city!">
        </div>
    );
  }
}

export default CityInfo;
