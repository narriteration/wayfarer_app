import React, { Component } from 'react';

import 'react-materialize';
import Splash from './components/Splash'
import NavBarMain from './components/NavBarMain'


class App extends Component {
 render() {
   return (
      <div className="App">
        <Splash />
        <NavBarMain />
      </div>
   );
 }

}

export default App;
