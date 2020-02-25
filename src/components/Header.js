import React from 'react'
import Logo from './navbar/logo4.png'

 const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-dark " style={{ backgroundColor: '#d48e4b' }}>
    <a className="navbar-brand ml-5" href="#"><img src={Logo} alt="Logo" style={{width:'50px', paddingBottom: '5px'}}/>WeRaisen</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav m-auto">
        <li className="nav-item active">
          <a className="nav-link ml-3" href="#">Home&nbsp;<i className="fas fa-home"></i> <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link ml-3" href="#">Search</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ml-3" href="#">Perfil</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ml-3" href="#">Mis Chats</a>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
    );

export default Header;