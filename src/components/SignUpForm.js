import React, { Component } from 'react';
// import '../css/App.css';
// import 'react-materialize';
import NewUserForm from './NewUserForm.js';
import UserInfo from './UserInfo';


class SignUpForm extends Component {
    constructor(props) {
      super(props);
      this.state = { data: [] };
    }

    render() {
      return (
        <div>
            <h3>New User Form:</h3>
            <NewUserForm />
            <UserInfo />
        </div>
      );
    }
  }

export default SignUpForm;
