import React from 'react';
import './toolbarchat.css';
import usuario from './descarga.png'
import atras from './regreso.png'

import Menu from './menuchat';

const Toolbarchat = props => (
    <header className="toolbarchat">
        <nav className="toolbar_navigationchat">
            <div className="back"><a href="/search"><img src={atras} alt={"Back"} width="24" /></a></div>
            <div className="spacer1"></div>
            <div className="toolbar__logochat" ><a href="/search"><img className="imagen" src={usuario} alt={"Image"} width="40" /></a></div>
            {/* <div class="avatar" style="background-image: url(...)"></div> */}
            <div className="spacer2"></div>
           <h5>Irina Rossi</h5>
            
            <div className="spacer"></div>
           
            <div className="menu">
                <Menu click={props.drawerClickHandler}/>
            </div>
        </nav>
    </header>
);

export default Toolbarchat;

