import React, { Component } from 'react'
import './Login.css'

import logo from './icons/WER-NARANJA.png'
import userServices from './services/userServices'
import { Redirect } from 'react-router'

import { Formik, Form } from 'formik'
import { LoginSchema } from './helpers/validators'
import FieldWithError from './forms/FieldWithError'

import scroll1 from './icons/scrollverde.png'
import scroll2 from './icons/scrollnaranja.png'


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
        <div id="Inicio" backgroud={logo}>
          <div className="logo"><img src={logo} alt={"WeRaisen"} width="200" /></div>
          <div className="eslogan">
            <strong><span className="colorfondo">
              <h3></h3>
              <h4></h4>
              <h7> Viajá. Conocé. Viví una experiencia única.</h7>
            </span> </strong>
          </div>
  <br></br>
          <div className="Login">
            <Formik
              initialValues={INITIAL_VALUES}
              validationSchema={LoginSchema}
              onSubmit={(values) => this.loginUser(values)}>
              <Form>
               
               <FieldWithError name="email"  aria-label="username" className="input" autocomplete="off" />
               Email
               <FieldWithError name="password" type="password" aria-label="password" autocomplete="off" className="input" />
               Contraseña
               <br></br>
               <div className="right-container" style={{padding:"30px"}}>
                 <input type="submit" className="btn-primero" value="Iniciar sesión" />

                 {this.state.loginFailed && (
                   <p className="form-error">
                     Tu email y password no coinciden. Intenta de nuevo.
                   </p>
                 )}

                 <div className="signup">
                   <p>¿Primera vez en WERAISEN?</p> <p><a className="forgotPass" href={'/signup'}>Registrate ahora.</a></p>
                 </div>
               </div>
             </Form>
           </Formik>
         </div>

         <div className="continuar1"><a href="#WeRaisen" className=""><img className="imag" src={scroll1} alt={"WER"} width="50" /> </a></div>
         </div>
       <div id="WeRaisen">
         <h1 className="index__section-title"><strong>WERAISEN</strong></h1>



          <div className="text"><p ><strong>

            ¿Alguna vez has estado en una ciudad por primera vez y deseaste tener un guía amigo?
                </strong></p>
            <h3></h3>
            <p>
              <strong>WeRaisen</strong> es una plataforma que utiliza la tecnología para conectarte con <strong>expertos locales.</strong></p>

            <p>Únicamente tenes que especificar a dónde queres ir, cuándo y qué queres hacer allí... </p>
            <p>Luego, sólo deberás <strong>enviar una solicitud</strong> al guía que más te guste</p>

          </div>
          <div className="continuar"><a href="#Funcionamiento" className=""><img className="imag" src={scroll1} alt={"WER"} width="50" /> </a></div>
        </div>

        <div id="Funcionamiento">
          <h1 className="index__section-title2" color="#9CD6AE">¿<strong>Cómo funciona</strong>?</h1>
          <div className="text"> <p>
            Elegí tu guía favorito y empeza un <strong>chat privado</strong>. </p>
            <p>Recibí recomendaciones personales de tu guía desde su experiencia por ser local y <strong>acordá un encuentro.</strong>
            </p>
            <p>
              Al finalizar el encuentro, simplemente <strong>calificá </strong>y escribí una <strong>breve reseña</strong> sobre tu guía según la calidad de la experiencia. </p>
            <p>Tu guía también te calificará.</p><p>
              De esta forma, podras ayudar a <strong>futuros turistas</strong> a elegir la mejor opción.
                </p>
            <p>
            <div className="continuar2"><a href="#Inicio" className=""><img className="imag" src={scroll2} alt={"WER"} width="50" /> </a></div>

            </p>
          </div>
        </div>

      </div>

    )
  }
};



export default Login;
