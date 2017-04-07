import React, {Component} from 'react';
import "../css/SignUpForm.css"


export default class NewUserForm extends Component {
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

    render() {
        return (
          <div className="signUp" id="signUp">
           <h4>Create A Profile!</h4>
            <form ref={(input) => this.NewUserForm = input} onSubmit={(e) => this.createUser(e)}>
                <label>
                    <input ref={(input) => this.userName = input} placeholder="User Name" type="text"/>
                </label>
                <label>
                    <input ref={(input) => this.password = input} placeholder="Create Password" type="text"/>
                </label>
                <label>
                    <input ref={(input) => this.currentLocation = input} placeholder="Current Location" type="text"/>
                </label>
                <input className="btn waves-effect waves-light" type="submit" value="Submit"/>
            </form>
</div>
        );
    }
}
