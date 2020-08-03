import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class PasswordRecovery_Alerta extends Component {
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
          
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 align="Left"> Te enviamos un correo, por favor ingresá para recuperar tu contraseña</h5>
       
          {/*<p>Se envió una solicitud a los administradores para que validen tus datos y así poder 
            mantener la seguridad de nuestra comunidad. En 24 horas podrás acceder a la plataforma y 
          comenzarás a vivir experiencias únicas.</p>*/}
          
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Aceptar</Button>
          
        </Modal.Footer>
      </Modal>
    );
  }

}

export default PasswordRecovery_Alerta;