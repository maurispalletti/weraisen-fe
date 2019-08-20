import React from 'react';
import './Login.css';

const Login = () => (
  <div className="Login">
    <form>
      {/* <form onSubmit={this.handleSignIn.bind(this)}> */}
      <h3>WE RAISEN</h3>
      <p><input className="login-input" type="text" placeholder="Ingresa tu email" /></p>
      <p><input className="login-input" type="password" placeholder="Ingresa tu contraseña" /></p>
      <p><a href={'/home'} className="login-button">INICIAR SESIÓN</a></p>
      <div className="signup">
        <p>¿Primera vez en WERAISEN?</p>
        <p><a href={'/profile'} className="signup-button">CREAR CUENTA</a></p>
        {/* <input type="text" ref="username" placeholder="enter you username" /> */}
        {/* <input type="password" ref="password" placeholder="enter password" /> */}
        {/* <input type="submit" value="Login" /> */}
      </div>
    </form>
  </div>
);

export default Login;
