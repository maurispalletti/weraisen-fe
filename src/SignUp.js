import React from 'react';
import './SignUp.css';

const Profile = () => (
  <div className="SignUp">
    <form>
      {/* <form onSubmit={this.handleSignIn.bind(this)}> */}
      <div className="signUpTitle">
        CREA TU CUENTA
      </div>
      <input className="input" type="text" placeholder="Nombre" />
      <input className="input" type="text" placeholder="Apellido" />
      <input className="input" type="text" placeholder="Fecha de nacimiento" />
      <input className="input" type="text" placeholder="DNI / Pasaporte / ID" />

      <select className="Dropdown-g">
          <option value="" selected disabled hidden>Selecciona un género...</option>
          <option value={1}>Femenino</option>
          <option value={2}>Masculino</option>
          <option value={3}>Otro</option>
        </select>

      <input className="input" type="text" placeholder="Ciudad de residencia" />
      <input className="input" type="text" placeholder="Email" />
      <input className="input" type="password" placeholder="Contraseña" />
      <input className="input" type="password" placeholder="Repite tu contraseña" />
      <a href={'/home'} className="create-account-button">CREAR CUENTA</a>
    </form>
  </div>
);

export default Profile;
