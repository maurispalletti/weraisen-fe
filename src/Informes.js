import React, { Component } from 'react';
import avatar_1 from './avatars/avatar_1.svg';
import './Informes.css';

import home from './icons/home.svg'
import Autocomplete from './components/Autocomplete.js'
import Desplegable from './components/Desplegable.js'

import Categorias from './components/Categorias.js'
// import ciudadesCba from './Component/CiudadesCba.js'

import { Redirect } from 'react-router'
import { Formik, Form } from 'formik'
import FieldWithError from './forms/FieldWithError'
import DropdownGender from './forms/DropdownGender'
//grafico
import Grafico from './components/Grafico2barras'


class Informes extends Component {
  render() {  

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
          <Grafico/>
        </div>
      </div>
    );
  }
}

export default Informes;



