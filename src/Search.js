import React, { Component } from 'react';
import './Search.css';
import Toolbar from './components/navbar/toolbar'
import SideDrawer from './components/navbar/sideDrawer/sideDrawer'
import Backdrop from './components/navbar/backdrop/backdrop'

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

const languages = ['Español', 'Inglés', 'Alemán', 'Italiano', 'Francés', 'Portugués', 'Japonés', 'Chino', 'Ruso', 'Turco', 'Neerlandés', 'Polaco']

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
    categories: [],
    sideDrawerOpen: false
  }

  searchGuides = async ({ fromAge, toAge, gender }) => {

    const filters = { fromAge, toAge, gender }

    if (parseFloat(fromAge) > parseFloat(toAge)) {
      this.setState({ ageValidationFailed: true })
    } else {

      const city = localStorage.getItem("filter_city");
      const language = localStorage.getItem("filter_language");
      const knowledge = this.state.categories;

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

  handleCategory = (values) => {
  
    this.setState({ categories: values })
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
           return {sideDrawerOpen: !prevState.sideDrawerOpen};
      });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  }

  render() {
    let sideDrawer;
    let backdrop;
   
    if (this.state.sideDrawerOpen) {
      sideDrawer =<SideDrawer/>;
      backdrop = <Backdrop click={this.backdropClickHandler}/>

    }
    if (this.state.goToResults) {
      return <Redirect to="/results" />
    }
    if (this.state.goToProfile) {
      return <Redirect to="/profile" />
    }

    return (
      <div className="Search">
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
        {sideDrawer}
        {backdrop}


        {/* <div className="Header">
          <button className="HomeIcon" onClick={() => this.setState({ goToProfile: true })}>
            <img src={home} alt={"Home"} />
          </button>
          <div className="HeaderImage">
            <a href={"/profile"}>
              <img src={avatar_1} alt={"User"} />
            </a>
          </div>
        </div> */}
        {/* <div className="HeaderHome">
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
        </div> */}

        <div className="BodySearch">
          <Formik
            initialValues={INITIAL_VALUES}
            onSubmit={(filters) => this.searchGuides(filters)}>
            <Form>
              <h2>¡PLANIFICÁ TU RECORRIDO!</h2>
              <div className="Section">
                <h2>¿A dónde querés ir?</h2>
                <Autocomplete placeholder={'Ingresa las primeras letras de la ciudad'}  name={'city'} items={cities}></Autocomplete>
              </div>
              <div className="Section">
                <h2>Elegí el idioma de tu guía:</h2>
                {/* <h5>Ingresá las primeras letras del idioma...</h5> */}
                <Autocomplete placeholder={'Ingresa las primeras letras del idioma'} name={'language'} items={languages}></Autocomplete>
              </div>
              <div className="Section">
                <h2>¿Cuándo?</h2>
                <Desplegable />
              </div>
              <div className="Section">
                <h2>Género de tu guía</h2>
                <DropdownGender name="gender" styleName={"Dropdown-search"} options={genders} />
              </div>
              <div className="Section">
                <h2>Rango de edad</h2>
                

                <FieldWithError name="fromAge" placeholder="Desde" aria-label="description" className="input" />
                <FieldWithError name="toAge" placeholder="Hasta" aria-label="description" className="input" />
                {this.state.ageValidationFailed && (
                  <p className="form-error">La edad en el campo 'Desde' debe ser menor a la edad en el campo 'Hasta'.</p>
                )}
              </div>

              <div className="LastSection">
                <h2>Por último, seleccioná las categorías que desees:</h2>

                <Categorias onCategoryChange={this.handleCategory} />

              </div>
              <div className="Section">
                <input type="submit" className="search-button" value="Buscar guías" />
              </div>
              {this.state.notLoggedInUser && (
                <p className="form-error">Usuario no logueado.</p>
              )}
              {this.state.searchFailed && (
                <p className="form-error">La búsqueda de guías falló. Intentá de nuevo.</p>
              )}
            </Form>
          </Formik>
        </div>
      </div>
    );
  }
}

export default Home;



