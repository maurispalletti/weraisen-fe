import React from 'react';
import './toolbarchat.css';

import atras from './regreso.png'

import Menu from './menuchat';

const Toolbarchat = props => (
    <header className="toolbarchat">
        <nav className="toolbar_navigationchat">
            <div className="back"><a href="/matches"><img src={atras} alt={"Back"} width="24" /></a></div>
            <div className="spacer1"></div>
            <div className="toolbar__logochat" ><img className="imagen" src={props.img} alt={"Search"} width="40" /></div>
            {/* Aca poner redireccion en la imagen del perfil */}
            {/* <div className="toolbar__logochat" ><a href="/matches"><img className="imagen" src={props.img} alt={"Search"} width="40" /></a></div> */}
            <div className="spacer2"></div>
            <h5>{props.nombre}</h5>
            
            <div className="spacer"></div>
           
            <div className="menu">
                <Menu click={props.drawerClickHandler}/>
            </div>
        </nav>
    </header>
);

export default Toolbarchat;

