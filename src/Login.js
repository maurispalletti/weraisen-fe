import React from 'react';
import './Login.css';
import logo from './icons/logo.png'

const Login = () => (
  
  <div className="Login">
    <div className="Header">
     <img src={logo} alt={"WeRaisen"} width="100" />
     <h3 align="right">WERAISEN</h3>
 </div>
    <form>
      {/* <form onSubmit={this.handleSignIn.bind(this)}> */}
      <p>Inicia sesión en tu cuenta</p>
      <p><input className="login-input" type="text" placeholder="Ingresa tu email" /></p>
      <p><input className="login-input" type="password" placeholder="Ingresa tu contraseña" /></p>
      <a href={'/signup'}><h6 align="left">¿Olvidaste tu contraseña?</h6></a>
      {/* <p><input className="login-input" align="left" type="checkbox" placeholder="Recordarme"/>
        Recordarme
      </p> */}

      <p><a href={'/home'} className="login-button">INICIAR SESIÓN</a></p>
      <div className="signup">
        <p>¿Primera vez en WERAISEN?</p>
        <p><a href={'/signup'} className="signup-button">CREAR CUENTA</a></p>
        {/* <input type="text" ref="username" placeholder="enter you username" /> */}
        {/* <input type="password" ref="password" placeholder="enter password" /> */}
        {/* <input type="submit" value="Login" /> */}
      </div>
    </form>
  </div>
  

  
);

export default Login;
