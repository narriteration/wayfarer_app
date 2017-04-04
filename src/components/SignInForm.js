import React, { Component } from 'react';
import '../css/App.css';
import 'react-materialize';



class SignInForm extends Component {
  render() { 
    return (
      <div className="signInForm">

      // Option 1: Plain HTML form, needs styling and className + action
        <h1>Sign in form:</h1>
        <form className="######" action="######" method="post">
          <input id="sign-in-email" type="text" name="email" placeholder="Enter email"/>
          <input id="sign-in-password" type="text" name="password" placeholder="Enter password"/>
          <button id="sign-in-form-button" type="submit" name="sign-in-button">Sign in to account</button>
        </form>


        // Option 2: Materialize template for form. Can grab conditional styling from website: http://materializecss.com/forms.html
        <div class="row">
           <form class="col s12">
             <div class="row">
               <div class="input-field col s12">
                 <input id="email" type="email" class="validate"/>
                 <label for="email">Email</label>
               </div>
             </div>
             <div class="row">
               <div class="input-field col s12">
                 <input id="password" type="password" class="validate"/>
                 <label for="password">Password</label>
               </div>
             </div>
             <div class="row">
               <div class="button col s3">
                 <button id="signin-form-button" type="submit">Sign In Now</button>
               </div>
             </div>
           </form>
         </div>
        //  END Materialze template for form


      </div>
    );
  }
}

export default SignInForm;
