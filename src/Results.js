import React from 'react';
import './Results.css';
import home from './icons/home.svg';
import avatar_1 from './avatars/avatar_1.svg';
import avatar_2 from './avatars/avatar_2.svg';
import avatar_3 from './avatars/avatar_3.svg';
import avatar_4 from './avatars/avatar_4.svg';
import avatar_5 from './avatars/avatar_5.svg';
import Footer from "./components/footer/footer"


const Results = () => (
  <div className="Home">
    <div className="Header">
      
    </div>

    <div className="Body">

      <div className="Section">
        <h4>Guías que coinciden con tu búsqueda:</h4>

        <div className="GuideCard">
          <div className="GuideCardText">
            <div className="GuideNameText">VICTORIA DIAZ</div>
            <div className="GuideText">Córdoba, Argentina</div>
            <div className="GuideText">25 años</div>
            <div className="GuideText">Español, Portugués</div>
          </div>
          <div className="ImageCard">
            <img src={avatar_2} alt={"User"} />
          </div>
        </div>

        <div className="GuideCard">
          <div className="GuideCardText">
            <div className="GuideNameText">PAULA LOSANO</div>
            <div className="GuideText">Córdoba, Argentina</div>
            <div className="GuideText">23 años</div>
            <div className="GuideText">Español, Italiano, Portugués</div>
          </div>
          <div className="ImageCard">
            <img src={avatar_3} alt={"User"} />
          </div>
        </div>

        <div className="GuideCard">
          <div className="GuideCardText">
            <div className="GuideNameText">ÁLVARO OSCARES</div>
            <div className="GuideText">Córdoba, Argentina</div>
            <div className="GuideText">24 años</div>
            <div className="GuideText">Español, Francés</div>
          </div>
          <div className="ImageCard">
            <img src={avatar_4} alt={"User"} />
          </div>
        </div>

        <div className="GuideCard">
          <div className="GuideCardText">
            <div className="GuideNameText">MAURICIO SPALLETTI</div>
            <div className="GuideText">Córdoba, Argentina</div>
            <div className="GuideText">25 años</div>
            <div className="GuideText">Español, Inglés, Alemán</div>
          </div>
          <div className="ImageCard">
            <img src={avatar_5} alt={"User"} />
          </div>
        </div>


      </div>


      <div className="Section">
        <a href={"/home"} className="ResultsButton">Volver al menú principal</a>
      </div>
      <div>
     <Footer />
      </div>

  </div>
  </div>
);

export default Results;

