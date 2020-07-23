import React, { Component } from 'react';
import { Redirect } from 'react-router'
import { Button } from 'react-bootstrap';


class Card_Notificacion1 extends Component {
    state = {
      goToReview: false,
    }
        render(){
        const { name, description, imgsrc }= this.props;
        if (this.state.goToReview) {
            return <Redirect to="/valoration" />
          }
   
    return (

        <div style={{ paddingLeft: '5%', paddingRight:'5%'}}>
            <div className="card col-sm-12 col-xs-12 " style={{ maxWidth:'400px', margin:'0px auto' }} >

                <div className="row no-gutters " >

                    <div className="col-sm-4 col-4">
                        <img src={imgsrc} className="card-img img-fluid" alt="..." />
                    </div>
                    <div className="col-sm-8 col-8" style={{padding:"0px"}}>
                        <div className="" >                        
                        
                            <h5 className="card-title" style={{marginBottom: "0px"}}>{props.name}</h5>
                            <p className="card-text" style={{textAlign:"center", width:"13rem", paddingRight:"12%"}}>{props.description}</p>
                            <div className="row mb-2">
                                <div className="col text-center">                   
                                <Button variant="primary" size="sm" style={{width:"47%"}} onClick={() => this.setState({ goToReview: true })}>Puntuar</Button>

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
export default Card_Notificacion1;