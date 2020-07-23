import React from 'react';
import avatar_woman_1 from '../avatars/avatar_1.svg';
import avatar_man_1 from '../avatars/avatar_4.svg';
import { Redirect } from 'react-router'
import userServices from '../services/userServices';
import { Button } from 'react-bootstrap';

export default class Card_Guia extends React.Component {
  state = {
    show: false,
    goToMatches: false,
  }

  async sendMatchRequest() {
    const tourist = localStorage.getItem("userId");
    const guide = this.props.guideId;

    const { data: { chatId } } = await userServices.createMatch({ tourist, guide })

    localStorage.setItem("chatId", chatId);
    this.setState({ goToMatches: true })
  }

  guardarGuia = (guiaIdcard) => {
    localStorage.setItem("detalleGuia", guiaIdcard);
  }

  render() {
    if (this.state.goToMatches) {
      return <Redirect to={`/matches`} />
    }

    const { firstName, lastName, age, gender, languages, description, profilePicture } = this.props;
    const avatar = gender === 'Femenino' ? avatar_woman_1 : avatar_man_1;

    const languagesString = languages.join(', ')

    const guiaSelec = this.props.guideId;

    return (
      <div className="card col-sm-12 col-xs-12" style={{ maxWidth: '400px'}}>



        <div >
          <h3 style={{ textAlign: "center", paddingTop: "10px" }}>{firstName} {lastName}, {age} años </h3>
          <img src={profilePicture} alt={`${firstName} ${lastName}`} style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
        </div>


        <div className="card-body" style={{ padding: '10px 10px 10px 10px', Width: '300px' }}>
          <h4 style={{ textAlign: "center", fontWeight: 'lighter' }}>{description}</h4>
          <h4 style={{ textAlign: "center", fontWeight: 'lighter' }}>Idiomas: {languagesString}</h4>
        </div>
        <a href="/guideView" className="lead" style={{ cursor: 'pointer', fontSize: ' 16px', marginBottom: 20 }} onClick={() => this.guardarGuia(guiaSelec)}>Ver perfil</a>


        <div>
        {/* <div className="row mb-2"> */}
          <div className="center">
            <Button variant="primary" size="sm" style={{ background: '#d48e4b', paddingTop: '5px', margin: 0, marginBottom: 20 }} onClick={() => this.sendMatchRequest()}> Enviar solicitud </Button>
          </div>
        </div>
      </div>


    )
  }
}