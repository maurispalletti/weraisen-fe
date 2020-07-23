import React, { Component } from 'react';
import Header from '../src/components/Header';
import userServices from './services/userServices'

import CardNotificacion from '../src/components/Card_Notificacion.js';
import CardNotificacion1 from '../src/components/Card_Notificacion1.js';
import CardNotificacion0 from '../src/components/Card_Notificacion0.js';
import CardNotificacion2 from '../src/components/Card_Notificacion2.js';
import CardNotificacion3 from '../src/components/Card_Notificacion3.js';

import img1 from '../src/Imagenes_Alvo/448.png';

class Notificacion extends Component {
	state = {
		notificacions: [],
		loading: true,
		notificationsFailed: false,
	}

	getNotifications = async () => {
		try {
			const userId = localStorage.getItem("userId");
			//hacer llamada al getendend.... en matchdelegate
			const response = await userServices.getNotifications(userId);			
			if (response && response.data) {
				this.setState({ notificacions: response.data, loading: false })
			}
		} catch (error) {
			console.error(`There was an error trying to get notifications: ${error}`)
			this.setState({ notificationsFailed: true, loading: false })
			return null
		}
	}

	renderNotifications = () => {
		console.log(this.state)
		const { notificacions } = this.state;
		console.log(notificacions.length)
		if (notificacions.length > 0) {
			
			return notificacions.map(notification => {
				const { id, message } = notification

				if (notification.type === "Elegido"){ //falta enviar usuario para chat, y encuentro para cancelar
					return (
						<div>
							<CardNotificacion
								key={id}
								imgsrc={img1} 
								description={message} 
							/>
							<br />
						</div>
					)					
				}

				if (notification.type === "Review"){ //falta enviar el usuario a la que se le va a hacer la review
					return (
						<div>
							<CardNotificacion1
								key={id}
								imgsrc={img1}
								description={message}
							/>
							<br />
						</div>
					)
				}
				
				if (notification.type === "Aprobado"){ //falta enviar usuario para chat
					return (
						<div>
							<CardNotificacion2
								key={id}
								imgsrc={img1}
								description={message}
								
							/>
							<br />
						</div>
					)
				}				
				if (notification.type === "Rechazado"){
					return (
						<div>
							<CardNotificacion3
								key={id}
								imgsrc={img1}
								description={message}
							/>
							<br />
						</div>
					)
				}
				if (notification.type === "Aviso"){
						return (
							<div>
								<CardNotificacion0
									key={id}
									imgsrc={img1}
									description={message}
								/>
								<br />
							</div>
						)	
				}
				else return null;
			});
		}
		else {
			return (
				<div className="notificacion" style={{ paddingTop: "30px" }}>
						<h2>Aún no tenes ninguna notificación.</h2>
					</div>
			)
		}
	}


	async componentDidMount() {
		this.getNotifications();
	}

	render() {
		if (this.state.loading) {
			return (
				<div>
					<Header />
					<div className="notificacion" style={{ paddingTop: "30px" }}>
						<h2>Cargando tus notificaciones...</h2>
					</div>
				</div>
			)
		} else {
			if (this.state.notificationsFailed) {
				return (
					<div>
						<Header />
						<div className="notificacion" style={{ paddingTop: "30px" }}>
						La búsqueda de notificaciones falló. Intentá de nuevo por favor.
							<p className="form-error">
                     
                   </p>
						</div>
					</div>
				)
			} else {
				return (
					<div>
						<Header />
						<div className="notificacion" style={{ paddingTop: "30px" }}>
							<h2>Notificaciones</h2>
						</div>
						<div style={{ paddingTop: "20px" }}>
							{this.renderNotifications()}
						</div>
					</div>
				);
			}
		}
	}
}
export default Notificacion;