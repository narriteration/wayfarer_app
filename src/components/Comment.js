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
