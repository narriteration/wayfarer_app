import React, { Component } from 'react';
import 'react-materialize';
import NavBarMain from './components/NavBarMain';
import CommentForm from './components/CommentForm';
import Comment from './components/Comment';


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
            <ul>
                {
                    Object
                        .keys(this.state.comments)
                        .map(key=> <Comment key={key} details={this.state.comments[key]} />)

                }
            </ul>
        </div>
     );
   }

}

export default App;
