import React, { Component } from 'react';
import 'react-materialize';
import axios from 'axios';
import NavBarMain from './components/NavBarMain';
import CommentForm from './components/CommentForm';
import CityInfo from './components/CityInfo';
import Comment from './components/Comment';


export default class App extends Component {
    constructor() {
      super();
      this.addComment = this.addComment.bind(this);
    }
    state = {
      comments: {},
    }

    addComment(thisComment) {
      const comments = {...this.state.comments};
      const timestamp = Date.now();
      comments[`comment-${timestamp}`] = thisComment;
      console.log("trying to post: ", thisComment);
      this.setState({ comments });
      axios.post("localhost:3001/api/comments", thisComment)
        .catch(err => {
          console.log(err);
          this.setState({ comments })
        });
    }

   render() {
     return (
        <div className="app">
            <NavBarMain />
            <CityInfo cityName="San Francisco"/>
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
