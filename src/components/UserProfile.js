import React, {Component} from 'react';
import '../css/Splash.css';
import 'react-materialize';
import UserInfo from './UserInfo.js'

class UserProfile extends Component {

    render() {
        return (
            <div className="userProfile">
                <h1>Welcome to your user profile!</h1>
                <UserInfo url="http://localhost:3001/api/users" />
            </div>
          );
      }
  }

  export default UserProfile;
