import React from "react";
import backdrop from "./navbar/backdrop/backdrop";
import { Button } from "react-bootstrap";
import "../components/blabla.css"

const CardAceptarRechazar = (props) => {
  return (
    <div className="card col-sm-12 col-xs-12 d-flex" style={{ Width: "400px" }}>
      <div className="info-container">
      <div className="frente " >
        Frente DNI
        <img className='frente-imagen' src={props.imgsrc} />
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
