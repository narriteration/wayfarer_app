import React, { Component } from 'react';
import Comment from './Comment';
import style from './style';

class CommentList extends Component {
  render() {
    let commentNodes = this.props.data.map(comment => {
      return (
        <Comment author={ comment.author } key={ comment['_id'] }>
          { comment.text}
        </Comment>
      )
    })
    return (
      <div style={ style.commentList }>
        { commentNodes }
      </div>
    )
  }
}

export default CommentList;




//
//
//
// === CommentContainer
// goal: render ALL comments in db
//
//
// import React, {Component} from 'react'
// import CommentModel from '......../models/CommentModel'
//
// class CommentsList extends Component {
//   render(){
//     CommentModel.all().then( (res) => {
//       console.log(res);
//     })
//     return (
//       <div className='commentList'>
//         <h2>This is a comments container/list</h2>
//
//
//
// // render multiple comment components
// 
//       </div>
//     )
//   }
// }
//
// export default CommentsList
