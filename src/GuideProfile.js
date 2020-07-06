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
  { value: "Córdoba", description: 'Córdoba' },
  { value: "LaPlata", description: 'La Plata' },
  { value: "Neuquén", description: 'Neuquén' },
  { value: "Mendoza", description: 'Mendoza' },
  { value: "Rosario", description: 'Rosario' }
];

const INITIAL_VALUES = {
  description: '',
  city:null,
  groupwalk: false,
  
}

class GuideProfile extends Component {
  
  state = {
    goToProfile: false,
    updateFailed: false,
    notLoggedInUser: false,
    initialValues: null,
    knowledge: [],
    availableDays: [],
    languages: [],
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
  

    updateGuide = async ({ 
      description,
      city,
      languages,
      availableDays,
      knowledge,
      groupwalk,
    }) => {
      try {
        const userId = localStorage.getItem("userId");
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
        groupwalk,
      }
  
      this.setState({ initialValues, languages, availableDays, knowledge })
  }
  
  handleCategory = (values) => {
    console.log(values)
    this.setState({ knowledge: values })
    this.setState({availableDays: values})
    this.setState({languages: values})
    
  }
  


  render() {
    if (this.state.goToProfile) {
      return <Redirect to="/Profile" />
    }

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
                  <FieldWithError component={'input'} name="description" placeholder="Ingresá una breve descripción..." aria-label="description" className="input" />
                </div>
                <div className="Seccion">
                  <h2>Cuidad de residencia</h2>
                  <DropdownGender name="city" styleName={"input"}  options={cities} />
                </div>
                <div className="Seccion">
                  <h2>Idiomas que manejás</h2>

                  <div className="container-fluid">

                    <BotonSombreado onCategoryChange={this.handleCategory} />

                  </div>
                  <FieldWithError component={'input'} name="idioma" placeholder="Otro" aria-label="idioma" className="input" />
                </div>



                <div className="Seccion">
                <h2>Días disponibles</h2>
                <div className="container-fluid">

                  <DiasDisponible onCategoryChange={this.handleCategory}/>

                </div>
                </div>
                <div className="LastSection">
                  <h2>Conocimientos que posees</h2>
                  <Categorias onCategoryChange={this.handleCategory} defaultSelected={this.state.knowledge}></Categorias>
                </div>
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="salidaGrupal" onClick={()=> this.setState({groupwalk: true}) } />
                  <label class="custom-control-label" for="salidaGrupal">Permitir salidas grupales</label>
                </div>
              </div>
              <div className="buttonsSection">
              

                <input type="submit" className="btn-primero" value="Guardar"  onClick={()=> this.updateGuide()}/>
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
};

export default GuideProfile;
