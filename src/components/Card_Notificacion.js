import React from 'react';
import { Button } from 'react-bootstrap';


const Card_Notificacion = props => {

    // const { imagen, nombre, detalle } = props.guia;

    return (

        <React.Fragment>
            {/* <div className="card mb-12 col-sm-12 pt-5" style= {{ maxWidth: '150px'}}> */}
            <div className="card  col-sm-12 col-xs-12" style={{left: "-5.5%", width:"22rem", height: "127px", padding: "1px 1px 1px 1px" }}>

                <div className="row no-gutters ">

                    <div className="col-sm-4 col-4" style={{ maxWidth: '100px', padding: '10px 1px 1px 1px' }}>
                        <img src={props.imgsrc} className="card-img img-fluid" style={{padding: '1px 1px 3px 21px', align:"left" }} alt="..." />
                    </div>
                    <div className="col-sm-8 col-8">
                        <div className="card-body" style={{padding: '15px 5px 1px 17px'}}>                        
                        
                            <h5 className="card-title" style={{marginBottom: "0px"}}>{props.name}</h5>
                            <p className="card-text" style={{textAlign:"left", width:"13rem"}}>{props.description}.</p>
                            <div className="row mb-2">
                                <div className="col text-right">                   
                                <Button variant="primary" size="sm" style={{width:"47%"}}>{props.btn1}</Button>
                                <Button variant="primary" size="sm" style={{width:"40%"}}>{props.btn2}</Button>
                                </div>  
                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>

    )
}

export default Card_Notificacion;