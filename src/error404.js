import React, { Component } from 'react'
import './error404.css'

import logo from './icons/WER-VERDE.png'

class Error extends Component {
    
  
  
    render() {
     return(
      <div className="page">

<img src={logo} alt={"WeRaisen"} width="300" />
      <div className="princ">
      <a href="/Home" className=""><input type="submit" className="btn-primero" value="Volver al inicio" /> </a>
      </div>
    </div> 
      )
    }
      };

      export default Error;