import React from 'react';
import './SerGuia.css';
import avatar_1 from './avatars/avatar_1.svg';
import home from './icons/home.svg'
import basketball from './icons/basketball.svg'
import camera from './icons/camera.svg'
import cinema from './icons/cinema.svg'
import climbing from './icons/climbing.svg'
import cocktail from './icons/cocktail.svg'
import coffee from './icons/coffee.svg'

const SerGuia = () => (
    <div className="SerGuia">
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
          <form>
          <h2>Quiero ser guía</h2>
      

          <div className="Section">
        <h4>Ingrese sus conocimientos: </h4>
        <input className="description-input" type="text" placeholder="Ingrese una breve descripción"></input> 
        <h4>Idiomas: </h4>

        <select className="Dropdown">
          <option value="" selected disabled hidden>Selecciona uno o más idiomas</option>
          <option value={1}>Español</option>
          <option value={2}>Inglés</option>
          <option value={3}>Alemán</option>
          <option value={4}>Portugués</option>
        </select>
             
        <div className="LastSection">
        <h4>Categorías:</h4>
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

        </div>
        <div className="buttonsSection">
          <a href={'/profile'} className="cancel-button">CANCELAR</a>
          <a href={'/profile'} className="button">GUARDAR CAMBIOS</a>
        </div>
        </form>
        </div>
       
          </div>

);

export default SerGuia;