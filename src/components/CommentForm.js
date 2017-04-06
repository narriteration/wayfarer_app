import React, { Component } from 'react';

export default class CommentForm extends Component {







  handleSubmit(event) {
    console.log('A post was made: ' + this.state.value);
    // TODO: write the setState function/method to store post's contents in State
    event.preventDefault();
 }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input placeholder="Title:" type="text"  />
        </label>
        <label>
          <input placeholder="Content: 200 characters" type="text"  />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
