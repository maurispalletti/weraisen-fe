import React from 'react';


const Card_Notificacion0 = props => {

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
                            

                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card_Notificacion0;