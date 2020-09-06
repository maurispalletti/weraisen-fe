import React, { Component } from 'react';
import { Redirect } from 'react-router'
import { Button } from 'react-bootstrap';

class Card_Notificacion extends Component {
	state = {
		goToChat: false,
		goToMatches: false
	}

	render() {
		const { name, description, fecha, hora, status } = this.props;
		if (this.state.goToChat) {
			return <Redirect to="/matches" />
		}

		if (this.state.goToMatches) {
			return <Redirect to="/matches" />
		}

		return (
			<div style={{ paddingLeft: '5%', paddingRight: '5%' }} >
				<div className="card col-sm-12 col-xs-12 " style={{ maxWidth: '400px', margin: '0px auto' }} >
					<div className="row no-gutters ">
						<div className="col-sm-12 col-12" style={{ padding: "0px" }}>
							<div className="">
								<h5 className="card-title" style={{ marginBottom: "0px" }}>{name}</h5>
								<p className="card-text" style={{ textAlign: "center" }}>{description}</p>
								<div className="row mb-2">
									
									<div className="col text-center">
										<Button variant="primary" size="sm" style={{ width: "60%" }} onClick={() => this.setState({ goToChat: true })}>Ver encuentro</Button>
										{/* <p className="card-title" style={{ marginBottom: "0px", fontSize: '12px' }}>{fecha} {hora}</p> */}
									</div>
									{status === 'Activa' && <div >xxxx</div>}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Card_Notificacion;