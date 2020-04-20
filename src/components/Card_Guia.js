import React from 'react';


const Card_Guia = (props) => {

    const { imagen, nombre, edad, detalle } = props.guia;

    return (
        // <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card" >
                <img src={imagen} className="card-img-top img-fluid" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <h6 className="card-subtitle mb-2 ">Edad: {edad}</h6>
                    <p className="card-text">{detalle}</p>
                    <a href="#" className="btn btn-outline-primary btn-block" >Ver más...</a>
                </div>
            </div>
        // </div>


    )
}

export default Card_Guia;