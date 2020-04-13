import React, { Component } from 'react';
import './Search.css';
import Toolbar from './components/navbar/toolbar'
import SideDrawer from './components/navbar/sideDrawer/sideDrawer'
import Backdrop from './components/navbar/backdrop/backdrop'
import { Redirect } from 'react-router'
import { Formik, Form } from 'formik'
import neuquen from './avatars/ciudades/neuquen.png'
import mendoza from './avatars/ciudades/mendoza.png'
import bsas from './avatars/ciudades/bsas.png'
import cordoba from './avatars/ciudades/cordoba.png'
import laplata from './avatars/ciudades/laplata.png'
import mardel from './avatars/ciudades/mardel.png'
import rosario from './avatars/ciudades/rosario.png'
import Filtros from './Search.js'

class Search1 extends React.Component {
  state = {
    goToResults: false,
    searchFailed: false,
    notLoggedInUser: false,
    goToProfile: false,
    sideDrawerOpen: false,
 
  }

  

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
           return {sideDrawerOpen: !prevState.sideDrawerOpen};
      });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  }
  SetCity = (ciudad) => {
    this.setState.city = ciudad;
    this.setState({city: ciudad});
    console.log(ciudad)
  }
  render() {

    let sideDrawer;
    let backdrop;
   
    if (this.state.sideDrawerOpen) {
      sideDrawer =<SideDrawer/>;
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }

    return (
  
      <div className="Search">
        
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
        {sideDrawer}
        {backdrop}

        <div className="BodySearch">
          {/* <Formik
           
            onSubmit={(filters) => this.searchGuides(filters)}>
            <Form> */}
        
            
          <h2>Seleccionar cuidad</h2>
          
              <div className="Section1">

              <div><a href="/filters"><img src={bsas} alt={"bsas"} width="100%" onClick={() => <Filtros city={'Buenos Aires'}/>}/></a></div>
              <div><a href="/filters"><img src={cordoba} alt={"cordoba"} width="100%" onClick={() => <Filtros city={'Cordoba'}/>}/></a></div>
              <div><a href="/filters"><img src={laplata} alt={"laplata"} width="100%" onClick={() => <Filtros city={'La Plata'}/>}/></a></div>
              <div><a href="/filters"><img src={mardel} alt={"mardel"} width="100%" onClick={() => <Filtros city={'Mar del Plata'}/>}/></a></div>
              <div><a href="/filters"><img src={neuquen} alt={"Neuquen"} width="100%" onClick={() => <Filtros city={'Neuquen'}/>}/></a></div>
              <div><a href="/filters"><img src={mendoza} alt={"Mendoza"} width="100%" onClick={() => <Filtros city={'Mendoza'}/>}/></a></div>
              <div><a href="/filters"><img src={rosario} alt={"Rosario"} width="100%" onClick={() => <Filtros city={'Rosario'}/>}/></a></div>
              </div>
        
              {this.state.notLoggedInUser && (
                <p className="form-error">Usuario no logueado.</p>
              )}
              {this.state.searchFailed && (
                <p className="form-error">La búsqueda de guías falló. Intentá de nuevo.</p>
              )}
        
        </div>
      </div>
    );
  }
}

export default Search1;



