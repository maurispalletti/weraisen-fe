import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class AddDepModal extends Component {

    render () {
        return (

        <div>
        
       
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
               Denuncia
            </button>
         
            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">   
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                                <h1 class="modal-title"  align= "center" id="exampleModalCenterTitle">Denuncia</h1>
                             <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                             </button>
                       </div>
                        <div class="modal-body" style= {{padding: "2px 5px 0px 4px"}}>
                            <h5 align="center"> Desde WR lamentamos que tengas que llegar a este punto, cuentanos el motivo:</h5>                          
                            
                             <div className="container" style= {{ paddingLeft: "9px"}}>
                                 
                                 <input type="checkbox"/> 
                                 <label style= {{padding: "0px 0px 7px 5px"}}> Acoso sexual y/o violencia </label>
                                 
                             </div>
                             <div className="container"style= {{ paddingLeft: "9px"}}>
                                 
                                 <input type="checkbox"/> 
                                 <label style= {{padding: "0px 0px 7px 5px"}}> Violencia y daño físico. </label>
                                 
                             </div>
                             <div className="container"style= {{ paddingLeft: "9px"}}>
                                 
                                 <input type="checkbox"/> 
                                 <label style= {{padding: "0px 0px 2px 5px"}}> Discriminación contra individuos o grupos basados en raza,etnia, religión, 
                                 discapacidad, género, edad,origen nacional, orientación sexual, o identidad de género. </label>
                                 
                             </div>
                             <div className="container"style= {{ paddingLeft: "9px"}}>
                                 
                                 <input type="checkbox"/> 
                                 <label style= {{padding: "0px 0px 7px 5px"}}> Impuntualidad e irresponsabilidad en los encuentros. </label>
                                 
                             </div>
                             <div className="container"style= {{ paddingLeft: "9px"}}>
                                 
                                 <input type="checkbox"/> 
                                 <label style= {{padding: "2px 5px 0px 5px"}}> Perfil falsos, suplantación de identidad o mensajes sospechosos. </label>
                                 
                             </div>

                             <div className="container"style= {{ paddingLeft: "9px"}}>
                                 
                                 <input type="checkbox"/> 
                                 <label style= {{padding: "2px 5px 0px 5px"}}> Amenazas violentas específicas relacionadas con el bienestar o la seguridad física. </label>
                                 
                             </div>
                            <div className="myinput" style= {{ paddingLeft: "9px"}}>
                                <textarea name="comentarios" style ={{left: "auto", right:"auto"}} rows="4" cols="43" placeholder="Contanos tu experiencia"></textarea> 
                                
                            </div>
                             



                        </div>
                        <div class="modal-footer">
                             <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                             <button type="button" class="btn btn-primary">Guardar Cambios</button>
                        </div>
                    </div>
                </div>
            </div>
           </div>
        
        
        );
    }
        
    
}
export default AddDepModal;