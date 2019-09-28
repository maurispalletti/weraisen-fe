import React, { Component } from 'react'
import './Login.css';
import logo from './icons/logo.png'
import loginServices from './services/userServices';

const emailTest = 'mauricio@test.com'
const passwordTest = 'password'

const loginUser = async ({ email, password }) => {
  try {
    const response = await loginServices.login({ email, password })

    console.log(`!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`)
    console.log(response)
    console.log(`!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`)

  } catch (error) {
    console.log(`Error using axios fetch !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`)
  }
}

class Login extends Component {

  // componentDidMount() {
  //   axios.get('https://dog.ceo/api/breeds/image/random')
  //     .then(response => {
  //       console.log(response.data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }

  render() {
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
          <input type="button" value="Login" onClick={() => loginUser({ email: emailTest, password: passwordTest })} />
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
    </div>)

  }
};

export default Login;
