import React from 'react';
import '../components/CardDenuncia.css';

const CardDenuncia = props => {

  return(
  <div style={{border: 'black 2px solid'}}>
    <div className="card-text-center">
      <div className="overflow">
        <img src= {props.imgsrc} alt='imag1' className="card-img"/>
      </div>
      <div className="card-body text-dark">
        <h3 className="card-title">{props.title}</h3>
        <p className="card-text text-secondary">
          {props.text}
        </p>
        <p className= "card-text text-secondary"> Denunciante: {props.signature} </p>
        <a href="#" className= "btn btn-outline-success">Notificar</a>
      
        <a href="#" className= "btn btn-outline-success">Bloquear</a>
      </div>
    </div>
  </div>

  )
}



export default CardDenuncia;
