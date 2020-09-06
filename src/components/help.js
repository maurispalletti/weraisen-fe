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
            <h1 style={{color:'#F9AA68'}}>¿Cómo creo una cuenta en WeRaisen?</h1>
            <br></br>
          </div>
        <div>
           <h2 style ={{color:"#696970"}} align="left">Para crear tu cuenta de WeRaisen deberás presionar "Registrate ahora” en la pantalla de inicio de sesión. Allí te redireccionará a la página de creación de usuario, en la cual deberás ingresar los siguientes datos personales:
               <ul align="center"> 
                 <li align= "left"> Nombre </li>
                 <li  align= "left"> Apellido </li>
                 <li  align= "left"> Fecha de nacimiento: deberás seleccionarlo de un calendario. </li>
                 <li  align= "left"> Género: deberás elegir una de las opciones. </li>
                 <li  align= "left"> Email: allí deberás ingresar un mail, que luego es el que se va a utiliar como usuario para iniciar sesión. También recibirás notificaciones allí. </li>
                 <li  align= "left"> Contraseña.</li>
                 <li  align= "left"> Foto de DNI del frente y del dorso para validar identidad: Debe ser clara con buena iluminación para que podamos validarte correctamente.</li>
                 <li  align= "left"> Foto de perfil: Esta foto es la que será visible para el resto de los usuarios.</li>
               </ul>  
            Una vez ingresados los datos mencionados ateriormente, evaluaremos tus datos y te enviaremos correo al email ingresado informando si pudimos validar tu identidad y, por lo tanto, dado de alta en nuestra plataforma, o caso contrario, deberás volver a intentarlo.
          </h2>
          </div>
          <br></br>
          <br></br>
          <div>
            <h1 style={{color:'#F9AA68'}}>¿Cómo busco un guía e inicio un encuentro?</h1>
            <br></br>
          </div>
        <div>
           <h2 style ={{color:"#696970"}} align="left"> Luego de iniciar sesión, deberas dirigirte a la opción "Buscar guía" del menú principal. 
           Allí deberás elegir la ciudad en la que te encuentras, la fecha y categorías que deseas. Además, tendrás la posibilidad de acceder a otros filtros, que no son obligatorios. Al presionar "Ver más filtros" podrás indicar género, edad, idiomas y especificar si estás dispuesto/a a una salida grupal. 
           A continuación, podrás visualizar una listado de guías acordes a tu necesidades, con los datos y valoración del mismo. En caso de que quieras ver con detalle más datos, deberás presionar "Ver perfil".
           Una vez que encuentres a tu guía ideal, deberás presionar el botón para enviarle una solicitud.
           Cuando el guía acepta tu solicitud, pueden empezar a comunicarse mediante un chat para acordar detalles del encuentro.  
           </h2>
          </div>
          <br></br>
          <br></br>
          <div>
            <h1 style={{color:'#F9AA68'}}>¿Cómo convertirme en guía?</h1>
            <br></br>
          </div>
        <div>
           <h2 style ={{color:"#696970"}} align="left"> Una vez que iniciaste sesión, tendrás en tu perfil la opción para activarte como guía.
            Esto podes realizarlo al presionar el botón “Quiero ser guía”. Al presionar dicho botón, te redireccionará a la pantalla de perfil del guía, en la cual se deben registrar datos exclusivos del rol Guía. Estos datos son:
            <ul align="center"> 
                 <li align= "left">Descripción: Deberás ingresar una breve descripción personal para que los turistas te conozcan</li>
                 <li  align= "left"> Ciudad de residencia: Deberás seleccionar la ciudad en la que te desempeñarás como guía </li>
                 <li  align= "left"> Idiomas: Deberás seleccionar los idiomas que tengas conocimiento</li>
                 <li  align= "left"> Días disponibles: Deberás seleccionar qué días de la semana estás disponible para llevar a cabo un encuentro. </li>
                 <li  align= "left"> Categorías de conocimiento: Deberás seleccionar al menos una categoría de conocimiento que poseas. </li>
                 <li  align= "left"> Opción de salida grupal: Esta opción está disponible para que permitas o no, guiar a más de un turista en un mismo encuentro. </li>
                
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
           <h2 style ={{color:"#696970"}} align="left"> Si encontrás que el guía o turista es irrespetuoso, perfil falso o envía contenidos de índole sexual, podrás 
           ayudarnos a hacer nuestra comundiad más segura, realizando una denuncia. Allí deberás explicar el motivo y realizar una descripción de lo sucedido.
           Posteriormente, nos comunicaremos con vos para tomar una decisión.   
           </h2>
          </div>
          <br></br>
          <br></br>
          <div>
            <h1 style={{color:'#F9AA68'}}>¿Cómo registro una valoración?</h1>
            <br></br>
          </div>
        <div>
        <a align="left"><h2 style ={{color:"#696970"}} align="left"> Una vez finalizado el encuentro, recibirás una notificación para dejar una valoración al turista o guía. Esta pantalla consistirá en primer lugar, una puntuación del 1 al 5, siendo 1 la peor valoración y el 5 la mejor. Luego, podrás agregar una reseña opinando sobre el guía o turista.   
           </h2> </a>
          </div>
          <br></br>
          <br></br>
          <div>
            <h1 style={{color:'#F9AA68'}}>¿Cómo contacto al equipo de WeRaisen ?</h1>
            <br></br>
          </div>
        <div>
           <a align="left"><h2 style ={{color:"#696970", align:"left"}} > Podés contactar al equipo de WeRaisen al email: weraisen@gmail.com.   
           </h2> </a>
          </div>
         <br></br>
         <br></br>
         <input type="button" className="btn-primero" value="Volver" onClick={() => this.setState({ goToLogin: true })} />
         <br></br>
        </div>
        
    )
    }
}
    
    
export default Help;