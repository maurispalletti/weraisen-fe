import React, { Component } from 'react';
import Autocomplete from './components/Autocomplete.js'
import Desplegable from './components/Desplegable.js'
import Categorias from './components/Categorias.js'
import { Redirect } from 'react-router'
import { Formik, Form } from 'formik'
import FieldWithError from './forms/FieldWithError'
import DropdownGender from './forms/DropdownGender'
import Header from '../src/components/Header'
import './Search.css';

import ubicacion from './icons/ubicacion.svg'

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

const languages = ['Español', 'Inglés', 'Italiano', 'Francés', 'Portugués', 'Japonés', 'Chino']

let INITIAL_VALUES = {
  fromAge: '',
  toAge: '',
  gender: '',
  language: '',
}

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      goToResults: false,
      searchFailed: false,
      ageValidationFailed: false,
      notLoggedInUser: false,
      goToProfile: false,
      showFilters: false,
      ////////////
      fromAge: '',
      toAge: '',
      gender: '',
      city: '',
      language: '',
      knowledge: [],
      loaded: false,
    }
  }

  componentDidMount() {
    this.setInitialValues();
  }

  setInitialValues() {
    let oldFilters = sessionStorage.getItem("filters");
    let storedCity = sessionStorage.getItem("filtrociudad");

    if (oldFilters) {
      oldFilters = JSON.parse(oldFilters);
      let { fromAge, toAge, gender, city, language, knowledge } = oldFilters;

      if (storedCity) city = storedCity;

      let showHiddenFiltersApplied = false;
      if (fromAge || toAge || gender || language) {
        showHiddenFiltersApplied = true;
      }

      this.setState({ fromAge, toAge, gender, city, language, knowledge, showFilters: showHiddenFiltersApplied, loaded: true });
    } else {
      this.setState({ city: storedCity, loaded: true });
    }
  }

  searchGuides = (filters) => {
    const { fromAge, toAge } = filters

    if (fromAge && toAge && (parseFloat(fromAge) > parseFloat(toAge))) {
      this.setState({ ageValidationFailed: true });
    } else {
      const language = localStorage.getItem("filter_language");
      const knowledge = this.state.knowledge;

      filters[`city`] = this.state.city;
      filters[`language`] = language;
      filters[`knowledge`] = knowledge;

      const filtersString = JSON.stringify(filters);

      sessionStorage.setItem(`filters`, filtersString);

      sessionStorage.removeItem("filtrociudad");
      localStorage.removeItem("filter_language");

      this.setState({ goToResults: true })
    }
  }

  mostrarFiltros = () => {
    this.setState({ showFilters: !this.state.showFilters });

  }


  handleCategory = (values) => {
    this.setState({ knowledge: values })
  }

  render() {

    if (this.state.goToResults) {
      return <Redirect to="/results" />
    }
    if (this.state.goToProfile) {
      return <Redirect to="/profile" />
    }

    if (this.state.loaded) {
      INITIAL_VALUES = {
        fromAge: this.state.fromAge,
        toAge: this.state.toAge,
        gender: this.state.gender,
        language: this.state.language,
      }

      return (
        <div className="Search">
          <Header></Header>
          <div className="BodySearch">
            <Formik
              initialValues={INITIAL_VALUES}
              onSubmit={(filters) => this.searchGuides(filters)}>
              <Form>
                <div className="ciudad">
                  <img src={ubicacion} alt={"Ubicacion"} width="25" />
                  {this.state.city}
                </div>
                <br></br>
                <div className="Fecha">
                  <h2>¿Cuándo?</h2>
                  <Desplegable />
                </div>
                <br></br>
                <div className="Categoria">
                  <h2>Seleccioná la categoría </h2>
                  <Categorias onCategoryChange={this.handleCategory} defaultSelected={this.state.knowledge} />
                </div>   
                 <br></br>

                <div className="Filters" style={{ display: this.state.showFilters ? 'block' : 'none' }}>
                  <h2>Género de tu guía</h2>
                  <DropdownGender name="gender" styleName={"input"} options={genders} />
                  <br></br>
                  <h2>Rango de edad</h2>
                  <FieldWithError name="fromAge" placeholder="Desde" aria-label="description" type="number" className="input" min="18" max="99" pattern="[1,9]{1,15}" />
                  <FieldWithError name="toAge" placeholder="Hasta" aria-label="description" type="number" className="input" min="18" max="99" pattern="[1,9]{1,15}" />
                  <br></br>
                  <h2>Elegí el idioma de tu guía:</h2>
                  <Autocomplete defaultText={this.state.language} placeholder={'Ingresa las primeras letras del idioma'} name={'language'} items={languages}></Autocomplete>
                  <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="salidaGrupal" />
                  <label class="custom-control-label" for="salidaGrupal">Permitir salidas grupales</label>
                </div>
                <br></br>
                  {this.state.ageValidationFailed && (
                    <p className="form-error">La edad en el campo 'Desde' debe ser menor a la edad en el campo 'Hasta'.</p>
                  )}
                </div>

                <div className="ButtonSection">
                  <div>
                    <p className="verMas" onClick={() => this.mostrarFiltros()} >{this.state.showFilters ? "Ver menos filtros" : "Ver más filtros"}</p>
                  </div>
                  <br></br>
                  <div className="buttonsSection">
                    <input type="submit" className="btn-primero" value="Buscar guías" />
                    <br></br>
                    <a href="/search"><input type="button" className="search-button" value="Elegir otra ciudad" /></a>
                  </div>
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
    } else {
      return <></>
    }
  }
}

export default Search;



