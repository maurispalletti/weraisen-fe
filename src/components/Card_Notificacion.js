import React from 'react';
import d from '../Imagenes_Alvo/697.png'
import { Button } from 'react-bootstrap';


const Card_Notificacion = () => {

    // const { imagen, nombre, edad, detalle } = props.guia;

    return (

        <React.Fragment>
            {/* <div className="card mb-12 col-sm-12 pt-5" style= {{ maxWidth: '150px'}}> */}
            <div className="card  col-sm-12 col-xs-12 " >

                <div className="row no-gutters ">

                    <div className="col-sm-4 col-4" style={{ maxWidth: '100px' }}>
                        <img src={d} className="card-img img-fluid" alt="..." />
                    </div>
                    <div className="col-sm-8 col-8">
                        <div className="card-body" style={{padding: '1px 1px 1px 15px', width: '198px'}}>                        
                        
                            <h5 className="card-title" style={{marginBottom: "0px"}}>ALVO</h5>
                            <p className="card-text">Quire ser tu guia.</p>
                            <div className="row mb-2">
                                                           
                                <Button variant="primary" size="sm">ok</Button>
                                <Button variant="primary" size="sm">no ok</Button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>

    )
}

export default Card_Notificacion;