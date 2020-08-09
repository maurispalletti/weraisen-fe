import React, { Component } from 'react';
import userServices from '../services/userServices';
import '../components/blabla.css';

class CardsAceptar extends Component {
  state = {
    updateFailed: false,
  }

  async updateUserStatus() {
    const { userId } = this.props
    try {
      if (userId) {
        await userServices.updateUserStatus({
          userId,
          status: "ACTIVE"
        })
      }
    } catch (error) {
      console.log(error)
      this.setState({ updateFailed: true })
      console.error(`There was an error trying to add a new user`)
    }
    this.props.refresh()
  }

  async updateUserStatusCancel() {
    const { userId } = this.props
    try {
      if (userId) {
        await userServices.updateUserStatus({
          userId,
          status: "BLOCKED"
        })
        this.setState({ updateFailed: false })
      }
    } catch (error) {
      console.log(error)
      this.setState({ updateFailed: true })
      console.error(`There was an error trying to add a new user`)
    };
    this.props.refresh()
  }

  render() {
    const { dniFirst, dniSecond, profilePicture, firstName, lastName, birthDate, identification } = this.props;

    return (
      <div className="container-aceptar-rechazar">

        <div className="column-container-profile">

          <div className="foto-perfil-container">
            <img className="foto-perfil" alt={'perfil'} width={200} height={200} src={profilePicture} style= {{borderTopRightRadius: '12px', borderTopLeftRadius: '12px', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px' }}/>
          </div>

          <div className="descripcion-profile">
            <p className="descripcion-profile-item"> <strong> Nombre:</strong> {firstName}</p>
            <p className="descripcion-profile-item"> <strong> Apellido:</strong> {lastName}</p>
            <p className="descripcion-profile-item"> <strong> Fecha Nacimiento:</strong> {birthDate}</p>
            <p className="descripcion-profile-item"> <strong> Número DNI:</strong> {identification}</p>
          </div>

        </div>

        <div className="column-container-dni">

          <div className="dni-pictures-container">
            <div className="info-container-dni">
              <a download="dni-front.jpg" href={dniFirst} title="DNI">
                <img alt={'dni-fente'} className="dni-image" src={dniFirst} />
              </a>
              Frente DNI
            </div>
            <div className="info-container-dni">
              <a download="dni-back.jpg" href={dniSecond} title="DNI">
                <img alt={'dni-atras'} className="dni-image" src={dniSecond} />
              </a>
              Dorso DNI
            </div>
          </div>

          <div className="botones-container">
            <button className="boton-profile-dni" value={"Aceptar"} size="sm" onClick={() => this.updateUserStatus()}> Aceptar </button>
            <button className="boton-profile-dni" value={"Aceptar"} size="sm" onClick={() => this.updateUserStatusCancel()}> Rechazar</button>
          </div>

        </div>

      </div>
    );

    // );
    // return (
    //   <div className="contenedor-total">

    //     <div className="contenedor-dni">
    //       <div className="info-container">
    //         Frente DNI
    //         <img alt={'dni-fente'} className="dni-img" src={dniFirst} />
    //       </div>
    //       <div className="info-container">
    //         Dorso DNI
    //         <img alt={'dni-atras'} className="dni-img" src={dniSecond} />
    //       </div>
    //     </div>

    //     <div className='contenedor-perfil'>
    //       <div className="foto-perfil">
    //         <img alt={'perfil'} src={profilePicture} />
    //       </div>
    //       <div className="descripcion">
    //         <p className="" style={{ textAlign: "left", Width: "100px" }}> <strong> Nombre:</strong> {firstName}</p>
    //         <p className="" style={{ textAlign: "left", Width: "100px" }}> <strong> Apellido:</strong> {lastName}</p>
    //         <p className="" style={{ textAlign: "left", Width: "100px" }}> <strong> Fecha Nacimiento:</strong> {birthDate}</p>
    //         <p className="" style={{ textAlign: "left", Width: "100px" }}> <strong> Número DNI:</strong> {identification}</p>
    //       </div>
    //     </div>

    //     <div className="botones-total">
    //       <button className="boton-simple1" value={"Aceptar"} size="sm" onClick={() => this.updateUserStatus()}> Aceptar </button>
    //       <button className="boton-simple1" value={"Aceptar"} size="sm" onClick={() => this.updateUserStatusCancel()}> Rechazar</button>
    //     </div>

    //   </div>


    // );

  }
}

export default CardsAceptar;