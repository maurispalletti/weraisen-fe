import React, { Component } from 'react';
import '../components/CardDenuncia.css';
import CardDenuncia from '../components/CardDenunciaAll.js';
import userServices from '../services/userServices';

class CardDenunciaAll extends Component {
  state = {
    compliants: [],
    loading: true,
    compliantFailed: false,
  }

  componentDidMount() {
    this.getCompliantsList();
  }

  getCompliantsList = async () => {
    try {
      console.log('!!!')
      const response = await userServices.getCompliantsList();
      console.log(response.data);
      if (response && response.data) {
        this.setState({ compliants: response.data, loading: false })
      }
    } catch (error) {
      console.error(`There was an error trying to get compliances: ${error}`)
      this.setState({ compliantFailed: true, loading: false })
      return null
    }
  }

  renderComplaints = () => {
    const { compliants } = this.state
    if (compliants.length > 0) {

      return compliants.map(compliant => {
        const { id, userId, accusedId, description, status, reason } = compliant
        return (
          <>
            <CardDenuncia
              compliantId={id}
              informer={userId}
              accused={accusedId}
              description={description}
              status={status}
              reason={reason}
              refresh={() => this.getCompliantsList()}
            />
            <br></br>
          </>
        )
      });
    }
  }

  render() {
    if (this.state.loading) {
      return <h3 style={{ marginBottom: '18px' }}>Cargando denuncias...</h3>
    } else if (this.complaintFailed) {
      return <h3 style={{ marginBottom: '18px' }}>Ups! El servicio falló</h3>
    } else {
      return (
        <>
          <h2 style={{ marginBottom: '18px' }}>Usuarios denunciados</h2>
          {this.renderComplaints()}
        </>
      )
    }
  }
}

export default CardDenunciaAll;


