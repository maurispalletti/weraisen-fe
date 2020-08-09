import React from 'react';
import Tabs from './components/Tabs';
import '../src/components/Tabs.css';
import Informe from '../src/Informes';
import '../src/AdminProfile.css';
import CardDenunciaAll from './components/CardDenuncia';
import CardsAceptarRechazar from './components/CardAceptarRechazar';


class Tabulador extends React.Component {
constructor(props) {
  super (props);
  this.state = {active: 'aTAB'};
}
render() {
  
  const content = {
    aTAB: <Informe></Informe>, 
    bTAB: <CardDenunciaAll></CardDenunciaAll>,
    cTAB: <CardsAceptarRechazar> </CardsAceptarRechazar>,
  };
  return (
    
  <div align="center" className="bodyProfile">
   
      
    <h1> Perfil Administrador</h1>
    <br></br>
    <Tabs 
    active = {this.state.active} 
    onChange = {active => this.setState({active})}
    >
      <div key="aTAB"> Informes </div> 
      <div key="bTAB"> Gestión de denuncias </div> 
      <div key="cTAB"> Gestión de usuarios </div> 
    </Tabs>
   
  
    <p>{content[this.state.active]}</p>
  

  </div>
  );
 }; 
}



export default Tabulador;

