import React, { Component } from 'react'
import './Login.css'
import logo from './icons/logo.png'
import loginServices from './services/userServices'
import { Redirect } from 'react-router'




import { Formik, Form } from 'formik'
import { LoginSchema } from './helpers/validators'
import FieldWithError from './forms/FieldWithError'



// const emailTest = 'mauricio@test.com'
// const passwordTest = 'password'

const INITIAL_VALUES = {
  email: '',
  password: ''
}

class Login extends Component {

  state = {
    goToSignup: false,
    loginFailed: false
  }

  loginUser = async ({ email, password }) => {

    console.log({ email, password })

    try {

      const response = await loginServices.login({ email, password })

      console.log(response)

      const { data: { id } } = response


      console.log(id)

      localStorage.setItem("userId", id);

      // console.log(`GET ID`)
      // localStorage.getItem("userId");
      // console.log(`!!!!!!!!!!!` + id)

      this.setState({ goToSignup: true })

    } catch (error) {
      this.setState({ loginFailed: true })
      console.log(`Error using axios fetch`)
    }
  }

  render() {

    console.log(`render ${this.state.goToSignup}`)

    if (this.state.goToSignup) {
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
              <p><a href={'/home'} className="login-button">INGRESAR</a></p>
              {/* <input type="submit" value="Login" onClick={() => this.loginUser({ email: emailTest, password: passwordTest })} /> */}
              <input type="submit" value="Login" />

              {this.state.loginFailed && (
                <p className="error">
                  Oops! something happened: <b>Fallo!!!!!</b>
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

/* 

<input type="button" value="Login" onClick={() => this.loginUser({ email: emailTest, password: passwordTest })} />
<a className="forgotPass" href={'/signup'}><h5 align="center">¿Olvidaste tu contraseña?</h5></a>
<p><a href={'/home'} className="login-button">INGRESAR</a></p>
<div className="signup">
<h5>¿Primera vez en WERAISEN? <a className="forgotPass" href={'/signup'}>Registrate ya.</a></h5>
</div>

{loginFailed && (
  <p className="error">
    Oops! something happened: <b>{loginFailed}</b>
  </p>
)}
*/



// class Login extends Component {

//   state = { goToSignup: false }

//   loginUser = async ({ email, password }) => {

//     console.log(`loginuser ${this.state.goToSignup}`)

//     try {
//       const response = await loginServices.login({ email, password })

//       const { data: { id } } = response

//       console.log(id)

//       localStorage.setItem("userId", id);

//       // console.log(`GET ID`)
//       // localStorage.getItem("userId");
//       // console.log(`!!!!!!!!!!!` + id)

//       this.setState({ goToSignup: true })

//     } catch (error) {
//       console.log(`Error using axios fetch`)
//     }
//   }

//   render() {

//     console.log(`render ${this.state.goToSignup}`)

//     if (this.state.goToSignup) {
//       return <Redirect to="/signup" />
//     }

//     return (<div className="Login">
//       <div className="Header">
//         <img src={logo} alt={"WeRaisen"} width="100" />
//         <h3 align="right">WERAISEN</h3>
//       </div>

// <form>
//   {/* <form onSubmit={this.handleSignIn.bind(this)}> */}
//   <h3>Iniciar sesión </h3>
//   <p><input className="login-input" type="text" placeholder="Email" /></p>
//   <p><input className="login-input" type="password" placeholder="Contraseña" />
//     <input type="button" value="Login" onClick={() => this.loginUser({ email: emailTest, password: passwordTest })} />
//     <a className="forgotPass" href={'/signup'}><h5 align="center">¿Olvidaste tu contraseña?</h5></a></p>
//   <p><a href={'/home'} className="login-button">INGRESAR</a></p>
//   <div className="signup">
//     <h5>¿Primera vez en WERAISEN? <a className="forgotPass" href={'/signup'}>Registrate ya.</a></h5>
//   </div>
// </form>

//     </div>)
//   }
// };

export default Login;
