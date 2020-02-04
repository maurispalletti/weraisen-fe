import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class AddDepModal extends Component {
  

    render () {
        return (
            <Modal.Dialog>
                    <Modal.Header className="text-center" closeButton>
                    
                    <Modal.Title>Denuncia</Modal.Title>
                   
                    </Modal.Header>

                    <Modal.Body>
                     <p>Una lástima que tengas que llegar a estar instancia. Cuéntanos los motivos</p>
                     <div className="radio">
                         <label>
                            <input type="radio" value="option1" />
                             Acoso
                         </label>
                     </div>
                     <div className="radio">
                         <label>
                            <input type="radio" value="option1" />
                             Maltrato
                         </label>
                     </div>
                     <div className="radio">
                         <label>
                            <input type="radio" value="option1"  />
                             Otro
                         </label>
                     </div>
                    </Modal.Body>

                    <Modal.Footer>
                    <Button variant="secondary">Olvidar</Button>
                     <Button variant="primary">Save changes</Button>
                    </Modal.Footer>
            </Modal.Dialog>

            
        );
    }

};
export default AddDepModal;

