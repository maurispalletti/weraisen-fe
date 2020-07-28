import React, { Component } from 'react';
import './Results.css';
import './Estilos.css';
import CardGuia from '../src/components/Card_Guia';
import { Redirect } from 'react-router'
import userServices from './services/userServices'
import Header from '../src/components/Header'
class Results extends Component {
  state = {
    goToHome: false,
    searchFailed: false,
    guides: [],
    

  }

  getGuides = async (filters) => {
    try {
      console.log(`FILTERS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`)
      console.log(filters)
      console.log(`!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`)


      const response = await userServices.getGuides(filters);
      console.log('++++++++' + response.data)
      if (response && response.data && response.data.length > 0) {
        this.setState({ guides: response.data })
      }
    } catch (error) {
      console.error(`There was an error trying to get guides: ${error}`)
      this.setState({ searchFailed: true })
      return null
    }
  }

  async UNSAFE_componentWillMount() {
    let filters = sessionStorage.getItem("filters");
    filters = JSON.parse(filters)
    await this.getGuides(filters)
  }

  calcularEdad = (birthDate) => {
    const cumple = new Date(birthDate)

    const hoy = new Date();
    let age = hoy.getFullYear() - cumple.getFullYear();
    const m = hoy.getMonth() - cumple.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumple.getDate())) {
      age--;
    }

    return age;
  }


  getPromedio = async (userId) => {

   
    let reviews=await userServices.getReviews(userId);
    console.log(reviews.data)
    let promedioPuntos = 0
    if (reviews && reviews.length > 0) {
      console.log(reviews.length)
      let suma = 0

      reviews.forEach(review => {
        console.log(review)
        suma += review.points
      });
      promedioPuntos = (suma / reviews.length)
    } else {
      promedioPuntos = 0
    }
    return promedioPuntos
    console.log("PROMEDIO"+promedioPuntos)
  }

  renderGuides = () => {
    const { guides } = this.state
    console.log('****' + guides.length)
    if (guides.length > 0) {
      return guides.map((guide, index) => {
        const { id, firstName, lastName, birthDate, city, languages, knowledge, description, gender, profilePicture } = guide
        let age2 = this.calcularEdad(birthDate);
        let average = this.getPromedio(id);
        return (
          <div key={index}>
            <CardGuia
              key={index}
              guideId={id}
              firstName={firstName}
              lastName={lastName}
              city={city}
              age2={age2}
              languages={languages}
              gender={gender}
              knowledge={knowledge}
              description={description}
              profilePicture={profilePicture}
              average={average}

            />
            <br></br>
          </div>
        )
      });
    }
  }



  render() {
    if (this.state.goToHome) {
      return <Redirect to="/search" />
    }

    return (
      <div className="Results">
        <Header></Header>

        <div className="BodyResults">

          <div className="Section">
            <h2 style={{ paddingBottom: "15px" }}>Iniciá una conversación con tu guía preferido</h2>
            {this.renderGuides()}
          </div>

          <div className="Section">
            <input type="button" className="btn-primero" value="Modificar algún filtro" onClick={() => this.setState({ goToHome: true })} />
            <br></br>
          </div>
          {this.state.searchFailed && (
            <p className="form-error">La búsqueda de guías falló. Intentá de nuevo por favor.</p>
          )}
        </div>
      </div>
    );
  }
}
export default Results;
