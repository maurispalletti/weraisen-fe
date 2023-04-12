import React, { Component } from 'react'
import Logo from './navbar/logo4.png'
import alarm from './navbar/alarm.svg'
import userServices from '../services/userServices';

import './Header_Alvo.css'

class Header extends Component {
  state = {
    guias: [],
    ciudades: [],
    initialValues: null,
    newNotifications: false,
  }

  getNotifications = async () => {
    console.log(`Getting notifications...`)
    if (!this.state.newNotifications) {
      try {
        const userId = localStorage.getItem("userId");
        const response = await userServices.getUnreadNotifications(userId)

        if (response.data && response.data.length > 0) {
          this.setState({ newNotifications: true })
        }
      } catch (error) {
        console.error(`There was an error trying to get the notifications`)
        console.error(`Error: ${error}`)
      }
    }
    setTimeout(() => this.getNotifications(), 5000);
  }

  componentDidMount() {
    this.getNotifications();
  }

  render() {
    const currentRoute = window.location.pathname;

    return (
      <nav className="navbar navbar-expand-lg navbar-dark " style={{ alignItems: 'left', backgroundColor: '#d48e4b' }}>
        <div className="navbar-brand ml-5"><img src={Logo} alt="Logo" style={{ width: '50px', marginLeft: '0px', paddingLeft: '0px', paddingBottom: '5px' }} />WeRaisen</div>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          {this.state.newNotifications && <img style={{ height: '24px', width: '24px' }} alt={"Notification"} src={alarm} />}
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav ml-auto">

            <li className={currentRoute.includes("/home") ? "nav-item active" : "nav-item "}>
              <a className="nav-link ml-3 " style={{ color: 'white' }} href="/home">Principal</a>
            </li>

            <li className={currentRoute.includes("/search") ? "nav-item active" : "nav-item "}  >
              <a className="nav-link ml-3 " style={{ color: 'white' }} href="/search">Buscar guía</a>
            </li>

            <li className={currentRoute.includes("/notificaciones") ? "nav-item active" : "nav-item "}>
              <a className="nav-link ml-3" style={{ color: 'white' }} href="/notificaciones">
                {!this.state.newNotifications && 'Notificaciones'}

                {this.state.newNotifications &&
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ marginLeft: 'auto' }}>Notificaciones</div>
                    <div style={{ marginLeft: '5px', marginRight: 'auto' }}><img style={{ height: '24px', width: '24px' }} alt={"Notification"} src={alarm} /></div>
                  </div>
                }
              </a>
            </li>

            <li className={currentRoute.includes("/matches") ? "nav-item active" : "nav-item "}>
              <a className="nav-link ml-3" style={{ color: 'white' }} href="/matches">Mis encuentros</a>
            </li>

            <li className={currentRoute.includes("/profile") ? "nav-item active" : "nav-item "}>
              <a className="nav-link ml-3" style={{ color: 'white' }} href="/Profile">Mi perfil</a>
            </li>

          </ul>

        </div>
      </nav >
    )

  }
};

export default Header;