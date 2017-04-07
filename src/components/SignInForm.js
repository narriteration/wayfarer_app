import React, {Component} from 'react';
import 'react-materialize';
import { browserHistory } from 'react-router';


export class SignInForm extends Component {

  goToUserProfile(e) {
    e.preventDefault();
    browserHistory.push('/user-profile');
  }


    render() {
        return (
          <div className="signUp" id="signUp">
           <h1>Sign In!</h1>
            <form>
                <label>
                    <input placeholder="User Name" type="text"/>
                </label>
                <label>
                    <input placeholder="Password" type="text"/>
                </label>
                <input className="btn waves-effect waves-light" type="submit" onClick={(e) => this.goToUserProfile(e)}>Sign In</input>
            </form>
          </div>
        );
    }
}
