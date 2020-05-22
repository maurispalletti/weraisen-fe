import React from 'react';

const Card_Guia_Home = (props) => {
  const { imagen, nombre, edad, detalle } = props.guia;
  return (
      <div className="card container-fluid" style={{ maxWidth: '18rem', padding:'10px' }}>
      <img src={imagen} className="card-img-top img-fluid" alt="Card cap" />
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <h6 className="card-subtitle mb-2 ">{edad}</h6>
        <i><p className="card-text">{detalle}</p></i>
      </div>
    </div>
  )
}

export default Card_Guia_Home;
