import React from 'react';
import Tabs from './components/Tabs';
// import { buildMatchMemberExpression } from '@babel/types';
import '../src/components/Tabs.css';
import Informe from '../src/Informes';

import '../src/AdminProfile.css';
import Header from '../src/components/Header'
// import { Fragment } from 'react';
import CardDenunciaAll from './components/CardDenunciaAll';
import CardAceptar from './components/CardAceptarRechazarAll';
// const styles = {
//   fontFamily: 'sans-serif',
// };

class Tabulador extends React.Component {
constructor(props) {
  super (props);
  this.state = {active: 'aTAB'};
}
render() {
  
  const content = {
    aTAB: <Informe></Informe>,
    bTAB: <CardDenunciaAll></CardDenunciaAll>,
    cTAB: <CardAceptar></CardAceptar>,
  };
  return (
     
  <div align="center" className="bodyProfile">
    <Header> </Header>
      
    <h1> Perfil Administrador</h1>
    
    <Tabs 
    active = {this.state.active} 
    onChange = {active => this.setState({active})}
    >

      
      <div key="aTAB"> Informes estadísticos </div> 
      <div key="bTAB"> Denuncias </div> 
      <div key="cTAB"> Aprobar o desaprobar usuarios </div> 
     

    </Tabs>
   
  
    <p>{content[this.state.active]}</p>
  </div>
  );
 }; 
}



export default Tabulador;

