import React, { Component } from 'react';
import 'react-materialize';

class CityInfo extends Component {
constructor(props){
  super(props)
  //TODO: Declare your states in here
  //TODO: or use axios to pull from your db here to render cities.
}
  // Replace with dynamic seeded data: cityName and cityPhoto
  render() {
    return (
        <div className="cityInfo">
            <h1>{this.props.cityName}</h1>
            <img src="## TODO: add src from database or seeded data ###" alt="The city!"/>
        </div>
    );
  }
}

export default CityInfo;
