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
import Calendar from 'react-calendar'
import bar from './icons/BAR.png'
import culture from './icons/CULTURE.png'
import walking from './icons/WALKING.png'
import food from './icons/FOOD.png'
import shopping from './icons/SHOPPING.png'
import PostList from '../src/PostList.js'
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
        <h4>Primero, selecciona una ciudad:</h4>
        <select className="Dropdown">
                  
          <option value="" selected disabled hidden>Ingresa las 3 primeras letras...</option>
          <option value={3}>PostList</option>
          <option value={4}>PostList</option>
          <option value={5}>Salta</option>
          <option value={6}>Jujuy</option>
          <option value={7}>Nequen</option>
          <option value={8}>Chubut</option>
          <option value={9}>Rio Negro</option>
          

        </select>
      </div>

      <div className="Section">
        <h4>¿Cuándo?</h4>
        
        
        <select className="Dropdown" >
          <option value="" selected disabled hidden>Selecciona una fecha...</option>
          <option value={1}>Ahora</option>
          <option value={2}>En 24 hs</option>
          <option value={3}>En una semana</option>
          <option value={4}>Fecha personalizada</option>
        </select>
       
        
      
      </div>
   {/* <Calendar></Calendar> */}

      <div className="LastSection">
        <h4>Por último, elige la categoría que desees:</h4>
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
        <a href={"/results"} className="SearchButton">BUSCAR GUÍAS</a>
      </div>



    </div>
  </div>
);

export default Home;
