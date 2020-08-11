import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class AgendaModal extends Component {
  // constructor(props) {
  //   super(props);
  // }

  constructor(props) {
    super(props);
    this.state = {
        value:''
    }
}

  handleChange = (event) => {
    this.setState({ value: event.target.value });
    console.log(this.state.value)
  }

  render() {
    return (

      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
           <h2> Agendar encuentro</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 align="Left"> Registrá la fecha y hora del encuentro </h5>
          <br></br>
          
          <div className="checkbox" style={{textAlign:"center"}}>
              <input type="datetime-local" 
                    style={{margin:"0px auto"}} 
                    className="input" 
                    value={this.state.value}
                    onChange={this.handleChange} />
          </div>
         
    

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Agendar</Button>
          <Button onClick={this.props.onHide}>Cancelar</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default AgendaModal;