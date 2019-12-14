import React from 'react';
import './sideDrawer.css'

import logo from './logo.png'

const sideDrawer = props =>(
    <nav className="side-drawer">
                
       
        <img src={logo} alt={"Home"} width="100%" />
        <ul>
            <li><a href="/">Mi perfil</a></li>
            <li><a href="/">Mis encuentros</a></li>



        </ul>
       

    
    </nav>
);

export default sideDrawer;