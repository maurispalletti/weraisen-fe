import React, { Component } from 'react';
import Header from '../src/components/Header';
import userServices from './services/userServices'

import CardNotificacion from '../src/components/Card_Notificacion.js';
import CardNotificacion1 from '../src/components/Card_Notificacion1.js';
import CardNotificacion0 from '../src/components/Card_Notificacion0.js';
import CardNotificacion2 from '../src/components/Card_Notificacion2.js';
import CardNotificacion3 from '../src/components/Card_Notificacion3.js';

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

	markNotificationsAsRead = async () => {
		try {
			const userId = localStorage.getItem("userId");
			const status = 'Leida';
			await userServices.updateNotifications({ userId, status });
		} catch (error) {
			console.error(`There was an error trying to update notifications: ${error}`)
		}
	}

	renderNotifications = () => {
		const { notificacions } = this.state;

		if (notificacions.length > 0) {
			let hasUnreadNotifications = false;

			const notificationsList = notificacions.map(notification => {
				const { id, message, createdAt, status } = notification;

				if (!hasUnreadNotifications && status === 'Activa') {
					hasUnreadNotifications = true;
				}

				// para mostrar fecha y hora en la card
				const fecha = new Date(createdAt)
				const dia = fecha.getDate()
				const año = fecha.getFullYear()
				const mes = fecha.getMonth() + 1
				const fecha2 = dia + "/" + mes + "/" + año
				const hora = fecha.getUTCHours()
				const minuto = fecha.getUTCMinutes()
				const fecha3 = hora + ":" + minuto

				if (notification.type === "Elegido") { 
					return (
						<div key={id}>
							<CardNotificacion
								key={id}
								description={message}
								fecha={fecha2}
								hora={fecha3}
								status={status}
							/>
								<br />
						</div>
					)
				}
				if (notification.type === "Review") { 
					return (
						<div key={id}>
							<CardNotificacion1
								key={id}
								description={message}
								fecha={fecha2}
								hora={fecha3}
								status={status}
							/>
							<br />
						</div>
					)
				}
				if (notification.type === "Aprobado") { 
					return (
						<div key={id}>
							<CardNotificacion2
								key={id}
								description={message}
								fecha={fecha2}
								hora={fecha3}
								status={status}
								chatId={notification.contentId}
							/>
								<br />
						</div>
					)
				}
				if (notification.type === "Rechazado") {
					return (
						<div key={id}>
							<CardNotificacion3
								key={id}
								description={message}
								fecha={fecha2}
								hora={fecha3}
								status={status}
							/>
										<br />
				
						</div>
					)
				}
				if (notification.type === "Aviso") {
					return (
						<div key={id}>
							<CardNotificacion0
								key={id}
								description={message}
								fecha={fecha2}
								hora={fecha3}
								status={status}
							/>
							<br />
						</div>
					)
				}
				else return null;
			});

			if (hasUnreadNotifications) {
				this.markNotificationsAsRead();
			}

			return notificationsList;

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