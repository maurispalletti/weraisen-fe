import React, { Component } from 'react';
import CardChats from './Card_Chats.js';
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
					<div style={{ padding: '10px 1px 10px 1px' }}>
						<CardChats imgsrc={img1} name={"Paula Rossi"} description={"Hola María, como estás?"}></CardChats>
					</div>

					<div style={{ padding: '10px 1px 10px 1px' }}>
						<CardChats imgsrc={img2} name={"Victoria Spalletti"} description={"Dale, estamos en contacto. Saludos"}></CardChats>
					</div>

					<div style={{ padding: '10px 1px 10px 1px' }}>
						<CardChats imgsrc={img3} name={"Álvaro Losano"} description={"Hi, my name is Álvaro, it's Ok if I speak english?"}></CardChats>
					</div>

					<div style={{ padding: '10px 1px 10px 1px' }}>
						<CardChats imgsrc={img4} name={"Irina Oscares"} description={"Hola Paula, me ha encantado el recorrido, te he dejado una reseña"}></CardChats>
					</div>
					<div style={{ padding: '10px 1px 10px 1px' }}>
						<CardChats imgsrc={img5} name={"Victoria Oscares"} description={"Thank you Irina, the tour was great !!!"} />
					</div>
					<div style={{ padding: '10px 1px 10px 1px' }}>
						<CardChats imgsrc={img6} name={"Irina Spalletti"} description={"Hola, a que hora realizamos el recorrdio hoy ?"} />
					</div>
					<div style={{ padding: '10px 1px 10px 1px' }}>
						<CardChats imgsrc={img7} name={"Victoria Losano"} description={"Hola, te contacto para avisarte que no voy a poder a las 16, podrás alrededor de las 18?."} />
					</div>
				</div>

			</div>

		);
	}
}
export default CardsChats;