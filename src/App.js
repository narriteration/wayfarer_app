import React, { Component } from 'react';
import 'react-materialize';
import CommentForm from './components/CommentForm';
import NewUserForm from './components/NewUserForm'

export default class App extends Component {
    constructor() {
      super();
      this.addComment = this.addComment.bind(this);
      this.addUser = this.addUser.bind(this);
    }
    state = {
      comments: {},
      users: {}
    }

    addComment(thisComment) {
      const comments = {...this.state.comments};
      const timestamp = Date.now();
      comments[`comment-${timestamp}`] = thisComment;
      this.setState({ comments })
    }

  addUser(newUser) {
    const users = {...this.state.users};
    const timestamp = Date.now();
    users[`user-${timestamp}`] = newUser;
    this.setState({ users })
  }
   render() {
     return (
        <div className="app">
          <h1>hello world</h1>
            <CommentForm addComment={this.addComment}  />
            <NewUserForm addUser={this.addUser} />
        </div>
     );
   }

}
