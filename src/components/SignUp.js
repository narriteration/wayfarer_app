import React, { Component } from 'react';
import NewUserForm from './NewUserForm.js'
import "../css/SignUpForm.css"

export default class SignUp extends Component {
    constructor() {
      super();
      this.addUser = this.addUser.bind(this);
    }
    state = {
      users: {}
    }

  addUser(newUser) {
    const users = {...this.state.users};
    const timestamp = Date.now();
    users[`user-${timestamp}`] = newUser;
    this.setState({ users })
  }
  render() {
    return (
<div>
      <NewUserForm addUser={this.addUser}/>
</div>
    );
  }
}
