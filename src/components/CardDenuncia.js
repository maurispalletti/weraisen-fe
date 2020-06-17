import React from 'react';
import '../components/CardDenuncia.css';
import { Button } from 'react-bootstrap';

const CardDenuncia = props => {

  return(
  <div style={{border: 'black 1px solid', backgroundColor: '#32383e', borderTopRightRadius:'12px', borderTopLeftRadius:'12px', borderBottomLeftRadius:'12px', borderBottomRightRadius:'12px'}}>
    <div className="card-text-center">
      <div className="overflow">
        <img src= {props.imgsrc} alt='imag1' style={{width:'20rem', margin: '3%', borderTopRightRadius:'12px', borderTopLeftRadius:'12px', borderBottomLeftRadius:'12px', borderBottomRightRadius:'12px'}}/>
      </div>
      <div className="card-body text-dark">
        <h3 className="card-title">{props.title}</h3>
        <p className="card-text text-secondary">
          {props.text}
        </p>
        <p className= "card-text text-secondary"> Denunciante: {props.signature} </p>
        <div className="row mb-2">
                           <div className="center">
                              <Button variant="primary" value={"Aceptar"} size="sm" style={{textAlign:"left", margin: '3%'}}> Bloquear </Button>
                              <Button variant="primary" value={"Aceptar"} size="sm" style={{textAlign:"right"}}> Notificar </Button>
                           </div> 
               </div>
      </div>
    </div>
  </div>

  )
}



export default CardDenuncia;
