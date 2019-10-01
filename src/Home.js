import React, { Component } from 'react';
import './Home.css';
import avatar_1 from './avatars/avatar_1.svg';
import home from './icons/home.svg'
// import bar from './icons/BAR.png'
// import culture from './icons/CULTURE.png'
// import walking from './icons/WALKING.png'
// import food from './icons/FOOD.png'
// import nature from './icons/NATURE.png'
// import shopping from './icons/SHOPPING.png'
import Autocomplete from './Component/Autocomplete.js'
import Desplegable from './Component/Desplegable.js'
import ciudadesCba from './Component/CiudadesCba.js'

import { Redirect } from 'react-router'
import { Formik, Form } from 'formik'
import FieldWithError from './forms/FieldWithError'
import DropdownGender from './forms/DropdownGender'

const genders = [
  {
    value: "ALL",
    description: 'Cualquiera'
  },
  {
    value: "FEMALE",
    description: 'Femenino'
  },
  {
    value: "MALE",
    description: 'Masculino'
  },
  {
    value: "OTHER",
    description: 'Otro'
  },
]

const languages = ['español', 'inglés', 'alemán', 'italiano', 'francés', 'portugués', 'japonés', 'ruso']

const knowledge = ['bares', 'restaurantes', 'museos', 'espectáculos', 'deportes', 'montaña', 'fotografía']

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

    return (
      <div className="Home">
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
            onSubmit={(filters) => this.searchGuides(filters)}>
            <Form>
              <h2>¡Planifica tu recorrido!</h2>
              <div className="Section">
                <h4>¿A dónde querés ir?</h4>
                <h5>Ingresá las primeras letras de la ciudad...</h5>
                <Autocomplete name={'city'} items={ciudadesCba}></Autocomplete>
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
                <h4>Por último, elegí la categoría que desees:</h4>
                <h5>Ingresá las primeras letras de la categoría...</h5>
                <Autocomplete name={'knowledge'} items={knowledge} ></Autocomplete>
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



/* <div className="ActivitiesSection">
<div className="Activity">
  <img alt={"Activity"} src={culture} />
</div>
<div className="Activity">
  <img alt={"Activity"} src={food} />
</div>
<div className="Activity">
  <img alt={"Activity"} src={walking} />
</div>
</div>
<div className="ActivitiesSection">
<div className="Activity">
  <img alt={"Activity"} src={nature} />
</div>
<div className="Activity">
  <img alt={"Activity"} src={shopping} />
</div >
<div className="Activity">
  <img alt={"Activity"} src={bar} />
</div>
</div> */