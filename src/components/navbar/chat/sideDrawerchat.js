
//import React from 'react';
import './sideDrawerchat.css';
import React, { Component } from 'react';
//import { DenunciaModal } from '.../Component/DenunciaPopUp';
import DenunciaModalAlvo from './DenunciaModal_Alvo';
import userServices from '../../../services/userServices';
import Matches from '../../../Matches';
import MatchCard from '../../MatchCard';
import { Redirect } from 'react-router'
class sideDrawerchat extends Component {
	state = {
   notifications: false
	}

	constructor(props) {
		super(props);
		this.state = {
			denunciaModalShow: false
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


	
	render() {
		const denunciaModalClose = () => this.setState({ denunciaModalShow: false });
		if (this.state.notifications) {
			return <Redirect to="/notificaciones" />
		  }
		return (
			<nav className="side-drawerchat">
				<ul>
					<li><a style={{ color: '#272b30' }} href="/chat">Cancelar encuentro</a></li>
					<li><a style={{ color: '#272b30' }} onClick={() => this.setState({ denunciaModalShow: true })}>Denunciar</a></li>
					<li><a style={{ color: '#272b30' }} onClick={() => this.goToNotifications()}>Finalizar</a></li>
				</ul>
				<DenunciaModalAlvo
					show={this.state.denunciaModalShow}
					onHide={denunciaModalClose}
				/>
			</nav>
		);
	}
};





export default sideDrawerchat;