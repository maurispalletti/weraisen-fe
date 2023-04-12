import React, { Component } from 'react';
// import { Modal, Button } from 'react-bootstrap';

class AddDepModal extends Component {

    render () {
        return (

        <div>
        
       
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
               Cancelación
            </button>
         
            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" style={{overflowY: "scroll"}} aria-hidden="true">   
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                                <h1 class="modal-title"  align= "center" id="exampleModalCenterTitle">Cancelación</h1>
                             <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                             </button>
                       </div>
                        <div class="modal-body" >
                            <h5 align="center"> ¿Cancelarás?, cuéntanos el motivo:</h5>                            
                            <br></br>
                             <div className="checkbox">
                                 <label>
                                        <input type="checkbox" value="option" style={{paddingLeft:"3px"}}/>
                                        <a style={{paddingLeft:"5px"}}>Mensajes Inapropiados </a>
                                        
                                 </label>
                             </div>
                             <div className="checkbox">
                                 <label>
                                     <input type="checkbox" value="option" />
                                         <a style={{paddingLeft:"5px"}}>Fotos Inapropiadas.</a>
                                 </label>
                             </div>
                             <div className="checkbox">
                                 <label>
                                     <input type="checkbox" value="option"  />
                                     <a style={{paddingLeft:"5px"}}>Parece Spam</a>
                                 </label>
                             </div>
                             <div className="checkbox">
                                 <label>
                                     <input type="checkbox" value="option"/>
                                     <a style={{paddingLeft:"5px"}}> No hemos concordado en algunas cosas.</a>
                                 </label>
                             </div>
                            <br></br>
                             <h5>Otro motivo</h5>
                            <div style={{maxWidth:'200px',margin:'0px auto'}}></div>
                                <input
                                      placeholder="Escribí aca tu motivo."
                                      component="textarea" className="input" />
                              {/* <div className="myinput" style={{paddingLeft:"10px", margin:'0px auto'}} >
                                <textarea style={{ margin:'0px auto'}} name="comentarios" rows="6" cols="40" placeholder="Contanos tu experiencia"></textarea> 
                              </div> */}
                           
                             



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