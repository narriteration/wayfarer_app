import React, { Component } from 'react';
import 'react-materialize';

class CityInfo extends Component {
  // Replace with dynamic seeded data: cityName and cityPhoto
  render() {
    return (
        <div className="cityInfo">
            <h1>San Francisco</h1>
            <img src="## TODO: add src from database or seeded data ###" alt="The city!"/>
        </div>
    );
  }
}

export default CityInfo;
