import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';

class DenunciaModal_Alvo extends Component {
  constructor(props) {
    super(props);
  }

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
            Denuncia
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 align="Left"> Desde WR lamentamos que tengas que llegar a este punto, cuentanos el motivo:</h5>
          <br></br>
          <div className="checkbox">
            <label>
              <input type="checkbox" /> Acoso sexual y/o verbal.
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox" value="option" style={{ paddingLeft: "3px" }} />
                                      Discriminación contra individuos o grupos
                                       basados en:
                                               Raza, etnia, religión,
                                               discapacidad,
                                               orientación sexual e
                                               Identidad de género.
                                 </label>
          </div>

          <div className="checkbox">
            <label>
              <input type="checkbox" value="option" style={{ paddingLeft: "3px" }} />
                                      Perfil falsos, suplantación de identidad o
                                      mensajes sospechosos.
                                 </label>
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox" value="option" style={{ paddingLeft: "3px" }} />
                                      Amenazas violentas específicas relacionadas
                                      con el
                                      bienestar o la seguridad física.
                                 </label>
          </div>

          <h5>Otro motivo</h5>
          <div style={{ maxWidth: '200px', margin: '0px auto' }}></div>
          <input
            placeholder="Escribí aca tu motivo."
            component="textarea" className="input" />

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Guardar Cambios</Button>
          <Button onClick={this.props.onHide}>Close</Button>          
        </Modal.Footer>
      </Modal>
    );
  }

}

export default DenunciaModal_Alvo;