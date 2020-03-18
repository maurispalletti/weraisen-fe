import React from 'react';
import '../components/CardAceptarRechaza.css';

const CardAceptarRechazar = props => {

  return(
 
    <div className="card-text-center">
      <div className="overflow">
        <img src= {props.imgsrc} alt='imag1' className="card-img"/>
      </div>
      <div className="card-body text-dark">
        <h3 className="card-title">{props.title}</h3>
        <p className="card-text text-secondary">
          {props.text}
        </p>
        <a href="#" className= "btn btn-outline-success">Aceptar</a>
      
        <a href="#" className= "btn btn-outline-success">Rechazar</a>
      </div>
    </div>
    

  )
}

export default CardAceptarRechazar;