import React from 'react';
import './Profile.css';
import Buttom from './Boton';


const Profile = () => (
  <div className="Profile">
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

        <Buttom link={'/guide'} className={"buttonGuia"} name={"QUIERO SER GUÍA"} />
          
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
          <Buttom link={'/home'} className={"cancel-button"} name={"CANCELAR"} />
          <Buttom link={'/home'} className={"button"} name={"GUARDAR CAMBIOS"} />
          
        </div>
        </div>
      </form>
    </div>
  </div>
);

export default Profile;
