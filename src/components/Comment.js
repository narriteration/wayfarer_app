import React, { Component } from 'react';
// import marked from 'marked';
// import style from './style';

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


// export default class Comment extends Component {
//   rawMarkup() {
//     let rawMarkup = marked(this.props.children.toString());
//     return { __html: rawMarkup };
//   }
//   render() {
//     return (
//       <div style={ style.comment }>
//         <li>
//         <h3>{this.props.author} says:</h3>
//         <span dangerouslySetInnerHTML={ this.rawMarkup() } />
//         </li>
//       </div>
//     )
//   }
// }







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
