import React from 'react';
import { Redirect } from 'react-router'

export default class MatchCard extends React.Component {
  state = {
    goToChat: false,
  }

  goToChat(chatId) {
    localStorage.setItem("chatId", chatId);
    this.setState({ goToChat: true })
  }

  getFormattedDate() {
    const date = new Date(this.props.date);
    const day = date.getDate()
    const month = (date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
    var year = date.getFullYear()

    return day + "/" + month + "/" + year;
}

  render() {
    const { partnerRole, partnerName, chatId, status } = this.props;
    // const disabled = status !== 'Activo' && status !== 'Iniciado';

    if (this.state.goToChat) {
      return <Redirect to={`/chat`} />
    }

    const roleName = partnerRole === 'GUIDE' ? 'Guía' : 'Turista';

    return (
      <div className="GuideCard2">
        <div className="GuideCard">
          <div className="GuideCardText">
            <div className="GuideNameText">Tu {roleName}: {partnerName}</div>
            <div className="GuideText">Estado: {status}</div>
            <div className="GuideText">Fecha: {this.getFormattedDate()}</div>
          </div>
        </div>
        <div className="buttonCardGuia" >
          <input type="button" className={"buttonMatchCard"} value={"Ir al chat"}
            // disabled={disabled}
            onClick={() => this.goToChat(chatId)} />
        </div>
      </div>
    )
  }
}
