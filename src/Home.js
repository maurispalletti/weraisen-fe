import React from 'react';
import './Home.css';
import avatar_1 from './avatars/avatar_1.svg';
import home from './icons/home.svg'
// import bar from './icons/BAR.png'
// import culture from './icons/CULTURE.png'
// import walking from './icons/WALKING.png'
// import food from './icons/FOOD.png'
// import shopping from './icons/SHOPPING.png'
import Autocomplete from './components/Autocomplete.js'
import Desplegable from './components/Desplegable.js'
import ciudadesCba from './components/CiudadesCba.js'
// import idiomas from './components/Idiomas.js'
// import Desplega from './components/Desplega.js'
// import nature from './icons/NATURE.png'
import Buttom from './components/Boton';


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
      <div className="Section" >
        <h4>¿A dónde querés ir?</h4>
        <h7>Ingresa las primeras letras de la ciudad...</h7>
        <Autocomplete items={ciudadesCba} ></Autocomplete>
      </div>

            
      <div className="Section">
        <h4>¿Cuándo?</h4>
        <Desplegable/>
      </div>

      <div className="Section">
        <h4>Elegí el idioma de tu guia</h4>
        <select className="Dropdown">    
        <option value={0} selected>Selecciona el idioma...</option>       
          <option value={1} selected>Alemán</option>
          <option value={2}>Chino</option> 
          <option value={3}>Español</option>
          <option value={4}>Frances</option>
          <option value={5}>Italiano</option> 
          <option value={6}>Japones</option> 
           <option value={7}>Portugues</option> 
           <option value={8}>Ruso</option> 
           <option value={9}>Turco</option>       
        </select>
      </div>

      <div className="Section">
        <h4>Elegí el género de tu guia</h4>
        <select className="Dropdown">  
        <option value={0} selected>Selecciona el género...</option>        
          <option value={1}>Indistinto</option>
          <option value={2}>Femenino</option>
          <option value={3}>Masculino</option>
          <option value={4}>Otros</option>          
        </select>
      </div>
      <form class="form-inline" role="form">
      <div className="Section">

        <h4>Rango de edad</h4>                
        <p><input className="TextBox-input" type="text" id="formGroupExampleInput" placeholder="Desde"  /></p>
        <p><input className="TextBox-input" type="text" id="formGroupExampleInput" placeholder="Hasta" /></p>              
      
      </div>

      </form>
      
      
      <div className="LastSection">
        <h4>Por último, elegí la categoría que desees:</h4>
        {/* <div className="ActivitiesSection">
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
       */}

       <div>
        <select className="Dropdown">    
        <option value={0} selected>Selecciona la categoría...</option>       
          <option value={1} >Arte</option>
          <option value={2}>Bares</option> 
          <option value={3}>Deportes</option>
          <option value={4}>Espectáculos</option>
          <option value={5}>Fotografía</option> 
          <option value={6}>Historia</option> 
           <option value={7}>Montaña</option> 
           <option value={8}>Museos</option> 
           <option value={9}>Restaurantes</option>      
        </select>
        </div>
    </div>

      <div className="Section">
      <Buttom link={'/results'} className={"SearchButton"} name={"BUSCAR GUÍAS"} />
        
      </div>



    </div>
  </div>
 );

 export default Home;
