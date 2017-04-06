import React, { Component } from 'react';
import 'react-materialize';
import NavBarMain from './components/NavBarMain'
import CityFeed from './components/CityFeed'
import

class App extends Component {
 render() {
   return (
      <div className="app">
        <NavBarMain />
        <CityFeed />
      </div>
   );
 }

}

export default App;
