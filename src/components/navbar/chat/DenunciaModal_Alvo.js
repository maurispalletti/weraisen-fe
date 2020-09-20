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
    notificacion: false,
    violencia: false,
    sexual: false,
    discriminacion: false,
    suplantacion: false,
    otro: false
  }
  createCompliant = async (values) => {
      
    try {  
  
  
      let reason= ''
       if (this.state.violencia) { 
          reason = "Violencia"
       }
        if (this.state.sexual) { 
          reason = "Sexual"
       }
        if (this.state.discriminacion) { 
          reason = "Discriminación"
       }
        if (this.state.suplantacion) { 
        reason = "Suplantación"
        }
      if (this.state.otro) { 
        reason = "Otro"
   }
        const userId = localStorage.getItem("userId");
        const accusedId = localStorage.getItem("ownerId");
        const description = values.description;
        const status = "Creado";
        
      console.log(userId, accusedId, description, status, reason);
      userServices.createCompliant({ 
          userId,
		      accusedId,
		      description,
	        status,
	      	reason
        });
        this.setState({ notificacion: true })
      
		
		    await userServices.updateMatchStatus(localStorage.getItem("matchId"), 'Cancelado')
            
    } catch (error) {
      console.log(error)
      console.error(`There was an error trying to update compliant status`)
    }
    
  }

  
  render() {
    if (this.state.notificacion) {
      return <Redirect to="/matches" />
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
           <Modal.Header closeButton style= {{paddingLeft: '150px'}}>
             <Modal.Title id="contained-modal-title-vcenter" >
               <h2>Denuncia</h2>
              </Modal.Title>
            </Modal.Header>
          <Modal.Body>
          <h5 align="Left"> ¡Lamentamos que tengas que llegar a esta instancia!
								Seleccioná el motivo y contanos en una breve descripción así nosotros podemos evaluar lo sucedido.</h5>
          <br></br>
          <div className="checkbox">
            <label>
              <input style={{paddingLeft: "5px"}} checked={this.state.sexual} onChange={() => this.setState({ sexual: true })} name= "reason" type="radio" required= 'true'/> Acoso sexual y/o verbal.
           </label>
          </div>

          <div className="checkbox">
            <label>
              <input style={{paddingLeft: "5px"}} checked={this.state.discriminacion} onChange={() => this.setState({ discriminacion: true })}  name= "reason" type="radio" value="option" required />
                Discriminación.
            </label>
          </div>

          <div className="checkbox">
            <label>
              <input checked={this.state.suplantacion} onChange={() => this.setState({ suplantacion: true })} name= "reason" type="radio" value="option" style={{ paddingLeft: "5px" }} required />
                                      Perfil falso, suplantación de identidad o
                                      mensajes sospechosos.
                                 </label>
          </div>
          <div className="checkbox">
            <label>
              <input  checked={this.state.violencia} onChange={() => this.setState({ violencia: true })} name= "reason" type="radio" value="option" style={{ paddingLeft: "5px" }} required />
                                      Amenazas violentas específicas relacionadas
                                      con el
                                      bienestar o la seguridad física.
                                 </label>
          </div>
          <div className="checkbox">
            <label >
              <input checked={this.state.otro} onChange={() => this.setState({ otro: true })}  name= "reason" type="radio" value="option" style={{ paddingLeft: "5px" }} required />
                                      Otro motivo.
                                 </label>
          </div>
          <br></br>
                    
              <div style={{ maxWidth: '200px', margin: '0px auto'}}></div>
              <a align="left">Por favor, describí lo sucedido.</a>
                   
          <div align = "center">
        
            <FieldWithError name="description"
                    placeholder="               Describí acá el motivo"
                    aria-label="description"  className="input" />
         </div>
        </Modal.Body>
        <Modal.Footer>
         <Button type="submit" value={"Denunciar"}> Denunciar </Button>
         <Button onClick={this.props.onHide}>Cancelar</Button>
        </Modal.Footer>
        </Form>
          </Formik>
      </Modal>
    );
  }

}

export default DenunciaModal_Alvo;