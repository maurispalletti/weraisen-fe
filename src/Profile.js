import React from 'react';
import './Profile.css';

const Profile = () => (
  <div className="Profile">
    {/* <form onSubmit={this.handleSignIn.bind(this)}> */}
    <div className="profileTitle">
      ¡Hola Irina!
      </div>
    <div className="profileData">
      <form>
        <input className="profile-input" type="text" placeholder="Nombre" />
        <input className="profile-input" type="text" placeholder="Apellido" />
        <input className="profile-input" type="text" placeholder="Fecha de nacimiento" />
        <input className="profile-input" type="text" placeholder="DNI / Pasaporte / ID" />
        <input className="profile-input" type="text" placeholder="Género" />
        <input className="profile-input" type="text" placeholder="Ciudad de residencia" />
        <input className="profile-input" type="text" placeholder="Email" />
        <input className="profile-input" type="password" placeholder="Contraseña" />
        <input className="profile-input" type="password" placeholder="Repite tu contraseña" />

        <div className="guideSection">
          <div className="be-guide">
            Quiero ser guía
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
          </div>

          <input className="profile-input" type="text" placeholder="Idiomas" />
          <input className="profile-input" type="text" placeholder="Conocimientos (ej. bares, museos)" />

        </div>
        <div className="buttonsSection">
          <a href={'/home'} className="cancel-button">CANCELAR</a>
          <a href={'/home'} className="button">GUARDAR CAMBIOS</a>
        </div>
      </form>
    </div>
  </div>
);

export default Profile;
