import React from 'react';
import avatar_woman_1 from '../avatars/avatar_1.svg';
import avatar_man_1 from '../avatars/avatar_4.svg';
import { Redirect } from 'react-router'
import userServices from '../services/userServices';

export default class GuideCard extends React.Component {
  state = {
    show: false,
    goToChat: false,
  }

  async goToChat() {

    const tourist = localStorage.getItem("userId");

    const guide = this.props.guideId;

    const { data: { chatId } } = await userServices.createMatch({ tourist, guide })

    localStorage.setItem("chatId", chatId);

    this.setState({ goToChat: true })
  }

  render() {

    if (this.state.goToChat) {
      return <Redirect to={`/chat`} />
    }

    const { firstName, lastName, city, age, gender, languages, knowledge, description, profilePicture } = this.props;
    // const avatar = gender === 'Femenino' ? avatar_woman_1 : avatar_man_1;

    const languagesString = languages.join(', ')
    const knowledgeString = knowledge.join(', ')

    return (
      <div className="GuideCard2">
        <div onClick={() => this.setState({ show: !this.state.show })} className="GuideCard">
          <div className="GuideCardText">
            <div className="GuideNameText">{firstName} {lastName}</div>
            <div className="GuideText">Ciudad: {city}</div>
            <div className="GuideText">Edad: {age}</div>
            <div className="GuideText">Idiomas: {languagesString}</div>
            {this.state.show && <div className="GuideText">Descripción: {description}</div>}
            {this.state.show && <div className="GuideText">Conocimientos: {knowledgeString}</div>}
          </div>
          <div className="ImageCard">
            <img className="ProfilePicture" src={profilePicture} alt={`${firstName} ${lastName}`} />
          </div>
        </div>
        <div className="buttonCardGuia">
          <input type="button" className={"botonsGuideCard"} value={"Iniciar chat"} onClick={() => this.goToChat()} />
        </div>
      </div>
    )
  }
}