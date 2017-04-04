import React, { Component } from 'react';
import './css/App.css';
import 'react-materialize';
import NewPostForm from './components/NewPostForm';


class App extends Component {
 render() {
   return (
     <div className="App">
       <div className="App-header" id="header">
         <div className="Title">
            <h1>Welcome to Wayfarer!</h1>
            <p>A travel community for you to share city-specific tips about your favorite locations around the world.</p>
            <a className="btn waves-effect waves-light">Log In</a>
            <a className="btn waves-effect waves-light">Sign Up</a>
            <NewPostForm />

       </div>
     </div>
   </div>
   );
 }
}

export default App;

// create all views in single page app and then break them up
