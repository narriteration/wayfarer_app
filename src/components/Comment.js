import React, { Component } from 'react';


export default class Comment extends Component {
  render() {
    return (
      <div>
          <li>
            <h4>{this.props.details.title}</h4>
            <h6>{this.props.details.comment}</h6>
          </li>
      </div>
    )
  }
}

//  is passed a prop, it will render the same formatted comment each time
// DOES NOT render MULTIPLE
//
// import React, {Component} from 'react'
//
// class Todo extends Component {
//   render(){
//     return(
//       <p data-todos-index={this.props.todo.id}>
//         <span>{this.props.todo.body}</span>
//       </p>
//     )
//   }
// }
//
// export default Todo
