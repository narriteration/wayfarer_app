import React, { Component } from 'react';

export default class NewPostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log('A post was made: ' + this.state.value);
    // TODO: write the setState function/method to store post's contents in State
    event.preventDefault();
 }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input placeholder="Title:" type="text" value={this.props.value} onChange={this.handleChange} />
        </label>
        <label>
          <input placeholder="Content: 200 characters" type="text" value={this.props.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
