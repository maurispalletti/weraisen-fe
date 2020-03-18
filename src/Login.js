import React, { Component } from 'react'
import './Login.css'
import './Estilos.css';
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
    loginFailed: false
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

      this.setState({ goToHome: true })

    } catch (error) {
      this.setState({ loginFailed: true })
      console.error(`There was an error trying to log in`)
    }
  }

  render() {
    if (this.state.goToHome) {
      return <Redirect to="/home" />
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
          <h2>Iniciar sesión</h2>
            <FieldWithError name="email" placeholder="Email" aria-label="username" className="input" />
            <FieldWithError name="password" placeholder="Password" type="password" aria-label="password" className="input" />
            <h3></h3>
            <div className="right-container">
              <input type="submit" className="btn-primero" value="Ingresar" />

              {this.state.loginFailed && (
                <p className="form-error">
                  Login falló. Tu email y contraseña no coinciden. Intanta de nuevo.
                </p>
              )}

              <div className="signup">
                <p>¿Primera vez en WERAISEN? <a className="forgotPass" href={'/signup'}>Registrate ahora.</a></p>
              </div>
            </div>

            <div className="container texto-presentacion">
                <div className="row index__row">
                    <div className="col s12 xl8 offset-xl2">
                        <h2 className="index__section-title">
                            ¿<strong>que es</strong> WeRasen?
                        </h2>
                        <p>
                            <strong>WeRasen es una APP  de turismo</strong> que usa la tecnología para conectar personas, <strong> conecta usuarios a expertos locales</strong>
                        </p>
                        <p>
                            El conocimiento local intercambiado de personas a personas en tiempo real, para ayudar a buscar a donde ir...
                        </p>
                    </div>
                </div>
            </div>


          </Form>
        </Formik>
      </div>
    )
  }
};

export default Login;
