import React, { Component } from 'react';
// import { Button } from 'react-bootstrap';
import userServices from '../services/userServices';
import CardsAceptar from './CardAceptarRechazarAll.js';

class AceptarRechazar extends Component {
  state = {
    newUsers: [],
    loading: true,
    newUsersFailed: false,
  }

  getaceptNewUser = async () => {
    try {
      const response = await userServices.getaceptNewUser();
      console.log(response.data);
      if (response && response.data) {
        this.setState({ newUsers: response.data, loading: false, bottonPresionado: false }) //Me busca los users, botón sigue en false.
      }
    } catch (error) {
      console.error(`There was an error trying to get new users: ${error}`)
      this.setState({ newUsersFailed: true, loading: false, bottonPresionado: false })
      return null
    }
  }


  renderNewUsers = () => {
    const { newUsers } = this.state
    if (newUsers.length > 0) {
      return newUsers.map(newUser => {
        const { id, profilePicture, dniFirst, dniSecond, firstName, lastName, identification, birthDate } = newUser
        return (
          <div>
            <CardsAceptar
              userId={id}
              profilePicture={profilePicture} //Agregar en Model User (no existe en BE)
              dniFirst={dniFirst}  //Agregar en Model User (no existe en BE)
              dniSecond={dniSecond} //Agregar en Model User (no existe en BE)
              firstName={firstName}
              lastName={lastName}
              identification={identification}
              birthDate={birthDate}
              refresh={() => this.getaceptNewUser()}
            />
            <br></br>
          </div>
        )
      });
    }
  }


  async componentDidMount() {
    this.getaceptNewUser();
  }

  render() {
    if (this.state.loading) {
      return (
        <div>
          <h3 style={{ marginBottom: '18px' }}>Cargando usuarios pendientes de aprobación</h3>
        </div>
      )
    }
    else {
      if (this.newUsersFailed) {
        return (
          <div>
            <h3 style={{ marginBottom: '18px' }}>Ups el servicio ha fallado</h3>
          </div>
        )
      } else {
        return (
          <div>
            <h3 style={{ marginBottom: '18px' }}>Usuarios pendientes de aprobación</h3>
            {this.renderNewUsers()}
          </div>
        )
      }
    }
  }
}

export default AceptarRechazar;
