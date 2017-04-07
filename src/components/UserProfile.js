import React, {Component} from 'react';
import '../css/UserProfile.css';
import NavBarMain from './NavBarMain';

export default class UserProfile extends Component {
    render(){
      return (
            <div classNameName="container">
                <div className="userProfile">
                    <img align="left" className="fb-image-lg" src="http://lorempixel.com/850/280/nightlife/5/" alt="Profile image example"/>
                    <img align="left" className="fb-image-profile thumbnail" src="http://lorempixel.com/180/180/people/9/" alt="Profile image example"/>
                    <div className="fb-profile-text">
                        <h1>Sasha Fierce</h1>
                        <p>Girls just wanna go fun.</p>
                    </div>
                </div>
            </div>
        );}
}
