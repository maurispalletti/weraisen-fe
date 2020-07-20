import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import userServices from '../services/userServices';
import CardsAceptar from './CardAceptarRechazarAll.js';
import img1 from '../avatars/dni.jpg';
import img2 from '../avatars/dni.jpg';
import img3 from '../avatars/avatar_3.svg';

class AceptarRechazar extends Component {

  

  state = {
    newUsers: [],
    loading: true,
    newUsersFailed: false,
    bottonPresionado: false //Cuando se me trae todos los usuarios pendientes, aún no he presionado el botón que acepta los mismos.
  }
  getaceptNewUser = async () => {
    if (!this.state.bottonPresionado)
    {
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
  }


  renderNewUsers = () => {
    const { newUsers } = this.state
    if (newUsers.length > 0) {
      return newUsers.map(newUser => {
        const { id, profilePicture, dniFirst, dniSecond, firstName, lastName, identification, birthDate} = newUser
        return (
          <div>
          <CardsAceptar
            userId = {id}
            profilePicture={profilePicture} //Agregar en Model User (no existe en BE)
            dniFirst={dniFirst}  //Agregar en Model User (no existe en BE)
            dniSecond={dniSecond} //Agregar en Model User (no existe en BE)
            firstName={firstName}
            lastName= {lastName}
            identification={identification}
            birthDate={birthDate}
            bottonPresionado={() => this.setState({bottonPresionado: true})} //En la card le seteo el estado a true ya que si acepta al user, se reenderizará y se eliminará el user
                                                                              // se lo paso por parámetro a CardAceptarRechazarAll que posee el componente para dibujar la card
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
 render () {
   if (this.state.loading){
     return (
      <div>
       <h3 style={{marginBottom:'18px'}}>Cargando usuarios pendientes de aprobación</h3>
      </div>
     )
    }
     else {
       if (this.newUsersFailed) {
        return (
          <div>
            <h3 style={{marginBottom:'18px'}}>Ups el servicio ha fallado</h3>
         </div>
        )
        
       } else {
      return(
        <div>
          <h3 style={{marginBottom:'18px'}}>Usuarios pendientes de aprobación</h3>
          {this.renderNewUsers()}
       </div>
      )
       }
     }
    }
  }


export default AceptarRechazar;
