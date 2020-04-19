import React from 'react';
import './sideDrawer.css'

import logo from './WER-NARANJA.png'

const sideDrawer = props =>(
    <nav className="side-drawer">
                
       <div className="container-logo">
        <img src={logo} alt={"Home"} width="85%"/>
        </div>
        <div className="container-items">
        <ul>
            <li><a href="/profile">Mi perfil</a></li>
            <li><a href="/matches">Mis encuentros</a></li>

        </ul>
        </div>
       

    
    </nav>
);

export default sideDrawer;