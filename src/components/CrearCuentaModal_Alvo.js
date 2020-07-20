import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class CrearCuentaModal_Alvo extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (


      /*Ejemplo de una modal correcta */

      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          SOLICITUD ENVIADA
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 align="Left"> ¡Gracias por unirte a WeRaisen!</h5>
       
          <p>Se envió una solicitud a los administradores para que validen tus datos y así poder 
            mantener la seguridad de nuestra comunidad. En breve podrás acceder a la plataforma y 
            comenzarás a vivir experiencias únicas.</p>
          
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Aceptar</Button>
          
        </Modal.Footer>
      </Modal>
    );
  }

}

export default CrearCuentaModal_Alvo;