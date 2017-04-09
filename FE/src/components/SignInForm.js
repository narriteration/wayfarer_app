import React, {Component} from 'react';
import { browserHistory } from 'react-router'
import "../css/SignUpForm.css"


export default class SignInForm extends Component {
    createUser(e) {
        e.preventDefault();
        console.log("Created a new user!");
        const newUser = {
            userName: this.userName.value,
            password: this.password.value,
            currentLocation: this.currentLocation.value
        }

        console.log({newUser});
        this.NewUserForm.reset();
        this.props.addUser(newUser);
    }

gotoUserProfile(e) {
  e.preventDefault ();
  browserHistory.push('user-profile');
}
    render() {
        return (
            <div className="signUp" id="signUp">
                <h4>Sign In</h4>
                <form ref={(input) => this.NewUserForm = input} onSubmit={(e) => this.createUser(e)}>
                    <label>
                        <input ref={(input) => this.userName = input} placeholder="User Name" type="text"/>
                    </label>
                    <label>
                        <input ref={(input) => this.password = input} placeholder="Enter Password" type="password"/>
                    </label>
                    <input className="btn waves-effect waves-light" type="submit" onClick={(e) => this.gotoUserProfile(e)}></input>
                </form>
            </div>
        );
    }
}
