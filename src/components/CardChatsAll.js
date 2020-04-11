import React, {Component} from 'react';
import Card_Chats from './Card_Chats.js';
import img1 from '../Imagenes_Alvo/448.png';
import img2 from '../Imagenes_Alvo/006.png';
import img3 from '../Imagenes_Alvo/135.png';
import img4 from '../Imagenes_Alvo/142.png';
import img5 from '../Imagenes_Alvo/175.png';
import img6 from '../Imagenes_Alvo/254.png';
import img7 from '../Imagenes_Alvo/254.png';
import '../components/CardChats.css'

class CardsChats extends Component {
    render() {
        return (

            <div>
                  <div className="center">
                            <div style={{padding: '10px 1px 10px 1px'}}>                         
                                <Card_Chats imgsrc= {img1} name= {"Paula Rossi"} description= { "Hola María, como estás?"}></Card_Chats>
                            </div>

                            <div style={{padding: '10px 1px 10px 1px'}}>                         
                                <Card_Chats imgsrc= {img2} name= {"Victoria Spalletti"} description= {"Dale, estamos en contacto. Saludos"}></Card_Chats>
                            </div>

                            <div style={{padding: '10px 1px 10px 1px'}}>                         
                                  <Card_Chats imgsrc= {img3}  name= {"Álvaro Losano"} description= {"Hi, my name is Álvaro, it's Ok if I speak english?"}></Card_Chats>
                            </div>

                            <div style={{padding: '10px 1px 10px 1px'}}>                         
                                <Card_Chats imgsrc= {img4} name= {"Irina Oscares"} description= {"Hola Paula, me ha encantado el recorrido, te he dejado una reseña"}></Card_Chats> 
                            </div>
                            <div style={{padding: '10px 1px 10px 1px'}}>                         
                                <Card_Chats imgsrc= {img5} name={"Victoria Oscares"} description= {"Thank you Irina, the tour was great !!!"} />
                            </div>
                            <div style={{padding: '10px 1px 10px 1px'}}>                         
                                <Card_Chats imgsrc= {img6} name={"Irina Spalletti" } description= {"Hola, a que hora realizamos el recorrdio hoy ?"}/>
                            </div>
                            <div style={{padding: '10px 1px 10px 1px'}}>                         
                                <Card_Chats imgsrc= {img7} name= {"Victoria Losano"} description= {"Hola, te contacto para avisarte que no voy a poder a las 16, podrás alrededor de las 18?."}/>
                            </div>
                    </div>

            </div>

        );
    }
    }
    export default CardsChats;