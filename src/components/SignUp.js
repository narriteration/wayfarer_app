import React, { Component } from 'react';
import NewUserForm from './NewUserForm.js'
import "../css/SignUpForm.css"

class SignUp extends Component {
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
    users[`comment-${timestamp}`] = newUser;
    console.log("trying to post: ", newUser);
    this.setState({ users });
  }
  render() {
    return (
<div>
      <NewUserForm  addUser={this.addUser}/>
</div>
    );
  }
}

export default SignUp;
