import React from 'react'
import Rating from './components/rating/Rating.js'
import home from './icons/home.svg'
import Buttom from './components/Boton.js'
import './Valoration.css'

const Valoration = () => (
    <div className="Valoration">
     <div className="Header">
        <a href={"/home"} className="HomeIcon">
            <img src={home} alt={"Home"} />
        </a>

    </div> 
    <div className="Body">
    <div className="ratingSection">
        <h3>Puntuá a la persona que te acompañó </h3>
        <h3> en tu recorrido </h3>
        <Rating></Rating>
    </div>

    <div className="descriptionSection">
        <h3></h3>
        <h3>Añadí un comentario describiendo tu </h3>
        <h3> experiencia:</h3>
        <input type="text" name="description" placeholder="Juan es excelente! Visitamos el museo Caraffa 
        y supo explicarme todo! Muy agradecida." aria-label="description" className="descripcion-input"></input>
    </div>
    

        <Buttom link={'/home'} className={"botons"} name={"GUARDAR"} />


</div>
    
    </div>
);

export default Valoration;