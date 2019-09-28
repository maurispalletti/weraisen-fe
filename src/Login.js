import React, { Component } from 'react'
import './Login.css';
import logo from './icons/logo.png'
import loginServices from './services/userServices';
import { Redirect } from 'react-router'

const emailTest = 'mauricio@test.com'
const passwordTest = 'password'

class Login extends Component {

  state = { goToSignup: false }

loginUser = async ({ email, password }) => {

  console.log(`loginuser ${this.state.goToSignup}`)

  try {
    const response = await loginServices.login({ email, password })

    const { data: { id } } = response

    console.log(id)

    localStorage.setItem("userId", id);

    // console.log(`GET ID`)
    // localStorage.getItem("userId");
    // console.log(`!!!!!!!!!!!` + id)

    this.setState({ goToSignup: true })

  } catch (error) {
    console.log(`Error using axios fetch`)
  }
}

render() {

  console.log(`render ${this.state.goToSignup}`)

  if (this.state.goToSignup) {
    return <Redirect to="/signup" />
  }

  return (<div className="Login">
    <div className="Header">
      <img src={logo} alt={"WeRaisen"} width="100" />
      <h3 align="right">WERAISEN</h3>
    </div>
    <form>
      {/* <form onSubmit={this.handleSignIn.bind(this)}> */}
      <h3>Iniciar sesión </h3>
      <p><input className="login-input" type="text" placeholder="Email" /></p>
      <p><input className="login-input" type="password" placeholder="Contraseña" />
        <input type="button" value="Login" onClick={() => this.loginUser({ email: emailTest, password: passwordTest })} />
        <a className="forgotPass" href={'/signup'}><h5 align="center">¿Olvidaste tu contraseña?</h5></a></p>
      <p><a href={'/home'} className="login-button">INGRESAR</a></p>
      <div className="signup">
        <h5>¿Primera vez en WERAISEN? <a className="forgotPass" href={'/signup'}>Registrate ya.</a></h5>
      </div>
    </form>
  </div>)

}
};

export default Login;
