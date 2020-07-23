import React, { Component } from 'react';
import { Redirect } from 'react-router'
import { Button } from 'react-bootstrap';

class Card_Notificacion extends Component {
	state = {
		goToChat: false,
		goToMatches: false
	}

	render() {
		const { name, description, imgsrc } = this.props;
		if (this.state.goToChat) {
			return <Redirect to="/matches" />
		}

		if (this.state.goToMatches) {
			return <Redirect to="/matches" />
		}

		return (
			<div>
				<div className="card col-sm-12 col-xs-12 " style={{ maxWidth: '400px', margin: '0px auto' }} >
					<div className="row no-gutters ">
						<div className="col-sm-12 col-12" style={{ padding: "0px" }}>
							<div className="">
								<p className="card-text" style={{ textAlign: "center" }}>{description}</p>
								<div className="row mb-2">
									<div className="col text-center">
										<Button variant="primary" size="sm" style={{ width: "50%" }} onClick={() => this.setState({ goToChat: true })}>Ver encuentro</Button>
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
export default Card_Notificacion;