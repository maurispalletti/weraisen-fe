import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import userServices from '../services/userServices';
import { ButtonGroup } from 'semantic-ui-react';


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
        })
      }
    } catch (error) {
      console.log(error)
      console.error(`There was an error trying to update compliant status`)
    }
    this.props.refresh()
  }


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
          <div style={{ border: 'black 1px solid', backgroundColor: '#d48e4f', width: '30rem', paddingTop: '20px', borderTopRightRadius: '12px', borderTopLeftRadius: '12px', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px' }}>
            <div className="card-text-center">
              <div className="overflow">
                <img src={this.state.accused.profilePicture} alt='imag1' style={{ width: '100%', maxWidth: '300px', height:'100%', maxHeight:'350px', paddingTop: '5px', borderTopRightRadius: '12px', borderTopLeftRadius: '12px', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px' }} />
              </div>
              <div className="card-body text-dark">
                <p><strong>Denunciante: </strong> {this.state.informer.firstName} {this.state.informer.lastName} </p>
                <p><strong>Denunciado: </strong> {this.state.accused.firstName} {this.state.accused.lastName} </p>
                <p><strong>Motivo: </strong> {this.props.reason} </p>
                <p><strong>Descripcion:</strong> {this.props.description} </p>
                <p><strong>Email Denunciante:</strong> {this.state.informer.email}</p>
                <p><strong>Email Denunciado:</strong> {this.state.accused.email}</p>
                <button className= "primary" style={{ backgroundColor: "#484e55",  fontSize: "15px", margin: "20px 20px 0px", padding: "10px 40px", border: "none", borderRadius: "0.2rem", textAlign: "left", margin: "3%",  color: "white" }} value={"Aceptar"} size="sm" onClick={() => this.updateCompliantStatus('Bloqueado')}> Bloquear perfil </button>
                <button className="primary" style={{ backgroundColor: "#484e55",  fontSize: "15px", margin: "20px 20px 0px", padding: "10px 40px", border: "none", borderRadius: "0.2rem", textAlign: "right", margin: "3%", color: "white" }} value={"Aceptar"} size="sm" onClick={() => this.updateCompliantStatus('Resuelto')}> Ignorar Denuncia </button>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default CardDenuncia;