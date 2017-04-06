import React, { Component } from 'react';
import 'react-materialize';
import CommentForm from './components/CommentForm';
import NavBarMain from './components/NavBarMain';

class App extends Component {
    constructor() {
      super();
      this.addComment = this.addComment.bind(this);
    }
    state = {
      comments: {}
    }

    addComment(thisComment) {
      const comments = {...this.state.comments};
      const timestamp = Date.now();
      comments[`comment-${timestamp}`] = thisComment;
      this.setState({ comments })
    }

   render() {
     return (
        <div className="app">
            <NavBarMain />
            <CommentForm addComment={this.addComment}  />
        </div>
     );
   }

}

export default App;
