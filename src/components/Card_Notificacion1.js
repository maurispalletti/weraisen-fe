import React from 'react';
import { Button } from 'react-bootstrap';


const Card_Notificacion1 = props => {

    // const { imagen, nombre, detalle } = props.guia;

    return (

        <div>
            <div className="card col-sm-12 col-xs-12 " style={{ maxWidth:'400px', margin:'0px auto'}} >

                <div className="row no-gutters ">

                    <div className="col-sm-4 col-4">
                        <img src={props.imgsrc} className="card-img img-fluid" alt="..." />
                    </div>
                    <div className="col-sm-8 col-8">
                        <div className="">                        
                        
                            <h5 className="card-title" style={{marginBottom: "0px"}}>{props.name}</h5>
                            <p className="card-text" style={{textAlign:"center", width:"13rem"}}>{props.description}</p>
                            <div className="row mb-2">
                                <div className="col text-center">                   
                                <Button variant="primary" size="sm" style={{width:"47%"}}>{props.btn1}</Button>

                                </div>  
                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card_Notificacion1;