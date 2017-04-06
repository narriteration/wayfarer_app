import React, {Component} from 'react';
import '../css/CommentForm.css';

export default class CommentForm extends Component {
    createComment(e) {
        e.preventDefault();
        console.log("Making some Comments / posts");
        const thisComment = {
            title: this.title.value,
            comment: this.comment.value
        }
        this.props.addComment(thisComment);
        this.commentForm.reset();
    }

    render() {
        return (
            <div className="formBody">
                <h6>Create A New Post About Your Favorite City</h6>
                <form ref={(input) => this.commentForm = input} onSubmit={(e) => this.createComment(e)}>

                    <label>
                        <input ref={(input) => this.title = input} placeholder="Title" type="text"/>
                    </label>

                    <label>
                        <input ref={(input) => this.comment = input} placeholder="200 characters" type="text"/>
                    </label>

                    <input className="btn waves-effect waves-light" type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

//  handleSubmit(event) {
//    console.log('A post was made: ' + this.state.value);
//    // TODO: write the setState function/method to store post's contents in State
//    event.preventDefault();
// }

// <label>
//   <input placeholder="Content: 200 characters" type="text"  />
// </label>
