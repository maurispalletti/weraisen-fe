
//import React from 'react';
import './sideDrawerchat.css';
import React, { Component } from 'react';
//import { DenunciaModal } from '.../Component/DenunciaPopUp';
import DenunciaModalAlvo from './DenunciaModal_Alvo';
import AgendaModal from './AgendaModal';
import userServices from '../../../services/userServices';


import { Redirect } from 'react-router'
class sideDrawerchat extends Component {
	

	constructor(props) {
		super(props);
		this.state = {
			denunciaModalShow: false,
			notifications: false,
			goToMatches: false,
			agendaModalShow: false
		}
	}

		
	async goToNotifications() {
		try {
		  const status = 'Finalizado'
		  await userServices.updateMatchStatus(localStorage.getItem("matchId"), status)
		  this.setState({ notifications: true })
	
		} catch (error) {
		  console.error(`There was an error ending match`)
		  console.error(`Error: ${error}`)
		}
	}

	async cancelMatch() {
		 
		try {
		  const status = 'Cancelado'
		 
		  await userServices.updateMatchStatus(localStorage.getItem("matchId"), status)
		  this.setState({ goToMatches: true })
		} catch (error) {
		  console.error(`There was an error canceling match`)
		  console.error(`Error: ${error}`)
		}
	  }

	  async endMatch() {
		 
		try {
		  const status = 'Finalizado'
		 
		  await userServices.updateMatchStatus(localStorage.getItem("matchId"), status)
		  this.setState({ notifications: true })
		} catch (error) {
		  console.error(`There was an error canceling match`)
		  console.error(`Error: ${error}`)
		}
	  }
	
	render() {
		const agendaModalClose = () => this.setState({ agendaModalShow: false})
		const denunciaModalClose = () => this.setState({ denunciaModalShow: false });
		if (this.state.notifications) {
			return <Redirect to="/notificaciones" />
		  }
		  if (this.state.goToMatches) {
			return <Redirect to="/matches" />
		  }
		return (
			<nav className="side-drawerchat">
				<ul>
					<li><div  onClick={() => this.setState({ agendaModalShow: true })}>Agendar encuentro</div></li>
					<li><div  onClick={() => this.cancelMatch()}>Cancelar encuentro</div></li>
					<li><div  onClick={() => this.endMatch()}>Finalizar encuentro</div></li>
					<li><div  onClick={() => this.setState({ denunciaModalShow: true })}>Denunciar</div></li>
					
				</ul>
				<DenunciaModalAlvo
					show={this.state.denunciaModalShow}
					onHide={denunciaModalClose}
				/>
				<AgendaModal
					show={this.state.agendaModalShow}
					onHide={agendaModalClose}
				/>
			</nav>
		);
	}
};





export default sideDrawerchat;