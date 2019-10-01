import React from 'react';
import './Results.css';
import home from './icons/home.svg';
import avatar_1 from './avatars/avatar_1.svg';
import avatar_2 from './avatars/avatar_2.svg';
import avatar_3 from './avatars/avatar_3.svg';
import avatar_4 from './avatars/avatar_4.svg';
import avatar_5 from './avatars/avatar_5.svg';
import Buttom from './Boton';
import GuideCard from './GuideCard';

const Results = () => (
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
        <h4>Guías que coinciden con tu búsqueda:</h4>


        <GuideCard  
        name = "VICTORIA DIAZ"
        ubicacion = "Córdoba, Argentina"
        edad = "25 años"
        idiomas = "Español, Portugués"
        avatar ={avatar_2}
          />
        <GuideCard  
        name = "PAULA LOSANO"
        ubicacion = "Córdoba, Argentina"
        edad = "23 años"
        idiomas = "Español, Italiano, Portugués"
        avatar ={avatar_3}
          />
        <GuideCard  
        name = "ÁLVARO OSCARES"
        ubicacion = "Córdoba, Argentina"
        edad = "24 años"
        idiomas = "Español, Francés"
        avatar ={avatar_4}
          />
          <GuideCard  
        name = "MAURICIO SPALLETTI"
        ubicacion = "Córdoba, Argentina"
        edad = "24 años"
        idiomas = "Español, Inglés, Alemán"
        avatar ={avatar_5}
          />       
      

      </div>

      <div className="Section">
      <Buttom link={'/home'} className={"ResultsButton"} name={"Volver al menú principal"} />
        
      </div>



    </div>
  </div>
);

export default Results;
