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
    loginFailed: false,
    userPENDING: false,
    mensajeError: "",
    esAdmin: false,
    goToHelp: false,
  }

  loginUser = async ({ email, password }) => {
    try {
      const response = await userServices.login({ email, password })
      console.log(response);
      const { data: { id } } = response
     
      if (response.data.status === "ACTIVE") {
        // save Id in local storage
        localStorage.setItem("userId", id);

        // console.log(`GET ID`)
        // localStorage.getItem("userId");
        // console.log(`!!!!!!!!!!!` + id)
        this.setState({ mensajeError: "" })
        if (response.data.isAdmindAccount) {
          this.setState({ esAdmin: true });
        } else {
          this.setState({ goToHome: true })
        }

      } else {
        if(response.data.status === "PENDING"){
          this.setState({ userPENDING: true, mensajeError: "Tu cuenta está en proceso de validación." })
        }
        else{
          this.setState({ userPENDING: true, mensajeError: "Tu cuenta fue bloqueada." })
        }
        
      }


    } catch (error) {
      this.setState({ loginFailed: true, mensajeError: "Tu email y password no coinciden. Intenta de nuevo." })
      console.error(`There was an error trying to log in`)
    }
  }

  mandarMail = async (status) => {
    const { compliantId } = this.props
    try {
      
        //manod mail
        await userServices.sendEmail({
          emailDestino: "viccdiaz@gmail.com",
          origen: 1
        })

      
    } catch (error) {
      console.log(error)
      console.error(`There was an error trying to update compliant status`)
    }    
  }


  render() {
    if (this.state.goToHome) {
      return <Redirect to="/home" />
    }
    if (this.state.esAdmin) {
      return <Redirect to="/admin" />
    }
    if (this.state.goToHelp) {
      return <Redirect to="/help" />
    }

    return (
      <div className="contaainer">
        <div id="Inicio" backgroud={logo}>
          <div className="logo"><img src={logo} alt={"WeRaisen"} width="200" /></div>
          <div className="eslogan">
            <strong><span className="colorfondo">
              Viajá. Conocé. Viví una experiencia única.
            </span> </strong>
          </div>
          <br></br>
          <div className="Login">
            <Formik
              initialValues={INITIAL_VALUES}
              validationSchema={LoginSchema}
              onSubmit={(values) => this.loginUser(values)}>
              <Form>

                <FieldWithError name="email" aria-label="username" className="input" autoComplete="off" />
               Email
               <FieldWithError name="password" type="password" aria-label="password" autoComplete="off" className="input" />
               Contraseña
               <p><a className="forgotPass" href={'/PasswordRecovery'}>¿Olvidaste tu contraseña?</a> </p>
               {/* <button className="primary" style={{ backgroundColor: "#484e55",  fontSize: "15px", margin: "20px 20px 0px", padding: "10px 40px", border: "none", borderRadius: "0.2rem", textAlign: "right", margin: "3%", color: "white" }} value={"Aceptar"} size="sm" onClick={() => this.mandarMail('Resuelto')}> Mandar Mail </button> */}
                <div className="right-container" style={{ padding: "0px" }}>
                  <input type="submit" className="btn-primero" value="Iniciar sesión" />



                  <p className="form-error">
                    {this.state.mensajeError}
                  </p>

                  

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

            ¿Alguna vez estuviste en una ciudad por primera vez y deseaste tener un guía amigo?
                </strong></p>
            <p>
              <strong>WeRaisen</strong> es una plataforma que utiliza la tecnología para conectarte con <strong>expertos locales.</strong></p>

            <p>Únicamente tenés que especificar a dónde querés ir, cuándo y qué querés hacer allí... </p>
            <p>Luego, sólo deberás <strong>enviar una solicitud</strong> al guía que más te guste.</p>

          </div>
          <div className="continuar"><a href="#Funcionamiento" className=""><img className="imag" src={scroll1} alt={"WER"} width="50" /> </a></div>
        </div>

        <div id="Funcionamiento">
          <h1 className="index__section-title2" color="#9CD6AE">¿<strong>Cómo funciona</strong>?</h1>
          <div className="text"> <p>
            Elegí tu guía favorito y empezá un <strong>chat privado</strong>. </p>
            <p>Recibí recomendaciones personales de tu guía desde su experiencia local y <strong>acordá un encuentro.</strong>
            </p>
            <p>
              Al finalizar el encuentro, simplemente <strong>calificá </strong>y escribí una <strong>breve reseña</strong> sobre tu guía según la calidad de la experiencia. </p>
            <p>Tu guía también te calificará.</p><p>
              De esta forma, podrás ayudar a <strong>futuros turistas</strong> a elegir la mejor opción.
                </p>
                <br></br>
                <br></br>
                <div className="continuar2"><a href="#Inicio" className=""><img className="imag" src={scroll2} alt={"WER"} width="50" /> </a></div>
                <br></br>
             
                <u><a style={{cursor:'pointer'}} onClick={() => this.setState({ goToHelp: true })}>Preguntas Frecuentes </a>
                </u>
          </div>
        </div>

      </div>

    )
  }
};



export default Login;
