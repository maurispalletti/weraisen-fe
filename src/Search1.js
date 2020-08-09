import React from 'react';
import './Search.css';

import neuquen from './avatars/ciudades/neuquen.png'
import mendoza from './avatars/ciudades/mendoza.png'
import bsas from './avatars/ciudades/bsas.png'
import cordoba from './avatars/ciudades/cordoba.png'
import laplata from './avatars/ciudades/laplata.png'
import mardel from './avatars/ciudades/mardel.png'
import rosario from './avatars/ciudades/rosario.png'

import Header from '../src/components/Header'

const provincias = [
    {
        "nombre": "Buenos Aires",
        "ciudades": ["Buenos Aires", "La Plata", "Mar del Plata", "Monte Hermoso", "Pinamar"]
    },
    {
        "nombre": "Catamarca",
        "ciudades": ["San Fernando del Valle de Catamarca"]
    },
    {
        "nombre": "Chaco",
        "ciudades": ["Resistencia"]
    },
    {
        "nombre": "Chubut",
        "ciudades": ["Comodoro Rivadavia", "Esquel", "Puerto Madryn", "Trelew"]
    },
    {
        "nombre": "Córdoba",
        "ciudades": ["Córdoba", "Cosquín", "La Cumbrecita", "Mina Clavero", "Santa Rosa de Calamuchita", "Villa Carlos Paz", "Villa María"]
    },
    {
        "nombre": "Corrientes",
        "ciudades": ["Corrientes"]
    },
    {
        "nombre": "Entre Ríos",
        "ciudades": ["Concordia", "Colón", "Gualeguaychú", "Paraná"]
    },
    {
        "nombre": "Formosa",
        "ciudades": ["Formosa"]
    },
    {
        "nombre": "Jujuy",
        "ciudades": ["Humauaca", "San Salvador de Jujuy", "Tilcara"]
    },
    {
        "nombre": "La Pampa",
        "ciudades": ["General Pico", "Santa Rosa"]
    },
    {
        "nombre": "La Rioja",
        "ciudades": ["La Rioja"]
    },
    {
        "nombre": "Mendoza",
        "ciudades": ["Mendoza", "San Rafael"]
    },
    {
        "nombre": "Misiones",
        "ciudades": ["Posadas", "Puerto Iguazú"]
    },
    {
        "nombre": "Neuquén",
        "ciudades": ["Neuquén", "San Martín de los Andes"]
    },
    {
        "nombre": "Río Negro",
        "ciudades": ["Bariloche", "El Bolsón"]
    },
    {
        "nombre": "Salta",
        "ciudades": ["Salta"]
    },
    {
        "nombre": "San Juan",
        "ciudades": ["San Juan"]
    },
    {
        "nombre": "San Luis",
        "ciudades": ["Merlo", "San Luis"]
    },
    {
        "nombre": "Santa Cruz",
        "ciudades": ["El Chalten", "Perito Moreno", "Río Gallegos"]
    },
    {
        "nombre": "Santa Fe",
        "ciudades": ["Rosario", "Santa Fe"]
    },
    {
        "nombre": "Santiago Del Estero",
        "ciudades": ["Santiago Del Estero", "Termas de Río Hondo"]
    },
    {
        "nombre": "Tierra del Fuego",
        "ciudades": ["Río Grande", "Ushuaia"]
    },
    {
        "nombre": "Tucumán",
        "ciudades": ["San Miguel de Tucumán"]
    },
  
  ]

class Search1 extends React.Component {
  state = {
    goToResults: false,
    searchFailed: false,
    notLoggedInUser: false,
    goToProfile: false,
    showMore: false,
    city: -1,
    idProvincia: -1
  }

  mostrarFiltrosCiudades = () => {
    this.setState({ showMore: !this.state.showMore });

  }
  guardarCiudad = (ciudad) => {
    sessionStorage.setItem("filtrociudad", ciudad)
    // localStorage.setItem("filtrociudad", ciudad)
  }
  handleCity = (values) => {
    this.setState({ city: values })
    console.log(this.state.city)

  }

  setearCiudad = (e) => {

    const opcion = e.target.value;
    this.guardarCiudad(opcion)

  }

  handlerCargarCiudades = (event) => {
    this.setState({ idProvincia: event.target.value });
   
  }

  render() {
    return (
      <div className="Search">
        <Header> </Header>

        <div className="BodySearch">
          <h2>Seleccioná la localidad que vas a visitar</h2>
 
          <div className="Section1">
          <h3>Ciudades más visitadas</h3>
            <div> <a href="/filters"><img src={bsas} alt={"buenos aires"} width="100%" onClick={() => this.guardarCiudad("Buenos Aires")} /></a> </div>
            <div><a href="/filters"><img src={cordoba} alt={"cordoba"} width="100%" onClick={() => this.guardarCiudad("Cordoba")} /></a></div>
            <div><a href="/filters"><img src={laplata} alt={"laplata"} width="100%" onClick={() => this.guardarCiudad("La Plata")} /></a></div>
            <div><a href="/filters"><img src={mardel} alt={"mardel"} width="100%" onClick={() => this.guardarCiudad("Mar del Plata")} /></a></div>
            <div><a href="/filters"><img src={neuquen} alt={"Neuquen"} width="100%" onClick={() => this.guardarCiudad("Neuquen")} /></a></div>
            <div><a href="/filters"><img src={mendoza} alt={"Mendoza"} width="100%" onClick={() => this.guardarCiudad("Mendoza")} /></a></div>
            <div><a href="/filters"><img src={rosario} alt={"Rosario"} width="100%" onClick={() => this.guardarCiudad("Rosario")} /></a></div>
          </div>
          <br></br>
          <h3 className="verMas" onClick={() => this.mostrarFiltrosCiudades()} >{this.state.showMore ? "Ocultar" : "Mostrar más ciudades"}</h3>
         <br></br>
          <div className="Filters" style={{ display: this.state.showMore ? 'block' : 'none' }}>
          <div>
            <div>
                <h4>Provincia</h4>
                <select name="provincias" className="Dropdown-search" id="selProvincias" onClick={this.handlerCargarCiudades}>
                    <option value={-1}> Seleccionar...</option>
                    {
                        provincias.map((provincia, p) => (
                            <option key={"provincia" + p} value={p}>{provincia.nombre}</option>
                        ))
                    }
                </select>
            </div>
            <br></br>
            <div>
                <h4>Ciudad</h4>
                <select name="CIUDADES" id="selCiudad" className="Dropdown-search" onClick={this.setearCiudad} >
                <option value={-1}> Seleccionar...</option>
                    {
                        this.state.idProvincia > -1 &&
                        (
                            provincias[this.state.idProvincia].ciudades.map((ciudad, c) => (
                             
                                <option key={"ciudad " + c} value={ciudad}>{ciudad}</option>
                                
                            ))
                        )
                    }
                </select>
            </div>
        </div>
          <br></br>
          <div className="ButtonSection">
          <a href="/filters"><input type="button" className="btn-primero" value="Buscar guía" />
                 </a> </div>
          <br></br>
          </div>
        <br></br>
        <br></br>
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



