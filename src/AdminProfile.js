import React from 'react';
import Tabs from './components/Tabs';
import '../src/components/Tabs.css';
import Informe from '../src/Informes';
import '../src/AdminProfile.css';
import Header from '../src/components/Header'
import CardDenunciaAll from './components/CardDenunciaAll';
import CardAceptar from './components/CardAceptarRechazarAll';

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
 <div>   <Header> </Header>
  <div align="center" className="bodyProfile">
   
      
    <h2> Perfil Administrador</h2>
    
    <Tabs 
    active = {this.state.active} 
    onChange = {active => this.setState({active})}
    >

      
      <div key="aTAB"> Informes estadísticos </div> 
      <div key="bTAB"> Gestión de denuncias </div> 
      <div key="cTAB"> Gestión de usuarios </div> 
     

    </Tabs>
   
  
    <p>{content[this.state.active]}</p>
  </div>
  </div>
  );
 }; 
}



export default Tabulador;

