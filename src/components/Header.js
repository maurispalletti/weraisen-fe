import React from 'react'
import Logo from './navbar/logo4.png'
import { useHistory } from "react-router-dom";
import './Header_Alvo.css'



 const Header = () => {
  const currentRoute = useHistory().location.pathname.toLowerCase();
  console.log(currentRoute);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark " style={{alignItems:'left', backgroundColor: '#d48e4b' }}>
    <div className="navbar-brand ml-5"><img src={Logo} alt="Logo" style={{width:'50px', marginLeft:'0px', paddingLeft:'0px', paddingBottom: '5px'}}/>WeRaisen</div>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav ml-auto">
        <li className={currentRoute.includes("/home") ? "nav-item active" : "nav-item "}>
          <a className="nav-link ml-3 " style={{color: 'white'}} href="/home">Principal</a>
        </li>

        <li  className={currentRoute.includes("/search") ? "nav-item active" : "nav-item "}  >
          <a className="nav-link ml-3 " style={{color: 'white'}} href="/search">Buscar guía</a>
        </li>

        <li className={currentRoute.includes("/notificaciones") ? "nav-item active" : "nav-item "}>
          <a className="nav-link ml-3" style={{color: 'white'}} href="/notificaciones">Notificaciones</a>
        </li>
        <li className={currentRoute.includes("/matches") ? "nav-item active" : "nav-item "}>
          <a className="nav-link ml-3"style={{color: 'white'}} href="/matches">Mis encuentros</a>
 
        </li>
  
        <li className={currentRoute.includes("/profile") ? "nav-item active" : "nav-item "}>
          <a className="nav-link ml-3" style={{color: 'white'}} href="/Profile">Mi perfil</a>
        </li>
      </ul>

    </div>
  </nav>
    )};

export default Header;