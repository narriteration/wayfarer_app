import React, { Component } from 'react';
import './css/App.css';
import 'react-materialize';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header" id="header">
          <div className="Title">
              <h1>Welcome to Wayferer!</h1>
              <p>A travel community for users to share city-specific tips about their favorite locations around the world.</p>
                <button type="button" className="btn btn-primary">Log In</button>
                <button type="button" className="btn btn-primary">Sign Up</button>
        </div>
        </div>


      </div>
    );
  }
}

export default App;
