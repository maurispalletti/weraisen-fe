import React, { Component } from 'react';
import './Search.css';
import Autocomplete from './components/Autocomplete.js'
import Desplegable from './components/Desplegable.js'
import Categorias from './components/Categorias.js'
import { Redirect } from 'react-router'
import { Formik, Form } from 'formik'
import FieldWithError from './forms/FieldWithError'
import DropdownGender from './forms/DropdownGender'
import Header from '../src/components/Header'

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

const INITIAL_VALUES = {
  fromAge: '',
  toAge: ''
}

let ciudad  

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      goToResults: false,
      searchFailed: false,
      ageValidationFailed: false,
      notLoggedInUser: false,
      goToProfile: false,
      categories: [],
      editable: true,
      filtros:false,
      city:""
  }
 
  }

 
  componentDidMount() {
    ciudad = localStorage.getItem("filtrociudad")
    this.setState({city:ciudad}) 
  }
  searchGuides = async ({ fromAge, toAge, gender }) => {

    const filters = { fromAge, toAge, gender }
   
    if (parseFloat(fromAge) > parseFloat(toAge)) {
      this.setState({ ageValidationFailed: true })
    } else {

      const language = localStorage.getItem("filter_language");
  
      const knowledge = this.state.categories;
  
      filters[`city`] = ciudad;
      filters[`language`] = language;
      filters[`knowledge`] = knowledge;

      const filtersString = JSON.stringify(filters);
    
      console.log(filtersString);
      localStorage.setItem(`filters`, filtersString);

      localStorage.removeItem("filtrociudad");
      localStorage.removeItem("filter_language");
      localStorage.removeItem("filter_knowledge");

      this.setState({ goToResults: true })
    }
  }

  toggleEditInfo = () => {
    this.setState({ editable: !this.state.editable });
  }

  mostrarFiltros = () => {
    this.setState({ filtros: !this.state.filtros });

  }


  handleCategory = (values) => {
    this.setState({ categories: values })
  }

  render() {
 
    if (this.state.goToResults) {
      return <Redirect to="/results" />
    }
    if (this.state.goToProfile) {
      return <Redirect to="/profile" />
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
              <h4>  {this.state.city}
   </h4>
          
              </div>
              <div className="Fecha">
                <h2>¿Cuándo?</h2>
                <Desplegable />
              </div>

              <div className="Categoria">
              <br/>
                <h2>Seleccioná la categoría </h2>
                <Categorias onCategoryChange={this.handleCategory} />
                

                
              </div>  

              <div className="Filters" style={{display: this.state.filtros ? 'block' : 'none' }}>
                <h2>Género de tu guía</h2>
                <DropdownGender name="gender" styleName={"input"} options={genders} />
                <br/>
                <h2>Rango de edad</h2>
               
                <FieldWithError disabled={this.visibilty} name="fromAge" placeholder="Desde" aria-label="description" type="number" className="input" min="18" max="99" pattern="[1,9]{1,15}"/>
                <FieldWithError disabled={!this.state.editable} name="toAge" placeholder="Hasta" aria-label="description"  type="number" className="input" min="18" max="99" pattern="[1,9]{1,15}" />
                <br/>
                <h2>Elegí el idioma de tu guía</h2>
             
                <Autocomplete placeholder={'Ingresa las primeras letras'} name={'language'} items={languages}></Autocomplete>
          
                {this.state.ageValidationFailed && (
                  <p className="form-error">La edad en el campo 'Desde' debe ser menor a la edad en el campo 'Hasta'.</p>
                )}
              </div>

              <div className="ButtonSection">
                  <div>
                <a className="verMas" onClick={() => this.mostrarFiltros()} > <p>{this.state.filtros ? "Ver menos filtros" : "Ver más filtros"}
                </p> </a>
                </div>
                  <div className="buttonsSection">
                  <input type="submit" className="search-button" value="Buscar guías" />
                  <br></br>
                  <a href="/search"><input type="button" className="search-button" value="Elegir otra ciudad"/></a>
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
  }
}

export default Search;



