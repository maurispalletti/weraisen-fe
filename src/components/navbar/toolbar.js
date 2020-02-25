import React from 'react';
import './toolbar.css';
import logo from './logo4.png'

import DrawerToggleButton from './sideDrawer/drawerToggleButton';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div>
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="spacer"></div>
            <div className="toolbar__logo"><a href="/search"><img src={logo} alt={"Home"} width="90" /></a></div>

           
        </nav>
    </header>
);

export default toolbar;

