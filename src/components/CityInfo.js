import React, { Component } from 'react';
import 'react-materialize';
import '../css/CityInfo.css';

class CityInfo extends Component {
  //TODO: Declare your states in here
  //TODO: or use axios to pull from your db here to render cities.
  render() {
    return (
        <div className="cityInfo" id="bg">
            <h1>{this.props.cityName}</h1>
        </div>
    );
  }
}

export default CityInfo;
