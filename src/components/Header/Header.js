import React from 'react';
import logo from '../../icons/logo.jpg';
import '../Header/Header.css';

const Header = props => {

    return (
        <div className='Header'>
    
            <div className='HeaderText'>
            <h3>{props.texto}</h3>
            </div>

            
            <div className='HeaderImage'>
                <img src = {logo} />
               
            </div>

            <div className ='HeaderImage2'>
                <a href={props.referencia}>
                    <img src={props.imagen}  /> 
                </a>
            </div>
            
           
               
        </div>
        
    );
}
export default Header;