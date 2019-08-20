import React from 'react';
import './Home.css';
import avatar_1 from './avatars/avatar_1.svg';
import home from './icons/home.svg'
import basketball from './icons/basketball.svg'
import camera from './icons/camera.svg'
import cinema from './icons/cinema.svg'
import climbing from './icons/climbing.svg'
import cocktail from './icons/cocktail.svg'
import coffee from './icons/coffee.svg'

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

      <div className="Section">
        <h4>Primero, selecciona una ciudad:</h4>
        <select className="Dropdown">
          <option value="" selected disabled hidden>Ingresa las primeras letras...</option>
          <option value={1}>Córdoba</option>
          <option value={2}>Buenos Aires</option>
          <option value={3}>La Pampa</option>
          <option value={4}>Misiones</option>
          <option value={5}>Salta</option>
          <option value={6}>Jujuy</option>
          <option value={7}>Nequen</option>
          <option value={8}>Chubut</option>
          <option value={9}>Rio Negro</option>
        </select>
      </div>

      <div className="Section">
        <h4>¿Cuándo?</h4>
        <select className="Dropdown">
          <option value="" selected disabled hidden>Selecciona una fecha...</option>
          <option value={1}>Ahora</option>
          <option value={2}>En 24 hs.</option>
          <option value={3}>Fecha personalizada</option>
        </select>
      </div>

      <div className="Section">
        <h4>Por último, elige una categoría:</h4>
        <div className="ActivitiesSection">
          <div className="Activity">
            <img alt={"Activity"} src={basketball} />
          </div>
          <div className="Activity">
            <img alt={"Activity"} src={camera} />
          </div>
          <div className="Activity">
            <img alt={"Activity"} src={coffee} />
          </div>
        </div>
        <div className="ActivitiesSection">
          <div className="Activity">
            <img alt={"Activity"} src={climbing} />
          </div>
          <div className="Activity">
            <img alt={"Activity"} src={cinema} />
          </div>
          <div className="Activity">
            <img alt={"Activity"} src={cocktail} />
          </div>
        </div>
      </div>

      <div className="Section">
        <a href={"/results"} className="SearchButton">Buscar guías disponibles</a>
      </div>



    </div>
  </div>
);

export default Home;
