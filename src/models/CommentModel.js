// NOT THE SAME as models/Comment.js
// this imports axios, makes requests to axios
//  returns that request
// and exports a model
////////////

import axios from 'axios'

class CommentModel {
  //this will get all the comments
  static all(){
    let request = axios.get("")
    return request
  }
  static create(comment) {
    console.log("trying to post: ", comment);
    let request = axios.post("localhost:3001/api/comments")
    return request
  }
}

export default CommentModel
