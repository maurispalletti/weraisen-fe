import React, { Component } from 'react';
import { Redirect } from 'react-router'
import Buttom from './components/Boton';
import avatar_1 from './avatars/avatar_1.svg';
import Categorias from './components/Categorias'
import home from './icons/home.svg';

import './GuideProfile.css';

import { Formik, Form } from 'formik'
import FieldWithError from './forms/FieldWithError'
import CheckboxGroupWithError from './forms/CheckboxGroupWithError'
import { GuideProfileSchema } from './helpers/validators'
import userServices from './services/userServices'

const languages = [
  { description: 'Español', value: 'Español' },
  { description: 'Inglés', value: 'Inglés' },
  { description: "Alemán", value: 'Alemán' },
  { description: "Italiano", value: 'Italiano' },
  { description: "Portugués", value: 'Portugués' },
  { description: "Francés", value: 'Francés' },
  { description: "Japonés", value: 'Japonés' },
  { description: "Chino", value: 'Chino' },
  { description: "Ruso", value: 'Ruso' },
  { description: "Turco", value: 'Turco' },
  { description: "Neerlandés", value: 'Neerlandés' },
  { description: "Polaco", value: 'Polaco' },
];

const knowledge = [
  { description: 'Bares', value: 'Bares' },
  { description: 'Restaurantes', value: 'Restaurantes' },
  { description: "Montaña", value: 'Montaña' },
  { description: "Museos", value: 'Museos' },
  { description: "Historia", value: 'Historia' },
  { description: "Deportes", value: 'Deportes' },
  { description: "Espectáculos", value: 'Espectáculos' },
  { description: "Fotografía", value: 'Fotografía' },
  { description: "Naturaleza", value: 'Naturaleza' },
  { description: "Arte", value: 'Arte' },
  { description: "Fiesta", value: 'Fiesta' },
];

const INITIAL_VALUES = {
  description: '',
  languages: [],
  knowledge: [],
}

class GuideProfile extends Component {
  state = {
    goToHome: false,
    updateFailed: false,
    notLoggedInUser: false,
  }

  updateGuide = async ({ description, languages, knowledge }) => {
    try {
      const userId = localStorage.getItem("userId");

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

        this.setState({ goToHome: true, updateFailed: false, notLoggedInUser: false })
      } else {
        this.setState({ notLoggedInUser: true })
      }
    } catch (error) {
      this.setState({ updateFailed: true })
      console.error(`There was an error trying to update the guide`)
    }
  }

  render() {
    if (this.state.goToHome) {
      return <Redirect to="/home" />
    }

    return (
      <div className="GuideProfile">
        <div className="Header">
          <a href={"/home"} className="HomeIcon">
            <img src={home} alt={"Home"} />
          </a>
          <div className="HeaderImage">
            <a href={"/profile"}>
              <img src={avatar_1} alt={"User"} />
            </a>
          </div>
        </div>

        <div className="Body">

          <Formik
            initialValues={INITIAL_VALUES}
            validationSchema={GuideProfileSchema}
            onSubmit={(values) => this.updateGuide(values)}>
            <Form>
              <h2>Quiero ser guía</h2>
              <div className="Section">
                <h4>Describite brevemente para que otros te conozcan: </h4>
                <FieldWithError component={'textarea'} name="description" placeholder="Ingresa tu descripción" aria-label="description" className="descripcion-input" />
                <div className="IdiomsSection">
                  <h4>Idiomas que manejas:</h4>
                  <CheckboxGroupWithError name="languages" values={languages} />
                </div>
                <div className="LastSection">
                  <h4>Conocimientos que posees:</h4>
                  <Categorias></Categorias>
                </div>
              </div>

              <div className="buttonsSection">
                {/* <input type="button" className="button" value="Cancelar" onClick={() => this.setState({ goToHome: true })} />
                <input type="submit" className="button" value="Guardar" /> */}

                <Buttom link={'/home'} className={"cancel-button"} name={"CANCELAR"} onClick={() => this.setState({ goToHome: true })} />
          <Buttom link={'/home'} className={"button"} name={"GUARDAR"} />
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
  }
};

export default GuideProfile;
