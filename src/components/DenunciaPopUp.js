import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class AddDepModal extends Component {

    render () {
        return (

        <div>
        
       
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
               Prueba
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
                        <div class="modal-body">
                            <h5 align="center"> Desde WR lamentamos que tengas que llegar a este punto,
                                 cuentanos el motivo:
                            </h5>
                            <br></br>
                             <div className="radio">
                                 <label>
                                     <input type="radio" value="option" />
                                     Acoso sexual y/o verbal.
                                 </label>
                             </div>
                             <div className="radio">
                                 <label>
                                     <input type="radio" value="option" />
                                      Violencia y daño físico.
                                 </label>
                             </div>
                             <div className="radio">
                                 <label>
                                     <input type="radio" value="option" />
                                      Discriminación contra individuos o grupos basados en raza, 
                                      etnia, religión, discapacidad, género, edad, 
                                      origen nacional, orientación sexual 
                                      o identidad de género.
                                 </label>
                             </div>
                             <div className="radio">
                                 <label>
                                     <input type="radio" value="option" />
                                      Impuntualidad e irresponsabilidad en los encuentros.
                                 </label>
                             </div>
                             <div className="radio">
                                 <label>
                                     <input type="radio" value="option" />
                                      Perfil falsos, suplantación de identidad o mensajes sospechosos.
                                 </label>
                             </div>
                             <div className="radio">
                                 <label>
                                     <input type="radio" value="option" />
                                      Amenazas violentas específicas relacionadas con el bienestar
                                      o la seguridad física.
                                 </label>
                             </div>
                             <div className="myinput">
                                <textarea name="comentarios" rows="6" cols="60" placeholder="Contanos tu experiencia"></textarea> 
                                
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