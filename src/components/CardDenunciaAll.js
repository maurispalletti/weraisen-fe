import React, {Component} from 'react';
import CardDenuncia from './CardDenuncia';
import img1 from '../avatars/Icon.jpg';
import img2 from '../avatars/Icon2.jpg';
import img3 from '../avatars/icon3.jpg';


class Cards extends Component {
    render() {
        return (

            // <div className="container-fluid d-flex justify-content-center"> 
            //     <div className="row">
            //         <div className="col-md-4">
            //             <CardDenuncia imgsrc={img1} title="Juan Pablo Perez (GUIA)" text= "Impuntualidad"  signature="Matias Rivarola (TURISTA)"/>
            //         </div>
                  
            //         <div className="col-md-4">
            //          
            //         </div>
            //     </div>
            // </div>
            <div className="container-fluid d-flex justify-content-center">
             
             <CardDenuncia imgsrc={img3} title="Federico Rojas (TURISTA)" text= "Acoso" signature="Pablo Cuevas (GUIA)"/>
            
            </div>

           
        );
    }
    }
    export default Cards;