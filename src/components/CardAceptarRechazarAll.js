import React, { Component } from'react';
import CardAceptarRechazar from './CardAceptarRechazar';
import img1 from '../avatars/dni.jpg';
import img2 from '../avatars/dni.jpg';
import img3 from '../avatars/avatar_3.svg';
import '../components/blabla.css';
import userServices from '../services/userServices';


class CardsAceptar extends React.Component {
  
  state = {
     updateFailed: false,
     
  }
  
  async updateUserStatus() {
    const{userId} = this.props
    try {
      console.log("ENTROOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO2222222")  
      
      if (userId) {
        console.log(userId)
        const response = await userServices.updateUserStatus({
          userId,
          status: "ACTIVE"
        })

        console.log(response);
       
         this.setState({ updateFailed: false})
        
       } 
       
      
      } catch (error) {
      console.log(error)
      this.setState({ updateFailed: true })
      console.error(`There was an error trying to add a new user`)
      };
    
  }
 
  async updateUserStatusCancel() {
    const{userId} = this.props
    try {
      console.log("ENTROOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO2222222")  
      
      if (userId) {
        console.log(userId)
        const response = await userServices.updateUserStatus({
          userId,
          status: "BLOCKED"
        })

        console.log(response);
       
         this.setState({ updateFailed: false})
       } 
       
      
      } catch (error) {
      console.log(error)
      this.setState({ updateFailed: true })
      console.error(`There was an error trying to add a new user`)
      };
    
  }
 
    
   
  
  render () {
   const {userId, dniFirst, dniSecond, profilePicture, firstName, lastName,birthDate, identification, bottonPresionado} = this.props;
    // me llega como parámetro el bottonPresionado true, pero no pudimos hacer que se reenderice la tarjeta cuando se presiona aceptar. 
    return (
        
        <div className="contenedor-total">
             <div className="contenedor-dni">
              <div className="info-container">
                Frente DNI
                <img className="dni-img" src={dniFirst} />
              </div>
              <div className="info-container">
                Dorso DNI
                <img className="dni-img" src={dniSecond} />
              </div>
            </div>
  
            <div className='contenedor-perfil'>
              <div className="foto-perfil">
                <img src={profilePicture}/>
              </div>
              <div className="descripcion">
                 
                 <p className=""style={{ textAlign: "left", Width: "100px" }}> <strong> Nombre:</strong> {firstName}</p>
                 <p className=""style={{ textAlign: "left", Width: "100px" }}> <strong> Apellido:</strong> {lastName}</p>
                 <p className=""style={{ textAlign: "left", Width: "100px" }}> <strong> Fecha Nacimiento:</strong> {birthDate}</p>
                 <p className=""style={{ textAlign: "left", Width: "100px" }}> <strong> Número DNI:</strong> {identification}</p>
              </div>
            </div>
  
          <div className="botones-total">
            <button className ="boton-simple1" value={"Aceptar"} size="sm" onClick={() => this.updateUserStatus()}> Aceptar </button>
            <button className ="boton-simple1" value={"Aceptar"} size="sm" onClick={() => this.updateUserStatusCancel() }> Rechazar</button>
          </div>
  
          </div>
                 
    
        );
    }}
    
    export default CardsAceptar;