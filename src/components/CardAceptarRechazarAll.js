import React, {Component} from 'react';
import CardAceptarRechazar from './CardAceptarRechazar';
import img1 from '../avatars/Icon.jpg';
import '../components/CardAceptarRechaza.css'


class CardsAceptar extends Component {
    render() {
        return (

            <div className="container-fluid d-flex justify-content-center">
             
                        <CardAceptarRechazar imgsrc={img1} title="Maria Sanchez" text= "Amante de los paseos en la naturaleza y girl scout" />

            </div>

        );
    }
    }
    export default CardsAceptar;