<<<<<<< HEAD
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
=======
import React, { Component } from 'react';
import userServices from '../services/userServices';

class CardDenuncia extends Component {
  state = {
    accused: null,
    informer: null,
    loading: true,
    loadCardFailed: false,
  }

  componentDidMount() {
    this.getUsersData();
  }

  updateCompliantStatus = async (status) => {
    const { compliantId } = this.props
    try {
      if (compliantId) {
        await userServices.updateCompliantStatus({
          compliantId,
          status,
>>>>>>> d9e7c37957d1dadb95b6fc0412b3548393b3916e
        })
      }
    } catch (error) {
      console.log(error)
<<<<<<< HEAD
      this.setState({ updateFailed: true })
      console.error(`There was an error trying to add a new user`)
=======
      console.error(`There was an error trying to update compliant status`)
>>>>>>> d9e7c37957d1dadb95b6fc0412b3548393b3916e
    }
    this.props.refresh()
  }

<<<<<<< HEAD
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
=======

  getUsersData = async () => {
    try {
      const informer = await userServices.getProfile(this.props.informer)
      const accused = await userServices.getProfile(this.props.accused)

      this.setState({ accused: accused.data, informer: informer.data, loading: false })

    } catch (error) {
      console.error(`There was an error trying to get compliance: ${error}`)
      this.setState({ loadCardFailed: true, loading: false })
    }
  }

  render() {
    if (this.state.loading) {
      return (
        <div>
          <div style={{ border: 'black 1px solid', backgroundColor: '#696970', width: '20rem', paddingTop: '20px', borderTopRightRadius: '12px', borderTopLeftRadius: '12px', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px' }}>
            <div className="card-text-center">
              <div className="card-body text-dark">
                <h3>Cargando...</h3>
              </div>
            </div>
          </div>
        </div>
      )
    } else if (this.state.loadCardFailed) {
      return (
        <div>
          <div style={{ border: 'black 1px solid', backgroundColor: '#696970', width: '20rem', paddingTop: '20px', borderTopRightRadius: '12px', borderTopLeftRadius: '12px', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px' }}>
            <div className="card-text-center">
              <div className="card-body text-dark">
                <h3>Error obteniendo info de usuarios</h3>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div style={{ border: 'black 1px solid', backgroundColor: '#696970', width: '20rem', paddingTop: '20px', borderTopRightRadius: '12px', borderTopLeftRadius: '12px', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px' }}>
            <div className="card-text-center">
              <div className="overflow">
                <img src={this.state.accused.profilePicture} alt='imag1' style={{ width: '250px', height: '150px', margin: '3%', borderTopRightRadius: '12px', borderTopLeftRadius: '12px', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px' }} />
              </div>
              <div className="card-body text-dark">
                <h3>Denunciante: {this.state.informer.firstName} {this.state.informer.lastName}</h3>
                <h3>Denunciado: {this.state.accused.firstName} {this.state.accused.lastName}</h3>
                <h4>Descripcion: {this.props.description}</h4>
                <h4>Estado: {this.props.status}</h4>
                <h4>Razón: {this.props.reason}</h4>
                <button variant="primary" value={"Aceptar"} size="sm" style={{ textAlign: "left", margin: "3%" }} onClick={() => this.updateCompliantStatus('Bloqueado')}> Bloquear perfil </button>
                <button variant="primary" value={"Aceptar"} size="sm" style={{ textAlign: "right" }} onClick={() => this.updateCompliantStatus('Resuelto')}> Desestimar denuncia </button>
              </div>
            </div>
          </div>
        </div>
      )
    }
>>>>>>> d9e7c37957d1dadb95b6fc0412b3548393b3916e
  }
}

export default CardDenuncia;