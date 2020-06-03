import React, { Component } from 'react';
import CardNotificaciones from '../src/components/CardNotificacionesAAl';
import Header from '../src/components/Header';
import userServices from './services/userServices'

import CardNotificacion from '../src/components/Card_Notificacion.js';
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
		const { notificacions } = this.state;
		if (notificacions.length > 0) {
			return notificacions.map(notification => {
				const { id, message } = notification
				return (
					<div>
						<CardNotificacion
							key={id}
							imgsrc={img1}
							name={"Paula Rossi"}
							description={message}
							btn1={"Chatear"}
							btn2={"Rechazar"}
						/>
						<br />
					</div>
				)
			});
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
						<h2>Cargando notificaciones...</h2>
					</div>
				</div>
			)
		} else {
			if (this.state.notificationsFailed) {
				return (
					<div>
						<Header />
						<div className="notificacion" style={{ paddingTop: "30px" }}>
							<h2>Ups fallo el servicio de notificaciones</h2>
						</div>
					</div>
				)
			} else {
				return (
					<div>
						<Header />
						<div className="notificacion" style={{ paddingTop: "30px" }}>
							<h2>Mis notificaciones</h2>
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