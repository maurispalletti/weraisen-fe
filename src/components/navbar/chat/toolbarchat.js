import React from 'react';
import './toolbarchat.css';

import atras from './regreso.png'

import Menu from './menuchat';


const Toolbarchat = props => (
   
    <header className="toolbarchat">
        <nav className="toolbar_navigationchat">
            <div className="back"><a href="/matches"><img src={atras} alt={"Back"} width="24" /></a></div>
            <div className="spacer1"></div>
            <div className="spacer2"></div>
        
            <h3>{props.nombre}</h3>
            
            <div className="spacer"></div>
           
            <div className="menu">
                <Menu click={props.drawerClickHandler}/>
            </div>
        </nav>
    </header>
);

export default Toolbarchat;

