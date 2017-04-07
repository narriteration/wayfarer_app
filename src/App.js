import React, { Component } from 'react';
import 'react-materialize';
import axios from 'axios';
import NavBarMain from './components/NavBarMain';
import CommentForm from './components/CommentForm';
import CityInfo from './components/CityInfo';


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
      console.log("trying to post: ", thisComment);
      this.setState({ comments })
      axios.post("localhost:3001/api/comments", thisComment)
        .catch(err => {
          console.log(err);
          this.setState({ comments })
        });
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

            <NavBarMain />
            <CityInfo cityName="San Francisco"/>
            <CommentForm addComment={this.addComment}  />
        </div>
     );
   }

}
