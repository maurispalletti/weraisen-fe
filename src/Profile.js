import React, { Component } from 'react';
import './Profile.css';
import './Estilos.css';
import { Redirect } from 'react-router'
import { Formik, Form } from 'formik'
import FieldWithError from './forms/FieldWithError'
import Header from '../src/components/Header'

import { ProfileSchema } from './helpers/validators'
import userServices from './services/userServices'
import Buttom from './components/Boton.js'

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
    isGuide: false,
    knowledge: [],
    updateOk: false,
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
    birthDate,
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
          birthDate,
          gender,
        })
        const { data: { id } } = response
        console.log(id);
        this.setState({ editable: false, updateOk:true })
      } else {
        this.setState({ notLoggedInUser: true })
      }
    } catch (error) {
      this.setState({ updateFailed: true })
      console.error(`There was an error trying to update the profile`)
    }
  }

  getFormattedDate(birthDate) {
    const date = new Date(birthDate);
    const day = date.getDate()
    const month = (date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
    var year = date.getFullYear()

    return day + "/" + month + "/" + year;
  }

  async componentDidMount() {

    
    const {
      firstName,
      lastName,
      profilePicture,
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

    let isGuide = false;

    if (knowledge && knowledge.length > 0) {
      console.log('IS GUIDEEEE')
      isGuide = true;
    }
    
    const initialValues = {
      firstName,
      lastName,
      profilePicture,
      birthDate: this.getFormattedDate(birthDate),
      identification,
      gender,
      city,
      email
    }

    this.setState({ initialValues, isActiveGuide, knowledge, isGuide })
  }

  estadoGuia =  async () => {
    this.setState({ isActiveGuide: !this.state.isActiveGuide });   
    try {
      
      //cuactualizo si el ususario esta activo como guia o no
      const userId = localStorage.getItem("userId");
      if (userId) {
        await userServices.updateGuiaActivo({
          userId: userId,
          isActiveGuide: !this.state.isActiveGuide
        })}
    
  } catch (error) {
    console.log(error)
    console.error(`There was an error trying to update guide status`)
  }    
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

                  <div>
							      <div className="FotoPerfil">
								      <img src= {this.state.initialValues.profilePicture} alt="profile" style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
							     </div>
					      	</div>

                  <div className="title">
                    <FieldWithError disabled={!this.state.editable} name="firstName" placeholder="Nombre" aria-label="name" className="input" />
                  Nombre
                  </div>
                  <div className="title">
                    <FieldWithError disabled={!this.state.editable} name="lastName" placeholder="Apellido" aria-label="lastName" className="input" />
                    Apellido
                  </div>
                  <div className="title">
                    <FieldWithError disabled={true} name="birthDate" placeholder="Fecha de Nacimiento" aria-label="birthDate" className="input"/>
                    Fecha de nacimiento
                  </div>
                
                  {/* <div className="title">
                  <DropdownGender disabled={!this.state.editable} name="gender" styleName={"input"} options={genders} />
                  Género
                  </div> */}
               
                  <div className="title">
                    <FieldWithError disabled={true} name="email" placeholder="Email" aria-label="email" className="input" />
                  Email
                  </div>

                </div>
                <br></br>
                <a href="/MyReviews" className="lead" style={{cursor:'pointer', fontSize:' 16px'}} onClick={() => this.setState({ goToMyReviews: true })}>Ver valoraciones e informes</a>
              

                <div className="guideSection">
                  {this.state.knowledge && this.state.knowledge.length > 0 } 
                  <div className="be-guide" style={{ display: this.state.isGuide ? 'block' : 'none' }}>
                   Mostrarme activo 
                      <label class="switch">
                      <input type="checkbox" checked={this.state.isActiveGuide} onClick={() => this.estadoGuia()} />
                      <span class="slider round"></span>
                    </label>
                  </div>
                </div>
  
              

                <div className="buttonsSectionGuia">
                  <input type="button" className="btn-primero" style={{width: '257px'}}
                    value={this.state.isGuide ? "Actualizar mis datos de guía" : "Quiero ser guía"}
                    onClick={() => this.setState({ goToGuideProfile: true })} />
                </div>
            
                {/* <div class="btn-group" role="group">
                  <input type="button" style={{marginRight: '10px'}} className="btn-tercero" value={this.state.editable ? "Cancelar" : "Editar mis datos"}
                    onClick={() => this.toggleEditInfo()} />
                    <br></br>
                  <input type="submit" className="btn-tercero" value="Guardar" disabled={!this.state.editable}  />
                  
                </div>
                {this.state.updateOk && (
                   <p className="updateOk" >
                     ¡Tus datos se guardaron!
                   </p>
                 )} */}


                  {/* <input type="button" className="cerrarSesion" value="Cerrar sesión"
                    onClick={() => this.setState({ goToGuideProfile: true })} /> */}

                  <div className="cerrarSesion">
                    <Buttom link={'/login'} className={"botons"} name={"Cerrar sesión"} />
                  </div>


                {this.state.notLoggedInUser && (
                  <p className="form-error">Usuario no logueado.</p>
                )}
                {this.state.updateFailed && (
                  <p className="form-error">Actualización de datos falló. Intanta de nuevo.</p>
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
