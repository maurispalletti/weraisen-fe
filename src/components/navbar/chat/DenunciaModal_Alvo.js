import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import userServices from '../../../services/userServices';
import { Formik, Form } from 'formik'
import FieldWithError from '../../../forms/FieldWithError'
import { Redirect } from 'react-router'

const INITIAL_VALUES = {
 
  description: '',
  reason: ''
}




class DenunciaModal_Alvo extends Component {
  // constructor(props) {
  //   super(props);
  // }
  state = {
    goToHome: false,
  }
  createCompliant = async (values) => {
          
    try {      
        const userId = localStorage.getItem("userId");
        const accusedId = localStorage.getItem("accusedId");
        const description = values.description;
        const status = "Creado";
        const reason = values.reason
      console.log ("HOLA");
      console.log(userId, accusedId, description, status, reason);
      const response = await userServices.createCompliant({
          userId,
		      accusedId,
		      description,
	        status,
	      	reason
        })
       this.setState({ goToHome: true })
    
      
    } catch (error) {
      console.log(error)
      console.error(`There was an error trying to update compliant status`)
    }
    
  }

  render() {
    if (this.state.goToHome) {
      return <Redirect to="/Home" />
    }

    return (

      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Formik
         initialValues={INITIAL_VALUES}
             
              onSubmit={(values) => this.createCompliant(values)}>
        
          <Form>
           <Modal.Header closeButton style= {{paddingLeft: '350px'}}>
             <Modal.Title id="contained-modal-title-vcenter" >
               <h2>Denuncia</h2>
              </Modal.Title>
            </Modal.Header>
          <Modal.Body>
          <h5 align="Left"> Desde We Raisen lamentamos que tengas que llegar a esta instancia,
								contanos el motivo así nosotros evaluamos lo sucedido.</h5>
          <br></br>
          <div className="checkbox">
            <label>
              <input name= "reason" type="checkbox" /> Acoso sexual y/o verbal.
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input name= "reason" type="checkbox" value="option" style={{ paddingLeft: "4px" }} />
                                       Discriminación.
                                 </label>
          </div>

          <div className="checkbox">
            <label>
              <input name= "reason" type="checkbox" value="option" style={{ paddingLeft: "3px" }} />
                                      Perfil falso, suplantación de identidad o
                                      mensajes sospechosos.
                                 </label>
          </div>
          <div className="checkbox">
            <label>
              <input name= "reason" type="checkbox" value="option" style={{ paddingLeft: "3px" }} />
                                      Amenazas violentas específicas relacionadas
                                      con el
                                      bienestar o la seguridad física.
                                 </label>
          </div>
          <div className="checkbox">
            <label>
              <input name= "reason" type="checkbox" value="option" style={{ paddingLeft: "3px" }} />
                                      Otro motivo.
                                 </label>
          </div>
          <br></br>
                    
              <div style={{ maxWidth: '200px', margin: '0px auto'}}></div>
              <a style= {{paddingLeft: '120px'}}>Por favor, describí lo sucedido para ayudarnos a tomar una decisión correcta.</a>
                   
          <div align = "center">
           {/* <input name = "description"
            placeholder="               Describí acá el motivo"
            component="textarea" className="input" /> */}
            <FieldWithError name="description"
                    placeholder="               Describí acá el motivo"
                    aria-label="description"  className="input" />
         </div>
        </Modal.Body>
        <Modal.Footer>
          <div>
            <input type= "submit" className="btn-primero" value="Iniciar sesión" />
          </div>
          <Button >Cancelar</Button>
        </Modal.Footer>
        </Form>
          </Formik>
      </Modal>
    );
  }

}

export default DenunciaModal_Alvo;