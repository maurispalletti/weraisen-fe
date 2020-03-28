import React, { Component } from 'react'
import './Login.css'
import logo from './icons/logo4.png'
import userServices from './services/userServices'
import { Redirect } from 'react-router'

import { Formik, Form } from 'formik'
import { LoginSchema } from './helpers/validators'
import FieldWithError from './forms/FieldWithError'

import scroll from './icons/scroll.png'
import use from './icons/useweb.png'

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
      <div className="Container">
        <div id="scrollhere" backgroud={logo}>
        <div className="logo"><img src={logo} alt={"WeRaisen"} width="200" />
        </div>
        <div className="web"><a href="#Login" className="use"><img src={use} alt={"WER"} width="150"/> </a></div>
        <div className="continuar1"><a href="#scrollhere1" className=""><img src={scroll} alt={"WER"} width="70"/> </a></div>
        </div>
        <div id="scrollhere1">
          <h2 className="index__section-title"><strong>WERAISEN</strong></h2>
          {/* <div className="logo"><img src={logo} alt={"WeRaisen"} width="300" /></div> */}

          <p className="index__section-title"><strong>
            
                ¿Alguna vez has estado en una ciudad por primera vez y deseaste tener un guía amigo allí?
                </strong></p>
                <p>
                <strong>WeRaisen</strong> es una plataforma que utiliza la tecnología para conectarte con <strong>expertos locales.</strong></p>

                  <p>Únicamente tenes que especificar a dónde queres ir, cuándo, qué queres hacer allí y <strong>enviar una solicitud</strong> al guía que más te guste</p>

      
            <div className="continuar"><a href="#scrollhere2" className=""><img src={scroll} alt={"WER"} width="70"/> </a></div>
        </div>

        <div id="scrollhere2">
        <h2 className="index__section-title">¿<strong>Cómo funciona</strong>?</h2>
                <p>
                  Elegí tu guía favorito y empeza un chat privado. Recibí recomendaciones personales de tu guía desde su experiencia por ser local y acordá un encuentro
                </p>
                <p>
                   Al finalizar el encuentro, simplemente calificá y escribí una breve reseña sobre tu guía según la calidad de la experiencia. Tu guía también te calificará.
                   Así, podremos mantener la seguridad de nuestra plataforma.                
                </p>
                <p>
                  
                </p>
               <div className="continuar2"><a href="#Login" className=""><img src={scroll} alt={"WER"} width="70"/> </a></div>
          
               </div>





        <div id="Login" className="Login">
          <div className="Header">
            <img src={logo} alt={"WeRaisen"} width="300" />
            
           

            {/* <h3 align="right">WERAISEN</h3> */}
          </div>
          <Formik
            initialValues={INITIAL_VALUES}
            validationSchema={LoginSchema}
            onSubmit={(values) => this.loginUser(values)}>
            <Form>
              <h2>Iniciar sesión </h2>
              <FieldWithError name="email" placeholder="Email" aria-label="username" className="login-input" />
              <FieldWithError name="password" placeholder="Password" type="password" aria-label="password" className="login-input" />
              <h3></h3>
              <div className="right-container">
                <input type="submit" className="login-button" value="Ingresar" />

                {this.state.loginFailed && (
                  <p className="form-error">
                    Login falló. Tu email y contraseña no coinciden. Intanta de nuevo.
                  </p>
                )}

                <div className="signup">
                  <p>¿Primera vez en WERAISEN? <a className="forgotPass" href={'/signup'}>Registrate ahora.</a></p>
                </div>
              </div>

              {/* <div className="container texto-presentacion">
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
            </div> */}


            </Form>
          </Formik>
        </div>




      </div>
    )
  }
};

export default Login;
