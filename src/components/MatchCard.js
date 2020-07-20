import React, { Component } from 'react';
import { Redirect } from 'react-router'
import { Button } from 'react-bootstrap';
import userServices from '../services/userServices'

export default class MatchCard extends Component {
  state = {
    goToChat: false,
  }

  goToChat(chatId) {
    localStorage.setItem("chatId", chatId);
    this.setState({ goToChat: true })
  }

  async updateMatchStatus(newStatus) {
    const { matchId } = this.props
    try {
      const response = await userServices.updateMatchStatus(matchId, newStatus);
      console.log(response)
      this.props.refresh()
    } catch (error) {
      console.error(`There was an error trying to update match: ${error}`)
      return null
    }
  }

  getFormattedDate() {
    const date = new Date(this.props.date);
    const day = date.getDate()
    const month = (date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
    var year = date.getFullYear()

    return day + "/" + month + "/" + year;
  }

  renderButtons() {
    const { status, chatId, partnerRole } = this.props

    if (status === 'Pendiente' && partnerRole === 'TOURIST') {
      return (
        <div className="col text-center" style={{ display: 'flex', flexDirection: 'row' }}>
          <Button variant="primary" size="sm" style={{ width: "50%" }} onClick={() => this.updateMatchStatus('Activo')}>Aceptar</Button>
          <Button variant="primary" size="sm" style={{ width: "50%" }} onClick={() => this.updateMatchStatus('Cancelado')}>Rechazar</Button>
        </div>
      )
    }
    if (status === 'Activo') {
      return (
        <div className="col text-center" style={{ display: 'flex', flexDirection: 'row' }}>
          <Button variant="primary" size="sm" style={{ width: "100%" }} onClick={() => this.goToChat(chatId)}>Ir al chat</Button>
        </div>
      )
    }


    return null;
  }

  render() {
    const { imgsrc, partnerRole, partnerName, status } = this.props;

    const imgsrcWithFallback = imgsrc ? imgsrc : 'https://www.w3schools.com/howto/img_avatar2.png';

    if (this.state.goToChat) {
      return <Redirect to={`/chat`} />
    }

    const roleName = partnerRole === 'GUIDE' ? 'Guía' : 'Turista';

    return (
      <div style={{ marginBottom: 10 }}>
        <div className="card col-sm-12 col-xs-12 " style={{ maxWidth: '400px', margin: '0px auto' }} >
          <div className="row no-gutters ">
            <div className="col-sm-4 col-4" style={{ display: 'flex', alignItems: 'center' }}>
              <img src={imgsrcWithFallback} className="card-img img-fluid" alt="..." />
            </div>
            <div className="col-sm-8 col-8">
              <div style={{ paddingLeft: 20 }}>
                <h3 className="card-title" style={{ marginTop: 10, marginBottom: 10, textAlign: "left" }}>{roleName}: {partnerName}</h3>
                <div className="card-text" style={{ textAlign: "left", width: 'auto' }}>Estado: {status}</div>
                <div className="card-text" style={{ textAlign: "left", width: 'auto' }}>Fecha: {this.getFormattedDate()}</div>
                <div className="row mb-2" style={{ marginTop: 10 }}>
                  {this.renderButtons()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
