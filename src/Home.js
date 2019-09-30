import React from 'react';
import './Home.css';
import avatar_1 from './avatars/avatar_1.svg';
import home from './icons/home.svg'
import bar from './icons/BAR.png'
import culture from './icons/CULTURE.png'
import walking from './icons/WALKING.png'
import food from './icons/FOOD.png'
import shopping from './icons/SHOPPING.png'
import nature from './icons/NATURE.png'
import Buttom from './Boton';

const Home = () => (
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
      
      <h2>¡Planificá tu recorrido!</h2>

      <div className="Section">
        <h4>¿A dónde querés ir?</h4>
        <select className="Dropdown">
          <option value="" selected disabled hidden>Seleccioná una ciudad...</option>
          <option value={1}>Córdoba</option>
          <option value={2}>Buenos Aires</option>
          <option value={3}>Carlos Paz</option>
          <option value={4}>Posadas</option>
          <option value={5}>Salta</option>
          <option value={6}>Rosario</option>
          <option value={7}>Bariloche</option>
          <option value={8}>Puerto Madryn</option>
          <option value={9}>Mendoza</option>
        </select>
      </div>

      <div className="Section">
        <h4>¿Cuándo?</h4>
        <select className="Dropdown">
          <option value="" selected disabled hidden>Seleccioná una fecha...</option>
          <option value={1}>Ahora</option>
          <option value={2}>En 24 hs</option>
          <option value={3}>En una semana</option>
          <option value={4}>Fecha personalizada</option>
        </select>
        
      
      </div>
      <div className="Section">
        <h4>Género de tu guia</h4>
        <select className="Dropdown">          
          <option value={1} selected>Cualquiera</option>
          <option value={2}>Femenino</option>
          <option value={3}>Masculino</option>
          <option value={4}>Otros</option>          
        </select>
        
      
      </div>
      
   {/* <Calendar></Calendar> */}

      <div className="LastSection">
        <h4>Por último, elegí la categoría que desees:</h4>
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

export default Home;
