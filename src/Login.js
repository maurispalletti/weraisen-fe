import React, { Component } from 'react'
import './Login.css'
//import './Estilos.css';
import logo from './icons/WER-VERDE.png'
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
      
      <body>
      <div className="Login">
       <div className="Header">
        <img src={logo} alt={"WeRaisen"}  name="img" width="65%"/>
       </div>
       <br></br>
        <Formik
          initialValues={INITIAL_VALUES}
          validationSchema={LoginSchema}
          onSubmit={(values) => this.loginUser(values)}>
            
          <Form>
             <FieldWithError name="email" placeholder="Email" aria-label="username" className="input"/>
             <FieldWithError name="password" placeholder="Password" type="password" aria-label="password" className="input" />
            <br></br>
            <div className="right-container" >
            <input type="submit" className="btn-primero" value="Ingresar" />
              {this.state.loginFailed && (
                <p className="form-error">
                  Login falló. Tu email y contraseña no coinciden. Intenta de nuevo.
                </p>
              )}
              <div className="signup">
              <p>¿Primera vez en WERAISEN? <a className="forgotPass" href={'/signup'}>Registrate ahora.</a></p>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </body>
    )
  }
};  
  


export default Login;
