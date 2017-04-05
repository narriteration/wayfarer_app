import React, {Component} from 'react';
import '../css/Splash.css';
import 'react-materialize';

    // TODO: STYLING
    // * add Materialize classes

    // TODO: LOGIC
    // figure out why form not rendering - chelsea
    // * On button submit render CityFeed.js component and take away NewUserForm.js component
    // * Make Input a dropdown menu of Cities pulled from database


class NewUserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username: '' ,
          password: '',
          currentCity: ''
        };
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handleUserPasswordChange = this.handleUserPasswordChange.bind(this);
        this.handleUserCityChange = this.handleUserCityChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleUserNameChange(e) {
      this.setState({ username: e.target.value });
    }
    handleUserPasswordChange(e) {
      this.setState({ password: e.target.value });
    }
    handleUserCurrentCityChange(e) {
      this.setState({ currentCity: e.target.value });
    }
    handleSubmit(e) {
      e.preventDefault();
      let username = this.state.username.trim();
      let password = this.state.password.trim();
      if (!username || !password || !currentCity) {
        return;
      }
      this.props.onCreateUserSubmit({ username: username, password: password, currentCity: currentCity });
      console.log("handleSubmit in NewUserForm: " + username + "has password " + {currentCity});

      this.setState({ username: '', currentCity: '' });



      // console.log(`${this.state.username} has password: ${this.state.password}, and currentCity is: ${this.state.currentCity}`);
      // Tie into POST to db method
    }
    render() {
        return (
            <div className="newUserForm">
                <h1>Welcome!</h1>
                <h3>Please signup or sign in:</h3>

                    <form onSubmit={ this.handleSubmit }>
                        <input
                            id="create-userName"
                            type="text"
                            name="userName"
                            placeholder="Username (no spaces or characters please)"
                            value={ this.state.username }
                            onChange={ this.handleUserNameChange }/>
                        <input
                            id="create-userPassword"
                            type="password"
                            name="userPassword"
                            placeholder="*********"
                            value={ this.state.password }
                            onChange={ this.handleUserPasswordChange }/>
                        <input
                            id="create-userCity"
                            type="text"
                            name="userCity"
                            placeholder="Your current city"
                            value={ this.state.currentCity }
                            onChange={ this.handleUserCurrentCityChange }/>
                        <button
                            type="submit"
                            name="create-user-button">
                            Create Your Account
                        </button>
                    </form>

            </div>
          );
      }
  }

  export default NewUserForm;
