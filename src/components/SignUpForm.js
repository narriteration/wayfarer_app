import React, { Component } from 'react';
import '../css/App.css';
import 'react-materialize';



class SignUpForm extends Component {
  render() { 
    return (
      <div className="signUpForm">

      // Option 1: Plain HTML form, needs styling and className + action
        <h1>Sign up form:</h1>
        <form className="######" action="######" method="post">
          <input id="sign-up-email" type="text" name="email" value="Enter email"/>
          <input id="sign-up-password" type="text" name="password" value="Enter password"/>
          <button type="submit" name="sign-up-form-button">Create New User</button>
        </form>


        // Option 2: Materialize template for form. Can grab conditional styling from website: http://materializecss.com/forms.html
        <div class="row">
           <form class="col s12">
             <div class="row">
               <div class="input-field col s6">
                 <input placeholder="Your first name, example: Alix" id="first_name" type="text" class="validate"/>
                 <label for="first_name">First Name</label>
               </div>
               <div class="input-field col s6">
                 <input placeholder="Your last name, example: Robinson" id="last_name" type="text" class="validate"/>
                 <label for="last_name">Last Name</label>
               </div>
             </div>
             <div class="row">
               <div class="input-field col s12">
                 <input id="sign-up-password" type="password" class="validate"/>
                 <label for="password">Password</label>
               </div>
             </div>
             <div class="row">
               <div class="input-field col s12">
                 <input id="email" type="email" class="validate"/>
                 <label for="email">Email</label>
               </div>
             </div>
             <div class="row">
                <div class="button col s3">
                  <button type="submit" name="sign-up-form-button">Create New User</button>
                </div>
             </div>
           </form>
         </div>
        //  END Materialze template for form


      </div>
    );
  }
}

export default SignUpForm;
