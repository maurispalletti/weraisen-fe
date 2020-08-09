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
  { value: "Buenos Aires", description: 'Buenos Aires' },
  { value: "Bariloche", description: 'Bariloche' },
  { value: "Comodoro Rivadavia", description: 'Comodoro Rivadavia' },
  { value: "Córdoba", description: 'Córdoba' },
  { value: "Corrientes", description: 'Corrientes' },
  { value: "Cosquín", description: 'Cosquín' },
  { value: "El Bolsón", description: 'El Bolsón' },
  { value: "El Chaltén", description: 'El Chaltén' },
  { value: "Esquel", description: 'Esquel' },
  { value: "Formosa", description: 'Formosa' },
  { value: "General Pico", description: 'General Pico' },
  { value: "Gualeguaychú", description: 'Gualeguaychú' },
  { value: "Humauaca", description: 'Humauaca' },
  { value: "La Cumbrecita", description: 'La Cumbrecita' },
  { value: "LaPlata", description: 'La Plata' },
  { value: "La Rioja", description: 'La Rioja' },
  { value: "Mardel", description: 'Mar del Plata' },
  { value: "Mendoza", description: 'Mendoza' },
  { value: "Merlo", description: 'Merlo' },
  { value: "Neuquén", description: 'Neuquén' },
  { value: "Mina Clavero", description: 'Mina Clavero' },
  { value: "Monte Hermoso", description: 'Monte Hermoso' },
  { value: "Paraná", description: 'Paraná' },
  { value: "Perito Moreno", description: 'Perito Moreno' },
  { value: "Pinamar", description: 'Pinamar' },
  { value: "Posadas", description: 'Posadas' },
  { value: "Puerto Iguazú", description: 'Puerto Iguazú' },
  { value: "Puerto Madryn", description: 'Puerto Madryn' },
  { value: "Resistencia", description: 'Resistencia' },
  { value: "Río Gallegos", description: 'Río Gallegos' },
  { value: "Río Grande", description: 'Río Grande' },
  { value: "Rosario", description: 'Rosario' },
  { value: "Salta", description: 'Salta' },
  { value: "San Fernando del Valle de Catamarca", description: 'San Fernando del Valle de Catamarca' },
  { value: "San Juan", description: 'San Juan' },
  { value: "San Luis", description: 'San Luis' },
  { value: "San Martín de los Andes", description: 'San Martín de los Andes' },
  { value: "San Miguel de Tucumán", description: 'San Miguel de Tucumán' },
  { value: "San Rafael", description: 'San Rafael' },
  { value: "San Salvador de Jujuy", description: 'San Salvador de Jujuy' },
  { value: "Santa Fe", description: 'Santa Fe' },
  { value: "Santa Rosa", description: 'Santa Rosa' },
  { value: "Santiago Del Estero", description: 'Santiago Del Estero' },
  { value: "Termas de Río Hondo", description: 'Termas de Río Hondo' },
  { value: "Tilcara", description: 'Tilcara' },
  { value: "Trelew", description: 'Trelew' },
  { value: "Ushuaia", description: 'Ushuaia' },
  { value: "Villa Carlos Paz", description: 'Villa Carlos Paz' },
  { value: "Villa María", description: 'Villa María' },

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
