import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class SelectCiudad extends Component {
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
          <h5 align="Left"> ¡Atención!</h5>
       
          <p>Para realizar la búsqueda de un guía deberá ingresar una ciudad.</p>
          
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Aceptar</Button>
          
        </Modal.Footer>
      </Modal>
    );
  }

}

export default SelectCiudad;