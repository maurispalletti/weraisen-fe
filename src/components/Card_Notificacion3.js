import React, { Component } from 'react';
import { Redirect } from 'react-router'
import { Button } from 'react-bootstrap';

class Card_Notificacion3 extends Component {
	state = {
		goToSearch: false,
	}

	// const { imagen, nombre, detalle } = props.guia;
	render() {
		const { name, description, fecha, hora } = this.props;
		if (this.state.goToSearch) {
			return <Redirect to="/search" />
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
								<Button variant="primary" size="sm" style={{ width: "50%" }} onClick={() => this.setState({ goToSearch: true })}>Buscar otro guía</Button>

								<p className="card-title" style={{ marginBottom: "0px",   fontSize: '12px'  }}>{fecha}  {hora}</p>

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
export default Card_Notificacion3;