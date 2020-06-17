import React, {Component} from 'react';
import CardAceptarRechazar from './CardAceptarRechazar';
import img1 from '../avatars/avatar_4.svg';
import img2 from '../avatars/avatar_5.svg';

class CardsAceptar extends Component {
    render() {
        return (

            <div className="container-fluid d-flex justify-content-center">
             
                        <CardAceptarRechazar imgsrc={img1} imgsrc2= {img2} name="Juan" lastname= "Sanchez" fecha="15/05/1990" dni="39609696" email="msanchez@gmail.com"  />

            </div>

        );
    }
    }
    export default CardsAceptar;