import React from 'react';
import avatar_1 from './avatars/avatar_1.svg';
import basketball from './icons/basketball.svg';
import camera from './icons/camera.svg';
import cinema from './icons/cinema.svg';
import climbing from './icons/climbing.svg';
import cocktail from './icons/cocktail.svg';
import coffee from './icons/coffee.svg';
import home from './icons/home.svg';
import './SerGuia.css';
import Footer from "./components/footer/footer"


const SerGuia = () => (
  <div className="SerGuia">
    <div className="HeaderImagen">
            
    </div>

    <div className="Body">
      <form>
        <h2>Quiero ser guía</h2>


        <div className="Section">
          <h4>Describite brevemente para que otros te conozcan: </h4>
          <input className="descripcion-input" type="text" placeholder="Ingresá acá tu descripción"></input>
          <h4>Idiomas que manejás: </h4>

          <div className="IdiomsSection">
            <div className="checkboxIdioma" >
              <input type="checkbox" id="scales" name="scales" checked /> Español
            </div>
            <div className="checkboxIdioma" >
              <input type="checkbox" id="scales" name="scales" checked /> Inglés
            </div>
            <div className="checkboxIdioma" >
              <input type="checkbox" id="scales" name="scales" checked /> Alemán
            </div>
            <div className="checkboxIdioma" >
              <input type="checkbox" id="scales" name="scales" checked /> Portugués
            </div>
            <div className="checkboxIdioma" >
              <input type="checkbox" id="scales" name="scales" checked /> Francés
            </div>
            <div className="checkboxIdioma" >
              <input type="checkbox" id="scales" name="scales" checked /> Italiano
            </div>
            <div className="checkboxIdioma" >
              <input type="checkbox" id="scales" name="scales" checked /> Otros
            </div>
          </div>

          {/* <select className="Dropdown">
            <option value="" selected disabled hidden>Selecciona uno o más idiomas</option>
            <option value={1}>Español</option>
            <option value={2}>Inglés</option>
            <option value={3}>Alemán</option>
            <option value={4}>Portugués</option>
          </select> */}

          <div className="LastSection">
            <h4>Categorías:</h4>
            <div className="ActivitiesSection">
              <div className="ActivityGuia">
                <img alt={"ActivityGuia"} src={basketball} />
              </div>
              <div className="ActivityGuia">
                <img alt={"ActivityGuia"} src={camera} />
              </div>
              <div className="ActivityGuia">
                <img alt={"ActivityGuia"} src={coffee} />
              </div>
            </div>
            <div className="ActivitiesSection">
              <div className="ActivityGuia">
                <img alt={"ActivityGuia"} src={climbing} />
              </div>
              <div className="ActivityGuia">
                <img alt={"ActivityGuia"} src={cinema} />
              </div>
              <div className="ActivityGuia">
                <img alt={"ActivityGuia"} src={cocktail} />
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
    <Footer/>
  </div>

  
  

);

export default SerGuia;