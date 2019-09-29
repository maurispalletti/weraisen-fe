import React from 'react';
import './Home.css';
import avatar_1 from './avatars/avatar_1.svg';
import home from './icons/home.svg'
import bar from './icons/BAR.png'
import culture from './icons/CULTURE.png'
import walking from './icons/WALKING.png'
import food from './icons/FOOD.png'
import shopping from './icons/SHOPPING.png'
import Autocomplete from './Component/Autocomplete.js'
import Desplegable from './Component/Desplegable.js'
import ciudadesCba from './Component/CiudadesCba.js'
import idiomas from './Component/Idiomas.js'
import Desplega from './Component/Desplega.js'


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
     
      <h2>¡Planifica tu recorrido!</h2>

      <div className="Section">
        <h4>¿A dónde querés ir?</h4>
        <h7>Ingrese las primeras letras de la ciudad...</h7>
        <Autocomplete items={ciudadesCba} ></Autocomplete>
      </div>

      <div className="Section">
        <h4>Elige el idioma de tu guía:</h4>
        <h7>Ingrese las primeras letras del idioma...</h7>
        <Desplega items={idiomas} ></Desplega>
      </div>


      <div className="Section">
        <h4>¿Cuándo?</h4>
      
        <Desplegable/>
         
      </div>


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
          {/* <div className="Activity">
            <img alt={"Activity"} src={nature} />
          </div> */}
          <div className="Activity">
            <img alt={"Activity"} src={shopping} />
          </div >
          <div className="Activity">
            <img alt={"Activity"} src={bar} />
          </div>
        </div>
      </div>

      <div className="Section">
        <a href={"/results"} className="SearchButton">BUSCAR GUÍAS</a>
      </div>



    </div>
  </div>
 );

 export default Home;
