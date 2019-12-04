import React, { Component } from 'react'
import './Login.css'
import logo from './icons/logo4.png'
import userServices from './services/userServices'
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
    loginFailed: false,
    isAdmin: false,
  }

  loginUser = async ({ email, password }) => {
    try {
      const response = await userServices.login({ email, password })
      const { data: { id } } = response

      // save Id in local storage
      localStorage.setItem("userId", id);

      // console.log(`GET ID`)
      // localStorage.getItem("userId");
      // console.log(`!!!!!!!!!!!` + id)
      if (email === 'admin@weraisen.com') {
        this.setState({ isAdmin: true })
      } else {
        this.setState({ goToHome: true })
      }

    } catch (error) {
      this.setState({ loginFailed: true })
      console.error(`There was an error trying to log in`)
    }
  }

  render() {
    if (this.state.goToHome) {
      return <Redirect to="/home" />
    }
    if (this.state.isAdmin) {
      return <Redirect to="/inform" />
    }

    return (
      <div className="Login">
        <div className="Header">
          <img src={logo} alt={"WeRaisen"} width="300" />
          {/* <h3 align="right">WERAISEN</h3> */}
        </div>
        <Formik
          initialValues={INITIAL_VALUES}
          validationSchema={LoginSchema}
          onSubmit={(values) => this.loginUser(values)}>
          <Form>
            <div><h2>Iniciar sesión </h2>
            <FieldWithError name="username" placeholder="Correo electrónico" aria-label="username" type="text" className="login-input" />
            <FieldWithError name="password" placeholder="Contraseña" type="password" aria-label="password" className="login-input" />
            <h3></h3>
              <input type="submit" className="login-button" value="Ingresar" />

              {this.state.loginFailed && (
                <p className="form-error">
                  Tu email y contraseña no coinciden. Intanta de nuevo.
                </p>
              )}

              <div className="signup">
              <p>¿Primera vez en WERAISEN? <a href={'/signup'}>Registrate ahora.</a></p>
                {/* <h5>¿Primera vez en WERAISEN? <a className="forgotPass" href=></a></h5> */}
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    )
  }
};

export default Login;
