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
      await userServices.updateMatchStatus(matchId, newStatus);
      this.props.refresh()
    } catch (error) {
      console.error(`There was an error trying to update match: ${error}`)
      return null
    }
  }

  getFormattedDate(dat) {
    if (dat !== undefined) {
      const date = new Date(dat);
      const day = date.getUTCDate()
      let hour = ('0' + date.getUTCHours()).slice(-2)
      let minute = ('0' + date.getMinutes()).slice(-2)
      const month = (date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
      var year = date.getFullYear()
      if (hour !== "00") {
        return day + "/" + month + "/" + year + "  " + (hour - 3) + ":" + minute;
      }
      else {
        return day + "/" + month + "/" + year;

      }
    }
  }
  getFormattedDateN(dat) {
    if (dat !== undefined) {
      const date = new Date(dat);
      const day = date.getUTCDate()
      let hour = ('0' + date.getUTCHours()).slice(-2)
      let minute = ('0' + date.getMinutes()).slice(-2)
      const month = (date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
      var year = date.getFullYear()
      if (hour !== "00") {
        return day + "/" + month + "/" + year + "  " + hour + ":" + minute;
      }
      else {
        return day + "/" + month + "/" + year;

      }
    }
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

  renderStatus() {
    const { status } = this.props

    if (status === 'Pendiente') {
      return (
        <h3 className="card-text" style={{ textAlign: "center", width: 'auto' }}>Esperando aprobación </h3>
      )
    }
    if (status === 'Activo') {
      return (
        <h4 className="card-text" style={{ textAlign: "center", width: 'auto', color: '#3AA02C' }}>Encuentro activo </h4>
      )
    }
    if (status === 'Finalizado') {
      return (
        <h3 className="card-text" style={{ textAlign: "center", width: 'auto' }}>Encuentro finalizado </h3>
      )
    }
    if (status === 'Cancelado') {
      return (
        <h4 className="card-text" style={{ textAlign: "center", width: 'auto', color: '#F03131' }}> Encuentro cancelado  </h4>
      )
    }
    if (status === 'Anulado') {
      return (
        <h3 className="card-text" style={{ textAlign: "center", width: 'auto' }}>Solicitud rechazada</h3>
      )
    }


  }

  render() {
    const { partnerRole, partnerName, profilePicture } = this.props;

    const imgsrcWithFallback = profilePicture ? profilePicture : 'https://www.w3schools.com/howto/img_avatar2.png';

    if (this.state.goToChat) {
      return <Redirect to={`/chat`} />
    }

    const roleName = partnerRole === 'GUIDE' ? 'Guía' : 'Turista';

    return (
      <div style={{ marginBottom: 10 }}>
        <div className="card col-sm-12 col-xs-12 " style={{ maxWidth: '400px', margin: '0px auto' }} >
          <div className="row no-gutters ">
            <div className="col-sm-4 col-4" style={{ display: 'flex', alignItems: 'center', marginTop: 10, marginBottom: 10 }}>
              <img src={imgsrcWithFallback} style={{ width: '100px', height: '100px', objectFit: 'cover' }} className="card-img img-fluid" alt="..." />
            </div>
            <div className="col-sm-8 col-8"  >
              <div style={{ paddingLeft: 20, textAlign: 'center' }}>
                <h3 className="card-title" style={{ marginTop: 18, marginBottom: 10, textAlign: "center" }}>{roleName}: {partnerName}</h3>
                <br></br>
                <div><h6 className="card-text" style={{ textAlign: "center", width: 'auto', color: 'white' }}>Fecha del encuentro: {this.getFormattedDateN(this.props.matchDate)} </h6></div>
                <br></br>
                <div> {this.renderStatus()} </div>
                <br></br>
                <div className="row mb-2" style={{ marginTop: 10 }}>
                  {this.renderButtons()}
                </div>
                <div> <h6 className="card-text" style={{ textAlign: "right", marginBottom: '10px', width: 'auto', color: '#96989A', fontSize: '11px' }}>{this.getFormattedDate(this.props.date)} </h6></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
