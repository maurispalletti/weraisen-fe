import React from 'react';
import '../components/blabla.css';
import { Button } from 'react-bootstrap';

const CardAceptarRechazar = props => {

  return(

    <div style={{border: 'black 1px solid', maxWidth:'300px'}}> 
 
      <div className="card-text-center">
        <div className="overflow">
          <img src= {props.imgsrc} alt='imag1' className="card-img"/>
        </div>
      <div className="card-body text-dark">
        <h3 className="">{props.title}</h3>
        <h4 className="">
          {props.text}
        </h4>
        <div className= "btn btn-outline-success">Aceptar</div>
      
        <div className= "btn btn-outline-success">Rechazar</div>
      </div>
      <div className="frente">
        {" "}
        Dorso DNI
        <img className="frente-imagen" src={props.imgsrc2} />
      </div>
      </div>
      <div className='dni-info'>
        <div
          className="card-body"
          style={{
            padding: "10px 10px 10px 10px",
            marginLeft: "0px",
            Width: "300px",
          }}
        >
          <img src={props.imgsrc2} style={{ float: "left", maxWidth: "100px",
              padding: "10px 0px 0px 20px",
              marginBottom: "5px",
            }}
          />
          <p
            className="card-text"
            style={{ textAlign: "left", Width: "100px" }}
          >
            {" "}
            <strong> Nombre:</strong> {props.name}{" "}
          </p>
          <p
            className="card-text"
            style={{ textAlign: "left", Width: "100px" }}
          >
            {" "}
            <strong> Apellido:</strong> {props.lastname}
          </p>
          <p
            className="card-text"
            style={{ textAlign: "left", Width: "100px" }}
          >
            {" "}
            <strong> Fecha Nacimiento:</strong> {props.fecha}
          </p>
          <p
            className="card-text"
            style={{ textAlign: "left", Width: "100px" }}
          >
            {" "}
            <strong> Número DNI:</strong> {props.dni}
          </p>
          <p
            className="card-text"
            style={{ textAlign: "left", Width: "100px" }}
          >
            {" "}
            <strong> Email:</strong> {props.email}
          </p>
        </div>
      </div>

      <div className="row mb-2">
        <div className="center">
          <Button
            variant="primary"
            value={"Aceptar"}
            size="sm"
            style={{ textAlign: "left", margin: "3%" }}
          >
            {" "}
            Aceptar{" "}
          </Button>
          <Button
            variant="primary"
            value={"Aceptar"}
            size="sm"
            style={{ textAlign: "right" }}
          >
            {" "}
            Rechazar{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardAceptarRechazar;
