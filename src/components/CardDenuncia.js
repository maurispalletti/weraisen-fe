import React from 'react';
import '../components/CardDenuncia.css';
import { Button } from 'react-bootstrap';

const CardDenuncia = props => {

  return(
    <div style={{border: 'black 1px solid', maxWidth:'300px'}}> 
 
    <div className="card-text-center">
      <div className="overflow">
        <img src= {props.imgsrc} alt='imag1' style={{width:'20rem', margin: '3%', borderTopRightRadius:'12px', borderTopLeftRadius:'12px', borderBottomLeftRadius:'12px', borderBottomRightRadius:'12px'}}/>
      </div>
    <div className="card-body text-dark">
      <h3 className="">{props.title}</h3>
      <h4 className="">
        {props.text}
      </h4>
      <div className= "btn btn-outline-success">Aceptar</div>
    
      <div className= "btn btn-outline-success">Rechazar</div>
    </div>
    </div>

  </div>
  

  )
}



export default CardDenuncia;
