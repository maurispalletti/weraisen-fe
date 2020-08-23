import React from 'react';
import { Redirect } from 'react-router'
import userServices from '../services/userServices';
import { Button } from 'react-bootstrap';
import img2 from '../icons/estrella.png';

export default class Card_Guia extends React.Component {
  state = {
    show: false,
    goToMatches: false,
    average: 0,
    loading: true,
  }
  async componentDidMount() {
    await this.getPromedio();

  }

  async sendMatchRequest() {
    const tourist = localStorage.getItem("userId");
    const guide = this.props.guideId;
    const city = this.props.city;
    const knowledge = this.props.knowledge;
    let matchDate = sessionStorage.getItem("matchDate");
    const { data: { chatId } } = await userServices.createMatch({ tourist, guide, city, knowledge, matchDate})

    localStorage.setItem("chatId", chatId);
    this.setState({ goToMatches: true })
  }

  guardarGuia = (guiaIdcard) => {
    localStorage.setItem("detalleGuia", guiaIdcard);
  }

  calcularEdad = (birthDate) => {
    const cumple = new Date(birthDate)
    
    const hoy = new Date();
    let age = hoy.getFullYear() - cumple.getFullYear();
    const m = hoy.getMonth() - cumple.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumple.getDate())) {
      age--;
    }

    return age;
  }

  getPromedio = async () => {
    const userId = this.props.guideId;
    let response = await userServices.getReviews(userId)

    let promedioPuntos = 0
    if (response.data.length > 0) {

      let suma = 0

      response.data.forEach(review => {

        suma += review.points
      });
      promedioPuntos = (suma / response.data.length)

    } else {
      promedioPuntos = 0
    }

    this.setState({ average: promedioPuntos, loading: false })

  }

  render() {
    if (this.state.goToMatches) {
      return <Redirect to={`/matches`} />
    }
    if (!this.state.loading) {

      const {  firstName, lastName, birthDate, languages, description, profilePicture } = this.props;
      let average = 0;

      const languagesString = languages.join(', ')
      let age = this.calcularEdad(birthDate);
      const guiaSelec = this.props.guideId;

      average = this.state.average;
      
      return (
        <div className="card col-sm-12 col-xs-12" style={{ maxWidth: '400px', margin:'0px auto'  }}>

          <div >
            <h3 style={{ textAlign: "center", paddingTop: "10px" }}>{firstName} {lastName}, {age} años </h3>
            <img src={profilePicture} alt={`${firstName} ${lastName}`} style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
          </div>

          <div className="card-body" style={{ padding: '10px 10px 10px 10px', Width: '300px' }}>
            {(average > 0 &&
              <h4>{average} <img alt='img2' style={{ verticalAlign: "0", paddingLeft: '2px', fontWeight: "bold" }} src={img2} width={13}></img></h4>)}
            <h4 style={{ textAlign: "center", fontWeight: 'lighter' }}>{description}</h4>
            <h4 style={{ textAlign: "center", fontWeight: 'lighter' }}>Idiomas: {languagesString}</h4>
          </div>
          <a href="/guideView" className="lead" style={{ cursor: 'pointer', fontSize: ' 16px', marginBottom: 20 }} onClick={() => this.guardarGuia(guiaSelec)}>Ver perfil</a>

          <div>
            <div className="center">
              <Button variant="primary" size="sm" style={{ background: '#d48e4b', paddingTop: '5px', margin: 0, marginBottom: 20 }} onClick={() => this.sendMatchRequest()}> Enviar solicitud </Button>
            </div>
          </div>
        </div>

      )
    } else {
      return (<h3 style={{ textAlign: "center", paddingTop: "10px" }}> </h3>)
    }
  }
}
