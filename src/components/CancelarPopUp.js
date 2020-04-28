import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class AddDepModal extends Component {

    render () {
        return (

        <div>
        
       
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
               Cancelación
            </button>
         
            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">   
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                                <h1 class="modal-title"  align= "center" id="exampleModalCenterTitle">Cancelación</h1>
                             <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                             </button>
                       </div>
                        <div class="modal-body" style= {{padding: "2px 5px 0px 4px"}}>
                            <h5 align="center"> ¿Cancelarás?, cuéntanos el motivo:</h5>                          
                            
                             <div className="container" style= {{ paddingLeft: "9px"}}>
                                 
                                 <input type="checkbox"/> 
                                 <label style= {{padding: "0px 0px 7px 5px"}}> Mensajes Inapropiados </label>
                                 
                             </div>
                             <div className="container"style= {{ paddingLeft: "9px"}}>
                                 
                                 <input type="checkbox"/> 
                                 <label style= {{padding: "0px 0px 7px 5px"}}> Fotos Inapropiados. </label>
                                 
                             </div>
                             <div className="container"style= {{ paddingLeft: "9px"}}>
                                 
                                 <input type="checkbox"/> 
                                 <label style= {{padding: "0px 0px 7px 5px"}}> La cuenta parece Spam. </label>
                                 
                             </div>
                             <div className="container"style= {{ paddingLeft: "9px"}}>
                                 
                                 <input type="checkbox"/> 
                                 <label style= {{padding: "0px 0px 7px 5px"}}> No hemos llegado a un acuerdo. </label>
                                 
                             </div>
                             <div className="container"style= {{ paddingLeft: "9px"}}>
                                 
                                 <input type="checkbox"/> 
                                 <label style= {{padding: "2px 5px 0px 5px"}}> Otros. </label>
                                 
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