import React, { Component } from 'react';
import '../components/Autocomplete.css';
import women from '../avatars/women.jpg';

class AprobarUser extends React.Component {



    render () {
      return (
    
    <div className="card">
    <img src= {women}></img>
    <div className="container">
    <h4><b>Florencia Salusso</b></h4>
    <p>Establecida como guía: 15/11/2019</p>
    </div>
     <button className= "btn"> ACEPTAR </button>
    </div>
      );
    }
}

export default AprobarUser;
