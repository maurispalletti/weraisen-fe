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

    if (this.state.goToChat) {
      return <Redirect to={`/chat`} />
    }

    const { partnerRole, partnerName, chatId, status } = this.props;

    const roleName = partnerRole === 'GUIDE' ? 'Guía' : 'Turista';

    return (
      <div className="GuideCard2">
        <div className="GuideCard">
          <div className="GuideCardText">
            <div className="GuideNameText">Tu {roleName}: {partnerName}</div>
            <div className="GuideText">Estado del encuentro: {status}</div>
          </div>
        </div>
        <div className="buttonCardGuia">
          <input type="button" className={"botonsGuideCard"} value={"Ir al chat"} onClick={() => this.goToChat(chatId)} />
        </div>
      </div>
    )
  }
}