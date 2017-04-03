import React, { Component } from 'react';
import './css/App.css';
import 'react-materialize';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header" id="header">
          <div className="Title">
 <h1>Welcome to Wayfarer!</h1>
 </div>
        <a className="waves-effect waves-light btn-large">Log In</a>
        <a className="waves-effect waves-light btn-large">Sign Up</a>
        </div>
      </div>

    );
  }
}

export default App;
