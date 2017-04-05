import React, { Component } from 'react';

import 'react-materialize';
import NavBarMain from './components/NavBarMain'
import UserCityFeed from './components/UserCityFeed'


class App extends Component {
 render() {
   return (
      <div className="app">
        <NavBarMain />
        <UserCityFeed />
      </div>
   );
 }

}

export default App;
