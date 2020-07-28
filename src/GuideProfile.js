import React, { Component } from 'react';
import { Redirect } from 'react-router'
import Header from '../src/components/Header'
import BotonSombreado from './components/Boton_Sombreado'
import DiasDisponible from './components/Dias_Disponible'
import Categorias from './components/Categorias.js'
import './GuideProfile.css';

import { Formik, Form } from 'formik'
import FieldWithError from './forms/FieldWithError'
import DropdownGender from './forms/DropdownGender'
import { GuideProfileSchema } from './helpers/validators'
import userServices from './services/userServices'

const cities = [
  { value: "BuenosAires", description: 'Buenos Aires' },
  { value: "Cordoba", description: 'Córdoba' },
  { value: "LaPlata", description: 'La Plata' },
  { value: "Neuquen", description: 'Neuquén' },
  { value: "Mendoza", description: 'Mendoza' },
  { value: "Rosario", description: 'Rosario' },
  { value: "Mardel", description: 'Mar del Plata' }
];

class GuideProfile extends Component {

  state = {
    goToProfile: false,
    updateFailed: false,
    notLoggedInUser: false,
    initialValues: null,
    knowledge: [],
    availableDays: [],
    languages: [],
    groupwalk: false,
  }

  getProfile = async () => {
    try {
      const userId = localStorage.getItem("userId");
      console.log('userId' + userId)
      if (userId) {
        const response = await userServices.getProfile(userId)
        console.log(response.data)
        return response.data;

      } else {
        this.setState({ notLoggedInUser: true })
      }
    } catch (error) {
      console.error(`There was an error trying to get the profile`)
    }
  }


  updateGuide = async ({ description, city }) => {
    console.log('GROUPWALK'+ this.state.groupwalk)
    try {

      const userId = localStorage.getItem("userId");

      const knowledge = this.state.knowledge
      const languages = this.state.languages
      const availableDays = this.state.availableDays
      const groupwalk = this.state.groupwalk

      if (userId) {
        const response = await userServices.updateGuide({
          userId,
          description,
          city,
          languages,
          availableDays,
          knowledge,
          groupwalk,
        })
        console.log(response);
        const { data: { id } } = response
        console.log(id);
      this.setState({goToProfile:true})
      } else {
        this.setState({ notLoggedInUser: true })
      }
    } catch (error) {
      this.setState({ updateFailed: true })
      console.error(`There was an error trying to update the guide profile`)
    }
  }

  async componentDidMount() {
    const {
      description,
      city,
      languages,
      availableDays,
      knowledge,
      groupwalk,
    } = await this.getProfile()

    const initialValues = {
      description,
      city,
    }
    console.log('+initial values' + this.initialValues)
    this.setState({ groupwalk, initialValues, languages, availableDays, knowledge })
    console.log(`groupwalk`)
    console.log(groupwalk)
  }

  handleCategory = (values) => {
    console.log(values)
    this.setState({knowledge: values })
  }

  handleLanguages = (values) => {
    console.log(values)
    this.setState({ languages: values })
  }

  handleAvailableDays = (values) => {
    console.log(values)
    this.setState({ availableDays: values })
  }


  render() {
    if (this.state.goToProfile) {
      return <Redirect to="/Profile" />
    }
    if (this.state.initialValues) {
      return (
        <div className="GuideProfile">

          <Header></Header>

          <div className="BodyGuideP">

            <Formik
              initialValues={this.state.initialValues}
              validationSchema={GuideProfileSchema}
              onSubmit={(values) => this.updateGuide(values)}>
              <Form>
                <div className="Section">
                  <div className="Seccion">
                    <h2>¡Describite para que otros te conozcan! </h2>
                    <FieldWithError component={'input'} name="description" placeholder={"Ingresá una breve descripción..."} aria-label="description" className="input" />
                  </div>
                  <div className="Seccion">
                    <h2>Localidad de residencia</h2>
                    <DropdownGender name="city" styleName={"input"} options={cities} />
                  </div>
                  <div className="Seccion">
                    <h2>Idiomas que manejás</h2>
                    <div className="container-fluid">
                      <BotonSombreado onCategoryChange={this.handleLanguages} defaultSelected={this.state.languages}/>
                    </div>
                  </div>
                  <div className="Seccion">
                    <h2>Días disponibles</h2>
                    <div className="container-fluid">
                      <DiasDisponible onCategoryChange={this.handleAvailableDays} defaultSelected={this.state.availableDays}/>
                    </div>
                  </div>
                  <div className="LastSection">
                    <h2>Conocimientos que posees</h2>
                    <Categorias onCategoryChange={this.handleCategory} defaultSelected={this.state.knowledge}></Categorias>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="salidaGrupal" checked={this.state.groupwalk} onChange={() => this.setState({ groupwalk: !this.state.groupwalk })} />
                    <label class="custom-control-label" for="salidaGrupal">Permitir salidas grupales</label>
                  </div>
                  
                </div>



              
                <div className="buttonsSection">
                  <input type="submit" className="btn-primero" value="Guardar"  />
                  <br></br><br></br>
                  <input type="button" className="btn-primero" value="Cancelar" onClick={() => this.setState({ goToProfile: true })} />
                </div>
                {this.state.notLoggedInUser && (
                  <p className="form-error">Usuario no logueado.</p>
                )}
                {this.state.updateFailed && (
                  <p className="form-error">Actualización de datos de guía falló. Intenta nuevamente.</p>
                )}
              </Form>
            </Formik>
          </div>
        </div>
      );
    }
    return null;
  }
};
export default GuideProfile;
