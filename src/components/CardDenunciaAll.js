import React, {Component} from 'react';
import img3 from '../avatars/avatar_1.svg';
import { Button } from 'react-bootstrap';
import userServices from '../services/userServices';

 class CardDenuncia extends React.Component {


  async updateUserStatusBlocked() {
    const { userId } = this.props
    try {
      if (userId) {
        await userServices.updateCompliantStatus({
          userId,
          status: "BLOCKED"
        })
      }
    } catch (error) {
      console.log(error)
      this.setState({ updateFailed: true })
      console.error(`There was an error trying to add a new user`)
    }
    this.props.refresh()
  }

  async updateUserStatusResolved() {
    const { userId } = this.props
    try {
      if (userId) {
        await userServices.updateCompliantStatus({
          userId,
          status: "RESOLVED"
        })
        this.setState({ updateFailed: false })
      }
    } catch (error) {
      console.log(error)
      this.setState({ updateFailed: true })
      console.error(`There was an error trying to add a new user`)
    };
    this.props.refresh()
  }
   
  render () {
    const { userId, accusedId, profilePicture, firstName, description} = this.props;
    return(
    <div>
      <h3 style={{marginBottom:'18px'}}>Usuarios denunciados</h3>
      <div style={{border: 'black 1px solid', backgroundColor:'#696970', width:'20rem', paddingTop:'20px', borderTopRightRadius:'12px', borderTopLeftRadius:'12px', borderBottomLeftRadius:'12px', borderBottomRightRadius:'12px'}}> 
   
      <div className="card-text-center">
        <div className="overflow">
          <img src= {profilePicture} alt='imag1' style={{width:'250px', height: '150px', margin: '3%', borderTopRightRadius:'12px', borderTopLeftRadius:'12px', borderBottomLeftRadius:'12px', borderBottomRightRadius:'12px'}}/>
        </div>
      <div className="card-body text-dark">
        <h3 className="">{firstName}</h3>
        <h4 className="">
          {description}
        </h4>
        <Button variant="primary" value={"Aceptar"} size="sm" style={{ textAlign: "left", margin: "3%" }}> onClick={() => this.updateUserStatusBlocked()} Bloquear</Button>
        <Button variant="primary" value={"Aceptar"} size="sm" style={{ textAlign: "right" }} onClick={() => this.updateUserStatusResolved()}> Rechazar </Button>
      </div>
      </div>
      </div>
    </div>
       
    )
   }
  }
  
  
  
  export default CardDenuncia;