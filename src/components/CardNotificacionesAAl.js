import React, { Component } from 'react';
import CardNotificacion from './Card_Notificacion.js';
import img1 from '../Imagenes_Alvo/448.png';
import img2 from '../Imagenes_Alvo/006.png';
import img3 from '../Imagenes_Alvo/135.png';
import img4 from '../Imagenes_Alvo/142.png';
import img5 from '../Imagenes_Alvo/175.png';
import img6 from '../Imagenes_Alvo/254.png';
import img7 from '../Imagenes_Alvo/254.png';
import '../components/CardNotificaciones.css'

class CardsNotificaciones extends Component {
	render() {
		return (
			<div>
				<div >
					<CardNotificacion imgsrc={img1} name={"Paula Rossi"} description={["Te ha ", <strong className='chose'>elegido</strong>, " como guía"]} btn1={"Chatear"} btn2={"Rechazar"}></CardNotificacion>
				</div>

				<div>
					<CardNotificacion imgsrc={img2} name={"Victoria Spalletti"} description="Te ha dejado una reseña" btn1={"Leer"} btn2={"Cerrar"} />
				</div>

				<div>
					<CardNotificacion imgsrc={img3} name={"Álvaro Losano"} description={[" Te ha ", <strong className='cancel'>cancelado</strong>, " el recorrido"]} btn1={"Buscar guía"} btn2={"Cerrar"}></CardNotificacion>
				</div>

				<div >
					<CardNotificacion imgsrc={img4} name={"Irina Oscares"} description={[" Te ha ", <strong className='chose'>elegido</strong>, " como guía"]} btn1={"Chatear"} btn2={"Rechazar"}></CardNotificacion>
				</div>
				<div>
					<CardNotificacion imgsrc={img5} name={"Victoria Oscares"} description=" Te ha dejado una reseña" btn1={"Leer"} btn2={"Cerrar"} />
				</div>
				<div>
					<CardNotificacion imgsrc={img6} name={"Irina Spalletti"} description={["Te ha ", <strong className='cancel'>cancelado</strong>, " el recorrido"]} btn1={"Buscar guía"} btn2={"Cerrar"} />
				</div>
				<div>
					<CardNotificacion imgsrc={img7} name={"Victoria Losano"} description=" Te ha dejado una reseña" btn1={"Leer"} btn2={"Cerrar"} />
				</div>
			</div>



		);
	}
}
export default CardsNotificaciones;