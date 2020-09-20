import React from 'react';
import Tabs from './components/Tabs';
import '../src/components/Tabs.css';
import Informe from '../src/Informes';
import '../src/AdminProfile.css';
import CardDenunciaAll from './components/CardDenuncia';
import CardsAceptarRechazar from './components/CardAceptarRechazar';
import Buttom from './components/Boton.js';
import pdf from '../src/icons/Linuxdoc-Ejemplo.pdf';

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
      <div key="aTAB" style={{fontSize:"18px"}}> Informes </div> 
      <div key="bTAB" style={{fontSize:"18px"}}> Gestión de denuncias </div> 
      <div key="cTAB" style={{fontSize:"18px"}}> Gestión de usuarios </div> 
    </Tabs>
   
  
    <p>{content[this.state.active]}</p>
    <div>

    <a href={pdf}> Ver manual de usuario</a> 
    </div>
    <div className="cerrarSesion">

      <Buttom link={'/login'} className={"botons"} name={"Cerrar sesión"} />
    </div>

  </div>
  );
 }; 
}



export default Tabulador;

