import React, { Component } from 'react';
import { Redirect } from 'react-router'
import { Button } from 'react-bootstrap';

class Card_Notificacion2 extends Component {
	state = {
		goToChat: false,
	}

	redirectToChat = () => {
		const { chatId } = this.props;
		localStorage.setItem("chatId", chatId);
		this.setState({ goToChat: true });
	} 
	renderButtons() {
		const { status} = this.props;

		// <Button variant="primary" size="sm" style={{ width: "60%" }} onClick={() => this.setState({ goToReview: true })}>Puntuar</Button>
		if (status === 'Activa') {
		  return (
			<Button variant="primary" size="sm" style={{ width: "60%" }} onClick={() => this.redirectToChat()}>Ir al chat</Button>
			)
		}
		else {
			return(
			<Button variant="primary" size="sm" style={{ width: "60%", cursor:"default", color:"#7c7a7a", borderColor:"#3A3F44" }} disabled="true" onClick={() => this.redirectToChat()}>Ir al chat</Button>

			)
		}
		
	  }
	render() {
		const { name, description, fecha, hora } = this.props;
		if (this.state.goToChat) {
			return <Redirect to="/chat" />
		}
		return (
			<div style={{ paddingLeft: '5%', paddingRight: '5%' }} >
				<div className="card col-sm-12 col-xs-12 " style={{ maxWidth: '400px', margin: '0px auto' }} >
					<div className="row no-gutters ">
						<div className="col-sm-12 col-12">
							<div className="">
								<h5 className="card-title" style={{ marginBottom: "0px" }}>{name}</h5>
								<p className="card-text" style={{ textAlign: "center"}}>{description}</p>
								<div className="row mb-2">
								<div className="col text-center">
							
								{this.renderButtons()}

						
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default Card_Notificacion2;