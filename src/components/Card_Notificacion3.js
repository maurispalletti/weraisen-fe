import React, { Component } from 'react';
import { Redirect } from 'react-router'
import { Button } from 'react-bootstrap';
import { render } from 'fusioncharts';


class Card_Notificacion3 extends Component {
    state = {
      goToSearch: false,

  
    }
  

c
    // const { imagen, nombre, detalle } = props.guia;
      render(){
        const { name, description, imgsrc }= this.props;
        if (this.state.goToSearch) {
            return <Redirect to="/search" />
          }
   
    return (
        
        <div>
            <div className="card col-sm-12 col-xs-12 " style={{ maxWidth:'400px', margin:'0px auto'}} >

                <div className="row no-gutters ">

                    <div className="col-sm-4 col-4">
                        <img src={imgsrc} className="card-img img-fluid" alt="..." />
                    </div>
                    <div className="col-sm-8 col-8">
                        <div className="">                        
                        
                            <h5 className="card-title" style={{marginBottom: "0px"}}>{name}</h5>
                            <p className="card-text" style={{textAlign:"center", width:"13rem"}}>{description}</p>
                            <div className="row mb-2">
                                <div className="col text-center">                   
                                <Button variant="primary" size="sm" style={{width:"47%"}} onClick={() => this.setState({ goToSearch: true })}>Buscar otro guía</Button>

                                </div>  
                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
}
export default Card_Notificacion3;