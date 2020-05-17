import React from 'react';
import '../components/CardAceptarRechaza.css';
// import backdrop from './navbar/backdrop/backdrop';

const CardAceptarRechazar = props => {

  return(

    <div style={{border: 'black 1px solid'}}> 
 
      <div className="card-text-center">
        <div className="overflow">
          <img src= {props.imgsrc} alt='imag1' className="card-img"/>
        </div>
      <div className="card-body text-dark">
        <h3 className="card-title">{props.title}</h3>
        <p className="card-text text-secondary">
          {props.text}
        </p>
        <div className= "btn btn-outline-success">Aceptar</div>
      
        <div className= "btn btn-outline-success">Rechazar</div>
      </div>
      </div>

    </div>
    

  )
}

export default CardAceptarRechazar;