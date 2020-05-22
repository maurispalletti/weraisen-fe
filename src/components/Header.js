import React from 'react'
import Logo from './navbar/logo4.png'




 const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-dark " style={{ backgroundColor: '#d48e4b' }}>
    <div className="navbar-brand ml-5"><img src={Logo} alt="Logo" style={{width:'50px', paddingBottom: '5px'}}/>WeRaisen</div>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <a className="nav-link ml-3" style={{color: 'white'}} href="/home">Principal&nbsp;<i className="fas fa-home"></i> <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item" >
          <a className="nav-link ml-3"  style={{color: 'white'}} href="/search">Buscar guía</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link ml-3"style={{color: 'white'}} href="/chats">Mis mensajes</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ml-3" style={{color: 'white'}} href="/notificaciones">Notificaciones</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ml-3" style={{color: 'white'}} href="/Profile">Mi perfil</a>
        </li>
      </ul>
      {/*<form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
 </form>*/}
    </div>
  </nav>
    );

export default Header;