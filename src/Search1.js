import React, { Component } from 'react';
import './Search.css';

import neuquen from './avatars/ciudades/neuquen.png'
import mendoza from './avatars/ciudades/mendoza.png'
import bsas from './avatars/ciudades/bsas.png'
import cordoba from './avatars/ciudades/cordoba.png'
import laplata from './avatars/ciudades/laplata.png'
import mardel from './avatars/ciudades/mardel.png'
import rosario from './avatars/ciudades/rosario.png'

import Header from '../src/components/Header'

class Search1 extends React.Component {
  state = {
    goToResults: false,
    searchFailed: false,
    notLoggedInUser: false,
    goToProfile: false,
  }


  guardarCiudad = (ciudad) => {
     localStorage.setItem("filtrociudad", ciudad)  
     console.log(ciudad) 
  }

  render() {
    return (
      <div className="Search">
        <Header> </Header>
     
        <div className="BodySearch">        
          <h2>Seleccioná la ciudad que vas a visitar</h2>
          
              <div className="Section1">

              <div> <a href="/filters"><img src={bsas} alt={"buenos aires"} width="100%"onClick={() => this.guardarCiudad("Buenos Aires")}/></a> </div>
              <div><a href="/filters"><img src={cordoba} alt={"cordoba"} width="100%" onClick={() => this.guardarCiudad("Córdoba")}/></a></div>
              <div><a href="/filters"><img src={laplata} alt={"laplata"} width="100%" onClick={() => this.guardarCiudad("La Plata")}/></a></div>
              <div><a href="/filters"><img src={mardel} alt={"mardel"} width="100%" onClick={() => this.guardarCiudad("Mar del Plata")}/></a></div>
              <div><a href="/filters"><img src={neuquen} alt={"Neuquen"} width="100%" onClick={() => this.guardarCiudad("Neuquen")}/></a></div>
              <div><a href="/filters"><img src={mendoza} alt={"Mendoza"} width="100%" onClick={() => this.guardarCiudad("Mendoza")}/></a></div>
              <div><a href="/filters"><img src={rosario} alt={"Rosario"} width="100%" onClick={() => this.guardarCiudad("Rosario")}/></a></div>
              </div>
        
              {this.state.notLoggedInUser && (
                <p className="form-error">Usuario no logueado.</p>
              )}
              {this.state.searchFailed && (
                <p className="form-error">La búsqueda de guías falló. Intentá de nuevo.</p>
              )}
        
        </div>
      </div>
    );
  }
}

export default Search1;



