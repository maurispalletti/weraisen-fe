import React from 'react';
import './Login.css';

const Login = () => (
<div className="Login">
        <form>
        {/* <form onSubmit={this.handleSignIn.bind(this)}> */}
        <h3>WE RAISEN</h3>
        <p><input className="login-input" type="text" placeholder="enter you username" /></p>
        <p><input className="login-input" type="password" placeholder="enter password" /></p>
        <p><a href={'/home'} className="login-button">LOGIN</a></p>
        {/* <input type="text" ref="username" placeholder="enter you username" /> */}
        {/* <input type="password" ref="password" placeholder="enter password" /> */}
        {/* <input type="submit" value="Login" /> */}
      </form>
    </div>
);

export default Login;
