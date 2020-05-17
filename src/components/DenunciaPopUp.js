import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class DenunciaModal extends Component {

    render() {
        return (

            <Modal>

                <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" style={{ overflow: "scroll" }} >
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title" align="center" id="exampleModalCenterTitle">Denuncia</h1>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <h5 align="Left"> Desde WR lamentamos que tengas que llegar a este punto,
                                cuentanos el motivo:
                            </h5>

                                <br></br>
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" />
                                        Acoso sexual y/o verbal.
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
                                {/* <div className="myinput" style={{paddingLeft:"10px", margin:'0px auto'}} >
                                <textarea style={{ margin:'0px auto'}} name="comentarios" rows="6" cols="40" placeholder="Contanos tu experiencia"></textarea> 
                              </div> */}
                            </div>





                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                <button type="button" className="btn btn-primary">Guardar Cambios</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>


        );
    }


}
export default DenunciaModal;