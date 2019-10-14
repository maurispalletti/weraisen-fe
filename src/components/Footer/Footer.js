import React from 'react';
import '../Footer/Footer.css';

const Footer = props => {

    return (
        <div className='Footer'>
    
          
            <h5>{props.texto}</h5>
        
        </div>
    );
}

export default Footer;