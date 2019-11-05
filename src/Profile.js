import React, { Component } from 'react';
import './Profile.css';

import avatar_1 from './avatars/avatar_1.svg';
import home from './icons/home.svg';

import { Redirect } from 'react-router'
import { Formik, Form } from 'formik'
import FieldWithError from './forms/FieldWithError'
// import CheckboxGroupWithError from './forms/CheckboxGroupWithError'

import { ProfileSchema } from './helpers/validators'
import userServices from './services/userServices'

import Buttom from './components/Boton.js'


import DropdownGender from './forms/DropdownGender'

const genders = [
  {
    value: "Femenino",
    description: 'Femenino'
  },
  {
    value: "Masculino",
    description: 'Masculino'
  },
  {
    value: "Otro",
    description: 'Otro'
  },
]

class Profile extends Component {

  state = {
    goToHome: false,
    updateFailed: false,
    notLoggedInUser: false,
    editable: false,
    goToGuideProfile: false,
    initialValues: null,
  }

  // AGREGAR BOTON DE EDIT PARA PODER EDITAR INFO 
  toggleEditInfo = () => {
    this.setState({ editable: !this.state.editable });
  }

  getProfile = async () => {
    try {
      const userId = localStorage.getItem("userId");
      if (userId) {
        const response = await userServices.getProfile(userId)

        return response.data;

      } else {
        this.setState({ notLoggedInUser: true })
      }
    } catch (error) {
      console.error(`There was an error trying to get the profile`)
    }
  }

  updateProfile = async ({
    firstName,
    lastName,
    identification,
    age,
    city,
    gender,
  }) => {
    try {
      const userId = localStorage.getItem("userId");
      if (userId) {
        const response = await userServices.updateProfile({
          userId,
          firstName,
          lastName,
          identification,
          age,
          city,
          gender,
        })
        console.log(response);
        const { data: { id } } = response
        console.log(id);
        this.setState({ editable: false })
      } else {
        this.setState({ notLoggedInUser: true })
      }
    } catch (error) {
      this.setState({ updateFailed: true })
      console.error(`There was an error trying to update the profile`)
    }
  }

  async componentDidMount() {
    const {
      firstName,
      lastName,
      age,
      identification,
      gender,
      city,
      email
    } = await this.getProfile()

    const initialValues = {
      firstName,
      lastName,
      age,
      identification,
      gender,
      city,
      email
    }

    this.setState({ initialValues })
  }

  render() {
    if (this.state.goToHome) {
      return <Redirect to="/home" />
    }
    if (this.state.goToGuideProfile) {
      return <Redirect to="/guide" />
    }

    if (this.state.initialValues) {
      return (
        <div className="Profile">
          {/* <div className="Header">
            <a href={"/home"} className="HomeIcon">
              <img src={home} alt={"Home"} />
            </a>
            <div className="HeaderImage">
              <img src={avatar_1} alt={"User"} />
            </div>
          </div> */}

          <div className="Header">
            <a href={"/home"} className="HomeIconNew">
              <img src={home} alt={"Home"} />
            </a>
            <div className="HeaderText">
              <a href={"/matches"} className={"HeaderTextLink"}>
                <div>Mis Encuentros</div>
              </a>
              <a href={"/profile"} className={"HeaderTextLink"}>
                <div>Mi perfil</div>
              </a>
            </div>
          </div>

          <div className="Body">
            <Formik
              // setear initial values con el did mount o will mount llamando al get
              initialValues={this.state.initialValues}
              validationSchema={ProfileSchema}
              onSubmit={(values) => this.updateProfile(values)}>
              <Form>
                <div className="profileData">
                  <h2>Hola {this.state.initialValues.firstName}!</h2>
                  <FieldWithError disabled={!this.state.editable} name="firstName" placeholder="Nombre" aria-label="name" className="profile-input" />
                  <FieldWithError disabled={!this.state.editable} name="lastName" placeholder="Apellido" aria-label="lastName" className="profile-input" />
                  <FieldWithError disabled={!this.state.editable} name="age" placeholder="Edad" aria-label="age" className="profile-input" />
                  <FieldWithError disabled={!this.state.editable} name="identification" placeholder="DNI / Pasaporte / ID" aria-label="identification" className="profile-input" />
                  <DropdownGender disabled={!this.state.editable} name="gender" styleName={"Dropdown-g"} options={genders} />
                  <FieldWithError disabled={!this.state.editable} name="city" placeholder="Ciudad de residencia" aria-label="city" className="profile-input" />
                  <FieldWithError disabled={!this.state.editable} name="email" placeholder="Email" aria-label="email" className="profile-input" />
                </div>

                <div className="guideSection">
                  <div className="be-guide">
                    Mostrarme activo:
          <label class="switch">
                      <input type="checkbox" disabled={!this.state.editable} />
                      <span class="slider round"></span>
                    </label>
                  </div>
                </div>

                <div className="buttonsSectionGuia">
                  <input type="button" className="buttonGuia" value="Quiero ser guía"
                    onClick={() => this.setState({ goToGuideProfile: true })} />
                </div>

                <div className="buttonsSection">
                  <input type="button" className="buttonLeft" value={this.state.editable ? "Cancelar" : "Editar"}
                    onClick={() => this.toggleEditInfo()} />
                  <input type="submit" className="buttonRight" value="Guardar" disabled={!this.state.editable} />
                </div>

                {this.state.notLoggedInUser && (
                  <p className="form-error">Usuario no logueado.</p>
                )}
                {this.state.updateFailed && (
                  <p className="form-error">Actualización de datos de guía falló. Intanta de nuevo.</p>
                )}
              </Form>
            </Formik>
          </div>

          <div className="cerrarSesion">
            <Buttom link={'/login'} className={"botons"} name={"Cerrar sesión"} />


          </div>
        </div>
      );
    } else {
      return null
    }
  }
};

export default Profile;
