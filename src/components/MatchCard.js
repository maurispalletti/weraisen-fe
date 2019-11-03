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

  render() {
    const { partnerRole, partnerName, chatId, status } = this.props;
    const disabled = status !== 'Activo' && status !== 'Iniciado';

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
          </div>
        </div>
        <div className="buttonCardGuia" >
          <input type="button" className={disabled ? "disabledButtonMatchCard" : "buttonMatchCard"} value={"Ir al chat"} 
            disabled={disabled} onClick={() => this.goToChat(chatId)} />
        </div>
      </div>
    )
  }
}


