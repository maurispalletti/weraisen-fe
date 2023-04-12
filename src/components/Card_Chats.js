import React from 'react';
// import { Button } from 'react-bootstrap';


const Card_Chat = props => {

    // const { imagen, nombre, detalle } = props.guia;

    return (

        <React.Fragment>
            {/* <div className="card mb-12 col-sm-12 pt-5" style= {{ maxWidth: '150px'}}> */}
            <div className="card  col-sm-12 col-xs-12 ">

                <div className="row no-gutters ">

                    <div className="col-sm-4 col-4" style={{ maxWidth: '100px' }}>
                        <img src={props.imgsrc} className="card-img img-fluid" alt="..." />
                    </div>
                    <div className="col-sm-8 col-8">
                        <div className="card-body" style={{padding: '20px 20px 20px 20px', width: '198px'}}>                        
                        
                            <h5 className="card-title" style={{marginBottom: "0px"}}>{props.name}</h5>
                            <p className="card-text" style={{textAlign:"left"}}>{props.description}.</p>
                            {/* <div className="row mb-2">
                                <div className="col text-right">                   
                                <Button variant="primary" size="sm" style={{width:"47%"}}>{props.btn1}</Button>
                                <Button variant="primary" size="sm" style={{width:"40%"}}>{props.btn2}</Button>
                                </div>  
                            </div> */}

                            
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>

    )
}

export default Card_Chat;