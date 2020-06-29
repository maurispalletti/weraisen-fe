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
  languages: [],
}

class GuideProfile extends Component {
  state = {
    goToProfile: false,
    updateFailed: false,
    notLoggedInUser: false,
    knowledge: [],
  }

  updateGuide = async ({ description, languages }) => {

    try {
      const userId = localStorage.getItem("userId");

      const knowledge = this.state.knowledge

      console.log(knowledge)

      if (userId) {
        const response = await userServices.updateGuide({
          userId,
          description,
          languages,
          knowledge,
        })

        console.log(response);

        const { data: { id } } = response

        console.log(id);

        this.setState({ goToProfile: true, updateFailed: false, notLoggedInUser: false })
      } else {
        this.setState({ notLoggedInUser: true })
      }
    } catch (error) {
      this.setState({ updateFailed: true })
      console.error(`There was an error trying to update the guide`)
    }
  }

  handleCategory = (values) => {
    console.log(values)
    this.setState({ knowledge: values })
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
            initialValues={INITIAL_VALUES}
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
                  <DropdownGender name="city" styleName={"input"} options={cities} />
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

                  <DiasDisponible onCategoryChange={this.handleCategory} />

                </div>
                </div>
                <div className="LastSection">
                  <h2>Conocimientos que posees</h2>
                  <Categorias onCategoryChange={this.handleCategory} defaultSelected={this.state.knowledge}></Categorias>
                </div>
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="salidaGrupal" />
                  <label class="custom-control-label" for="salidaGrupal">Permitir salidas grupales</label>
                </div>
              </div>
              <div className="buttonsSection">
              

                <input type="submit" className="btn-primero" value="Guardar" />
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
