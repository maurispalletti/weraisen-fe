import React, { Component } from 'react';
import './Home.css';
import avatar_1 from './avatars/avatar_1.svg';
import home from './icons/home.svg'
import bar from './icons/BAR.png'
import culture from './icons/CULTURE.png'
import walking from './icons/WALKING.png'
import food from './icons/FOOD.png'
import nature from './icons/NATURE.png'
import shopping from './icons/SHOPPING.png'
import Autocomplete from './Component/Autocomplete.js'
import Desplegable from './Component/Desplegable.js'
import ciudadesCba from './Component/CiudadesCba.js'
import Buttom from './Boton';

const languages = ['español', 'inglés', 'alemaán', 'italiano', 'francés', 'portugués', 'japonés', 'ruso']
const knowledge = ['bares', 'restaurantes', 'museos', 'espectáculos', 'deportes', 'montaña', 'fotografía']

class Home extends Component {




  render() {
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

          <h2>¡Planifica tu recorrido!</h2>

          <div className="Section">
            <h4>¿A dónde querés ir?</h4>
            <h5>Ingrese las primeras letras de la ciudad...</h5>
            <Autocomplete items={ciudadesCba} ></Autocomplete>
          </div>

          <div className="Section">
            <h4>Elige el idioma de tu guía:</h4>
            <h5>Ingrese las primeras letras del idioma...</h5>
            <Autocomplete items={languages} ></Autocomplete>
          </div>

          <div className="Section">
            <h4>¿Cuándo?</h4>
            <Desplegable />
          </div>

          <div className="Section">
            <h4>Género de tu guia</h4>
            <select className="Dropdown-home">
              <option value={1} selected>Cualquiera</option>
              <option value={2}>Femenino</option>
              <option value={3}>Masculino</option>
              <option value={4}>Otros</option>
            </select>


          </div>
          <form class="form-inline" role="form">
            <div className="Section">
              <h4>Rango de edad</h4>
              <p><input className="TextBox-input" type="text" id="formGroupExampleInput" placeholder="Desde" /></p>
              <p><input className="TextBox-input" type="text" id="formGroupExampleInput" placeholder="Hasta" /></p>
            </div>
          </form>

          <div className="LastSection">
            <h4>Por último, elegí la categoría que desees:</h4>
            <h5>Ingrese las primeras letras de la categoría...</h5>
            <Autocomplete items={knowledge} ></Autocomplete>


            <div className="ActivitiesSection">
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
            </div>
          </div>

          <div className="Section">
            <Buttom link={'/results'} className={"SearchButton"} name={"BUSCAR GUÍAS"} />

          </div>



        </div>
      </div>
    );
  }
}

export default Home;
