import React, { Component } from 'react'
import logo from '../icons/WER-NARANJA.png';

import { Redirect } from 'react-router'



class Help extends Component {
    state = {
        goToLogin: false,
    }
    render() {
        if (this.state.goToLogin) {
          return <Redirect to="/login" />
        }
    return (
        <div className="contaainer">
         
          <div className="logo"><img src={logo} alt={"WeRaisen"} width="300" style={{paddingTop:'30px'}} /></div>
          <div className="eslogan"></div>
          <br>
          </br>
          <div>
            <h1 style={{color:'#F9AA68'}}>¿Cómo crear una cuenta en WeRaisen?</h1>
            <br></br>
          </div>
        <div>
           <h2 style ={{color:"#696970"}} align="left">Para crear tu cuenta de We Raisen debes hacer click en "Regístrate ahora” en la pantalla “Login” para poder acceder a la página de creación de usuario, de ahora en más “Signup”, en la cual se deben ingresar los siguientes datos personales:
               <ul align="center"> 
                 <li align= "left"> Nombre </li>
                 <li  align= "left"> Apellido </li>
                 <li  align= "left">  Fecha de nacimiento: se selecciona en un calendario. </li>
                 <li  align= "left"> Género: se elige entre las opciones. </li>
                 <li  align= "left"> Email: es el que se va a usar como usuario para ingresar luego. </li>
                 <li  align= "left"> Contraseña.</li>
                 <li  align= "left"> Foto de DNI del frente y del dorso para validar identidad.</li>
                 <li  align= "left"> Foto de perfil que se mostrará en el sistema.</li>
               </ul>  
            Una vez ingresados, los administradores de la plataforma evaluarán tus datos y te enviarán en las proximas 24 horas un correo confirmando si fuiste dado o no de alta en la plataforma.
          </h2>
          </div>
          <br></br>
          <br></br>
          <div>
            <h1 style={{color:'#F9AA68'}}>¿Cómo buscar un guía e iniciar un encuentro?</h1>
            <br></br>
          </div>
        <div>
           <h2 style ={{color:"#696970"}} align="left"> Una vez dentro de la plataforma, dirígete a la opción "Buscar guía" del emnú principal
           allí deberás elegir la ciudad en la que te encuentras, la fecha, categorías que deseas, género, edad, idiomas y especificar si estas dispuesto/a a una salida grupal. 
           A continuación se desplegará una listado de guías acordes a tu necesidades, deberás seleccionar el que creas más conveniente y enviarle la solicitud. 
           Cuando el guía acepta tu solicitud, pueden empezar a comunicarse mediante un chat para acordar con más detalle el encuentro.  
           </h2>
          </div>
          <br></br>
          <br></br>
          <div>
            <h1 style={{color:'#F9AA68'}}>¿Cómo ser guía?</h1>
            <br></br>
          </div>
        <div>
           <h2 style ={{color:"#696970"}} align="left"> El usuario Turista, tendrá en su “Perfil” tendrá la opción para activarse como Guía.
            Esto se puede realizar presionando el botón “Quiero ser guía”. Al presionar este botón, se visualizará la pantalla de “Perfil de Guía”, en la cual se deben registrar datos exclusivos del modo Guía. Estos datos son:
            <ul align="center"> 
                 <li align= "left">Descripción: Se debe ingresar una breve descripción a modo de resumen para que los Turistas te conozcan</li>
                 <li  align= "left"> Ciudad de residencia: Esta ciudad será donde se lleven a cabo los encuentros. </li>
                 <li  align= "left"> Idiomas: Se debe elegir los idiomas que se conocen. </li>
                 <li  align= "left"> Días disponibles: Se debe seleccionar qué días de la semana el guía puede llevar a cabo los encuentros. </li>
                 <li  align= "left"> Categorías de conocimiento: Se debe seleccionar al menos una categoría de conocimiento, de las mencionadas anteriormente. </li>
                 <li  align= "left"> Opción de salida grupal: Se posee la opción para que los encuentros sean con más de un Turista. Por defecto, el encuentro se realiza con un solo Turista.</li>
                
            </ul>
           </h2>
          </div>
          <br></br>
          <br></br>
          <div>
            <h1 style={{color:'#F9AA68'}}>¿Qué hago si detecto anomalías en el guía/turista seleccionado?</h1>
            <br></br>
          </div>
        <div>
           <h2 style ={{color:"#696970"}} align="left"> Si encuentras que el guía o turista es irrespetuoso, perfil falso o envía contenidos de indole sexual, podrás 
           ayudarnos a hacer nuestra comundiad más segura, realizando una denuncia. Donde deberás explicar el motivo y realizar una descripción de lo sucedido.
           Posteriormente, un administrador de We Raisen se comunicará contigo para tomar una decisión.   
           </h2>
          </div>
          <br></br>
          <br></br>
          <div>
            <h1 style={{color:'#F9AA68'}}>¿Cómo registrar una valoración?</h1>
            <br></br>
          </div>
        <div>
        <a align="left"><h2 style ={{color:"#696970"}} align="left"> Una vez finalizado el encuentro, recibirás una notificación para que dejar una valoración al turista o guía. Esta pantalla consistirá en primer lugar, una puntuación del 1 al 5, siendo 1 la peor valoración y el 5 la mejor. Luego, podrás agregar una reseña opinando sobre el guía o turista.   
           </h2> </a>
          </div>
          <br></br>
          <br></br>
          <div>
            <h1 style={{color:'#F9AA68'}}>¿Cómo contactar al equipo de We Raisen ?</h1>
            <br></br>
          </div>
        <div>
           <a align="left"><h2 style ={{color:"#696970", align:"left"}} > Puedes contactar al equipo de We Raisen al email: weraisen@gmail.com.   
           </h2> </a>
          </div>
         <br></br>
         <br></br>
         <input type="button" className="btn-primero" value="Volver Login" onClick={() => this.setState({ goToLogin: true })} />
         <br></br>
        </div>
        
    )
    }
}
    
    
export default Help;