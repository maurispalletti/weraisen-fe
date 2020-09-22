import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Redirect } from 'react-router'
import userServices from '../../../services/userServices'

class AgendaModal extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      fecha: Date(),
      value: '',
      min: '',
      goToChat: false
    }
  }
  componentDidMount() {
    this.getDateMatch()

    let hoy = new Date();

    const dia = hoy.getDate();
    let mes = (hoy.getMonth() + 1);
    mes = mes.toString()
    mes = mes.length === 1 ? "0" + mes : mes
    const año = hoy.getFullYear();

    hoy = año + "-" + mes + "-" + dia + "T00:00";

    this.setState({ min: hoy });
  }

  getDateMatch = async () => {
    let chatId = this.state.chatId || localStorage.getItem("chatId");
    let match;

    try {
      const response = await userServices.getMatchByChatId(chatId)
      if (response.data) {
        match = response.data
        // const date = new Date(match.matchDate);
        var date = new Date(match.matchDate);

        const day = date.getUTCDate()
        const newMonth = date.getMonth() + 1
        const month = newMonth < 10 ? `0${newMonth}` : newMonth
        var year = date.getFullYear()
        date = year + "-" + month + "-" + day + "T12:00";

        this.setState({
          fecha: date
        })
      }

    } catch (error) {
      console.error(`There was an error trying to get the match`)
      console.error(`Error: ${error}`)
    }

  }

  async updateMatchDate(date) {
    console.log(date)
    let chatId = this.state.chatId || localStorage.getItem("chatId");
    let match;
    let matchId;
    const response = await userServices.getMatchByChatId(chatId)
    if (response.data) {
      match = response.data
      matchId = match.id
    }

    try {
      var now = new Date(date);

      const day = now.getUTCDate()
      const month = (now.getMonth()) < 10 ? `0${now.getMonth()}` : now.getMonth()
      var year = now.getFullYear()
      var hour = now.getHours()
      var minute = now.getMinutes()
      var start = [year,now.getMonth() + 1, day, hour, minute]
      var matchDate = new Date(Date.UTC(year, month, day, hour, minute, 0, 0))

      await userServices.updateMatchDate(matchId, matchDate);
      //manod mail
      await userServices.sendEmailEncuentro({
        match: match,
        FechaHoraEncuentro: start
      })
      this.setState(() => ({ goToChat: true }));
    } catch (error) {
      console.error(`There was an error trying to update match: ${error}`)
      return null
    }
  }
  

  handleChange = (event) => {
    this.setState({ fecha: event.target.value });
  }

  render() {
    if (this.state.goToChat) {
      return <Redirect to="/chat" />
    }
    return (

      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h2> Agendar encuentro</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 align="Left"> Registrá la fecha y hora del encuentro </h5>
          <br></br>
          <div>

            <div className="checkbox" style={{ textAlign: "center" }}>

              <input style={{ margin: "0px auto" }}
                placeholder="Fecha recorrido"
                className="input"
                min={this.state.min}
                value={this.state.fecha}
                onChange={this.handleChange}
                required
                type="datetime-local" />

            </div>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => this.updateMatchDate(this.state.fecha)}>Agendar</Button>         
          <Button onClick={() => this.setState({ goToChat: true })}>Cancelar</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default AgendaModal;