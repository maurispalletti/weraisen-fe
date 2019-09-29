import React from 'react';
import './Login.css';
import logo from './icons/logo.png'
import Cabecera from './components/header/header.js'
import Footer from "./components/footer/footer"

const Login = () => (
  
  <div className="Login">
    <div>
     <Cabecera></Cabecera>
     <h3 align="right">WERAISEN</h3>
 </div>
    <form>
      {/* <form onSubmit={this.handleSignIn.bind(this)}> */}
      <h3>Iniciar sesión </h3>
      <p><input className="login-input" type="text" placeholder="Email" /></p>
      <p><input className="login-input" type="password" placeholder="Contraseña" />
      <a className="forgotPass" href={'/signup'}><h5 align="center">¿Olvidaste tu contraseña?</h5></a></p>
      {/* <p><input className="login-input" align="left" type="checkbox" placeholder="Recordarme"/>
        Recordarme
      </p> */}

      <p><a href={'/home'} className="login-button">INGRESAR</a></p>
      <div className="signup">
        <h5>¿Primera vez en WERAISEN? <a className="forgotPass" href={'/signup'}>Registrate ya.</a></h5> 
        {/* <p><a href={'/signup'} className="signup-button">CREAR CUENTA</a></p> */}
        {/* <input type="text" ref="username" placeholder="enter you username" /> */}
        {/* <input type="password" ref="password" placeholder="enter password" /> */}
        {/* <input type="submit" value="Login" /> */}
      </div>
    </form>
    <Footer />
  </div>


  

  
);

export default Login;
