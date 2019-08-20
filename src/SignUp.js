import React from 'react';
import './SignUp.css';

const SignUp = () => (
<div className="SignUp">
        <form>
        {/* <form onSubmit={this.handleSignIn.bind(this)}> */}
        <h3>WE RAISEN</h3>
        <p><input className="login-input" type="text" placeholder="enter you username" /></p>
        <p><input className="login-input" type="password" placeholder="enter password" /></p>
        <p><a href={'/home'} className="login-button">Crear</a></p>
      </form>
    </div>
);

export default SignUp;
