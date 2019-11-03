import React, { Component } from 'react';
import './Home.css';
import avatar_1 from './avatars/avatar_1.svg';
import home from './icons/home.svg'
import Autocomplete from './components/Autocomplete.js'
import Desplegable from './components/Desplegable.js'
import Categorias from './components/Categorias.js'
import { Redirect } from 'react-router'
import { Formik, Form } from 'formik'
import FieldWithError from './forms/FieldWithError'
import DropdownGender from './forms/DropdownGender'

const genders = [
  {
    value: "Cualquiera",
    description: 'Cualquiera'
  },
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

const languages = ['Castellano', 'Inglés', 'Alemán', 'Italiano', 'Francés', 'Portugués', 'Japonés', 'Chino', 'Ruso', 'Turco', 'Neerlandés', 'Polaco']

const cities = ['Cordoba', 'Buenos Aires', 'Rosario', 'Villa Carlos Paz', 'Mendoza', 'Hernando', 'Bariloche', 'General Pico', 'Salta', 'Neuquen', 'Posadas', 'La Plata', 'Villa General Belgrano', 'Miramar', 'Puerto Madryn']

const INITIAL_VALUES = {
  fromAge: '',
  toAge: ''
}

class Home extends Component {
  state = {
    goToResults: false,
    searchFailed: false,
    ageValidationFailed: false,
    notLoggedInUser: false,
    goToProfile: false,
  }

  searchGuides = async ({ fromAge, toAge, gender }) => {

    const filters = { fromAge, toAge, gender }

    if (parseFloat(fromAge) > parseFloat(toAge)) {
      this.setState({ ageValidationFailed: true })
    } else {

      const city = localStorage.getItem("filter_city");
      const language = localStorage.getItem("filter_language");
      const knowledge = localStorage.getItem("filter_knowledge");

      filters[`city`] = city;
      filters[`language`] = language;
      filters[`knowledge`] = knowledge;

      const filtersString = JSON.stringify(filters);
      console.log(filtersString);
      localStorage.setItem(`filters`, filtersString);

      localStorage.removeItem("filter_city");
      localStorage.removeItem("filter_language");
      localStorage.removeItem("filter_knowledge");

      this.setState({ goToResults: true })
    }
  }

  render() {
    if (this.state.goToResults) {
      return <Redirect to="/results" />
    }
    if (this.state.goToProfile) {
      return <Redirect to="/profile" />
    }

    return (
      <div className="Home">
        <div className="Header">
          <button className="HomeIcon" onClick={() => this.setState({ goToProfile: true })}>
            <img src={home} alt={"Home"} />
          </button>
          <div className="HeaderImage">
            <a href={"/profile"}>
              <img src={avatar_1} alt={"User"} />
            </a>
          </div>
        </div>
        <div className="Body">
          <Formik
            initialValues={INITIAL_VALUES}
            onSubmit={(filters) => this.searchGuides(filters)}>
            <Form>
              <h2>¡Planifica tu recorrido!</h2>
              <div className="Section">
                <h4>¿A dónde querés ir?</h4>
                <h5>Ingresá las primeras letras de la ciudad...</h5>
                <Autocomplete name={'city'} items={cities}></Autocomplete>
              </div>
              <div className="Section">
                <h4>Elegí el idioma de tu guía:</h4>
                <h5>Ingresá las primeras letras del idioma...</h5>
                <Autocomplete name={'language'} items={languages}></Autocomplete>
              </div>
              <div className="Section">
                <h4>¿Cuándo?</h4>
                <Desplegable />
              </div>
              <div className="Section">
                <h4>Género de tu guía</h4>
                <DropdownGender name="gender" styleName={"Dropdown-home"} options={genders} />
              </div>
              <div className="Section">
                <h4>Rango de edad</h4>
                <FieldWithError name="fromAge" placeholder="Desde" aria-label="description" className="TextBox-input" />
                <FieldWithError name="toAge" placeholder="Hasta" aria-label="description" className="TextBox-input" />
                {this.state.ageValidationFailed && (
                  <p className="form-error">La edad en el campo 'Desde' debe ser menor a la edad en el campo 'Hasta'.</p>
                )}
              </div>

              <div className="LastSection">
              <h4>Por último, seleccioná las categorías que desees:</h4>
        
              <Categorias></Categorias>
                {/* <h4>Por último, elegí la categoría que desees:</h4>
                <h5>Ingresá las primeras letras de la categoría...</h5>
                <Autocomplete name={'knowledge'} items={knowledge} ></Autocomplete> */}
              </div>
              <div className="Section">
                <input type="submit" className="SearchButton" value="Buscar guías" />
              </div>
              {this.state.notLoggedInUser && (
                <p className="form-error">Usuario no logueado.</p>
              )}
              {this.state.searchFailed && (
                <p className="form-error">La búsqueda de guías falló. Intantá de nuevo.</p>
              )}
            </Form>
          </Formik>
        </div>
      </div>
    );
  }
}

export default Home;



