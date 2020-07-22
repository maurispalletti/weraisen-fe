import React, {Component} from 'react';
import '../components/CardDenuncia.css';
import { Button } from 'react-bootstrap';
import CardDenuncia from '../components/CardDenunciaAll.js';
import userServices from '../services/userServices';
import img1 from '../avatars/dni.jpg';

class CardDenunciaAll extends Component {

  state = {
    compliants: [],
    loading: true,
    compliantFailed: false,
  }
  getCompliantsList = async () => {
    try {
      const response = await userServices.getCompliantsList();
      console.log(response.data);
      if (response && response.data) {
        this.setState({ compliants: response.data, loading: false })
      }
    } catch (error) {
      console.error(`There was an error trying to get new users: ${error}`)
      this.setState({compliantFailed: true, loading: false })
      return null
    }
  }


  renderComplaints = () => {
    const { compliants } = this.state
    if (compliants.length > 0) {
      return compliants.map(compliant => {
        const {userId, accusedId, descripction} = compliant
        return (
          <div>
          <CardDenuncia
            userId = {userId}
            accusedId = {accusedId}
            description = {descripction}
            firstName = {localStorage.getItem("firstName")}
            profilePicture ={localStorage.getItem("profilePicture")}  /// Ver porque no está en esquema debería traerme foto de acusado
            
          />
          <br></br>
            </div>
        )
      });
    }
  }


    async componentDidMount() {
      this.getCompliantsList();

    }
 render () {
   if (this.state.loading){
     return (
      <div>
       <h3 style={{marginBottom:'18px'}}>Cargando usuarios con denuncias generadas</h3>
      </div>
     )
    }
     else {
       if (this.complaintFailed) {
        return (
          <div>
            <h3 style={{marginBottom:'18px'}}>Ups... el servicio ha fallado</h3>
         </div>
        )
        
       } else {
      return(
        <div>
          <h3 style={{marginBottom:'18px'}}>Usuarios que poseen denuncias</h3>
          {this.renderComplaints()}
       </div>
      )
       }
     }
    }
  }


export default CardDenunciaAll;


