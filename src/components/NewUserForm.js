import React, {Component} from 'react';
import '../css/Splash.css';
import 'react-materialize';

class NewUserForm extends Component {

    // TODO: STYLING
    // * add Materialize classes

    // TODO: LOGIC
    // * On button submit render UserCityFeed.js component and take away NewUserForm.js component
    // * Make Input a dropdown menu of Cities pulled from database

    render() {
        return (
            <div className="newUserForm">
                <h1>Welcome!</h1>
                <h3>Please signup or sign in:</h3>
                <form action="### TODO: what view will user see on click? OR is this linked to DB? ####" method="post">
                    <input id="create-userName" type="text" name="userName" placeholder="Username (no spaces or characters please)"/>
                    <input id="create-userCity" type="text" name="userCity" placeholder="Your current city"/>
                    <button type="submit" name="create-user-button">Create Your Account</button>
                </form>
            </div>
        );
    }
}

export default NewUserForm;
