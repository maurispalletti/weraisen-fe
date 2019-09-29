import React from 'react';
import './Profile.css';
import Header from './components/header/header.js'
import Footer from "./components/footer/footer"


const Profile = () => (
 

  <div className="Profile">
     <div className ="Header">
  <Header></Header>
  </div>
    {/* <form onSubmit={this.handleSignIn.bind(this)}> */}
    <div className="profileTitle">
      ¡Hola Irina!
      </div>
    <div className="profileData">
      <form>
        {/* Datos a modo de consulta: no debería poder modificarlos */}
        <input className="profile-input" type="text" placeholder="Nombre" />
        <input className="profile-input" type="text" placeholder="Apellido" />
        <input className="profile-input" type="text" placeholder="Fecha de nacimiento" />
        <input className="profile-input" type="text" placeholder="DNI / Pasaporte / ID" />
        <input className="profile-input" type="text" placeholder="Género" />
        <input className="profile-input" type="text" placeholder="Ciudad de residencia" />

        {/* Datos que puede modificar */}
        <input className="profile-input" type="text" placeholder="Email" />
       
        <div className="buttonsSectionGuia">
          <a href={'/serguia'} className="buttonGuia" >QUIERO SER GUÍA</a>
          </div>

          <div className="guideSection">
          <div className="be-guide">
            Mostrarme activo:
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
          </div>
        
          <div className="buttonsSection">
          <a href={'/home'} className="cancel-button">CANCELAR</a>
          <a href={'/home'} className="button">GUARDAR CAMBIOS</a>
        </div>
        </div>
      </form>
    </div>
    <Footer/>
  </div>
);

export default Profile;
