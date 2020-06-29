import React, { Component } from 'react';
import './Profile.css';
import './Estilos.css';
import { Redirect } from 'react-router'
import { Formik, Form } from 'formik'
import FieldWithError from './forms/FieldWithError'
// import CheckboxGroupWithError from './forms/CheckboxGroupWithError'
import Header from '../src/components/Header'

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
    goToMyReviews: false,
    initialValues: null,
    isActiveGuide: false,
    knowledge: [],
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

  updateProfile = async ({ //agregar cambios para que se modifique la fecha de nacimiento, tambien en el be.
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
      birthDate,
      identification,
      gender,
      city,
      email,
      isActiveGuide,
      knowledge,
    } = await this.getProfile()

    console.log(`isActiveGuide`)
    console.log(isActiveGuide)

    console.log(`knowledge`)
    console.log(knowledge)

    const initialValues = {
      firstName,
      lastName,
      birthDate,
      identification,
      gender,
      city,
      email
    }

    this.setState({ initialValues, isActiveGuide, knowledge })
  }
  estadoGuia = () => {
    this.setState({ isActiveGuide: !this.state.isActiveGuide });   
  }

 
  render() {
    if (this.state.goToHome) {
      return <Redirect to="/home" />
    }
    if (this.state.goToGuideProfile) {
      return <Redirect to="/guide" />
    }
    if (this.state.goToMyReviews) {
      return <Redirect to="/MyReviews" />
    }

    if (this.state.initialValues) {
      return (
        <div className="Profile" >
     <Header></Header>
          <div className="BodyProfile" style={{ marginTop: '15px', marginBottom: '15px' }}>
            <Formik
              // setear initial values con el did mount o will mount llamando al get
              initialValues={this.state.initialValues}
              validationSchema={ProfileSchema}
              onSubmit={(values) => this.updateProfile(values)}>

              <Form>
                <div className="profileData container-fluid">
                  <h2>¡Hola, {this.state.initialValues.firstName}!</h2>

                  <div className="title">
                    <FieldWithError disabled={!this.state.editable} name="firstName" placeholder="Nombre" aria-label="name" className="input" />
                  Nombre
                  </div>
                  <div className="title">
                    <FieldWithError disabled={!this.state.editable} name="lastName" placeholder="Apellido" aria-label="lastName" className="input" />
                    Apellido
                  </div>
                  <div className="title">
                    <FieldWithError disabled={!this.state.editable} name="birthDate" placeholder="Fecha de Nacimiento" aria-label="birthDate" className="input" />
                    Fecha de nacimiento
                  </div>
                
                  <div className="title">
                  <DropdownGender disabled={!this.state.editable} name="gender" styleName={"input"} options={genders} />
                  Género
                  </div>
               
                  <div className="title">
                    <FieldWithError disabled={!this.state.editable} name="email" placeholder="Email" aria-label="email" className="input" />
                  Email
                  </div>

                </div>
                <br></br>
                <a href="/MyReviews" className="lead" style={{cursor:'pointer', fontSize:' 16px'}} onClick={() => this.setState({ goToMyReviews: true })}>Ver valoraciones</a>
              

                <div className="guideSection">
                  {this.state.knowledge && this.state.knowledge.length > 0 } 
                  <div className="be-guide">
                   Mostrarme activo 
                      <label class="switch">
                      <input type="checkbox" checked={this.state.isActiveGuide} onClick={() => this.estadoGuia()} />
                      <span class="slider round"></span>
                    </label>
                  </div>
                </div>
                <br></br>
              

                <div className="buttonsSectionGuia">
                  <input type="button" className="btn-primero"
                    value={this.state.isActiveGuide ? "Actualizar mis datos de guía" : "Quiero ser guía"}
                    onClick={() => this.setState({ goToGuideProfile: true })} />
                </div>
                <br></br>
                <div class="btn-group" role="group">
                  <input type="button" className="btn-tercero" value={this.state.editable ? "Cancelar" : "Editar mis datos"}
                    onClick={() => this.toggleEditInfo()} />
                    <br></br>
                  <input type="button" className="btn-tercero" value="Guardar" disabled={!this.state.editable} />
                </div>


                <div className="cerrarSesionSection">

                  {/* <input type="button" className="cerrarSesion" value="Cerrar sesión"
                    onClick={() => this.setState({ goToGuideProfile: true })} /> */}

                  <div className="cerrarSesion">
                    <Buttom link={'/login'} className={"botons"} name={"Cerrar sesión"} />
                  </div>

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

        </div>
      );
    } else {
      return null
    }
  }
};

export default Profile;
