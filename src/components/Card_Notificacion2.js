import React, { Component } from 'react';
import { Redirect } from 'react-router'
import { Button } from 'react-bootstrap';

class Card_Notificacion2 extends Component {
	state = {
		goToChat: false,
	}

	render() {
		const { name, description, imgsrc, fecha, hora } = this.props;
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
										<h5 className="card-title" style={{ marginBottom: "0px" }}>{fecha}</h5>
										<h5 className="card-title" style={{ marginBottom: "0px" }}>{hora}</h5>
									</div>
									<div className="col text-center">
										<Button variant="primary" size="sm" style={{ width: "60%" }} onClick={() => this.setState({ goToChat: true })}>Ir al chat</Button>
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