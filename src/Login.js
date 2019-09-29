import React, { Component } from 'react'
import './Login.css'
import logo from './icons/logo.png'
import loginServices from './services/userServices'
import { Redirect } from 'react-router'

import { Formik, Form } from 'formik'
import { LoginSchema } from './helpers/validators'
import FieldWithError from './forms/FieldWithError'

const INITIAL_VALUES = {
  email: '',
  password: ''
}

class Login extends Component {

  state = {
    goToHome: false,
    loginFailed: false
  }

  loginUser = async ({ email, password }) => {
    try {
      const response = await loginServices.login({ email, password })
      const { data: { id } } = response

      // save Id in local storage
      localStorage.setItem("userId", id);

      // console.log(`GET ID`)
      // localStorage.getItem("userId");
      // console.log(`!!!!!!!!!!!` + id)

      this.setState({ goToHome: true })

    } catch (error) {
      this.setState({ loginFailed: true })
      console.error(`There was an error trying to log in`)
    }
  }

  render() {
    if (this.state.goToHome) {
      return <Redirect to="/signup" />
    }

    return (
      <div className="Login">
        <div className="Header">
          <img src={logo} alt={"WeRaisen"} width="100" />
          <h3 align="right">WERAISEN</h3>
        </div>
        <Formik
          initialValues={INITIAL_VALUES}
          validationSchema={LoginSchema}
          onSubmit={(values) => this.loginUser(values)}>
          <Form>
            <h3>Iniciar sesión </h3>
            <FieldWithError name="email" placeholder="Email" aria-label="username" className="login-input" />
            <FieldWithError name="password" placeholder="Password" type="password" aria-label="password" className="login-input" />

            <div className="right-container">
              <input type="submit" className="login-button" value="Ingresar" />

              {this.state.loginFailed && (
                <p className="form-error">
                  Login falló. Tu email y contraseña no coinciden. Intanta de nuevo.
                </p>
              )}

              <div className="signup">
                <h5>¿Primera vez en WERAISEN? <a className="forgotPass" href={'/signup'}>Registrate ya.</a></h5>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    )
  }
};

export default Login;
