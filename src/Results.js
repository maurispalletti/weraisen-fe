import React, { Component } from 'react';
import './Results.css';

import CardGuia from '../src/components/Card_Guia';
import { Redirect } from 'react-router'
import userServices from './services/userServices'
import Header from '../src/components/Header'
class Results extends Component {
  state = {
    goToHome: false,
    searchFailed: false,
    guides: [],
    resultados: false,

  }

  getGuides = async (filters) => {
    try {

      const response = await userServices.getGuides(filters);
      if (response && response.data && response.data.length > 0) {
        this.setState({ guides: response.data })
      }
      if (response && response.data && response.data.length === 0) {
        this.setState ({resultados: true})
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
  

  renderGuides = () => {
    const { guides } = this.state

     
    if (guides.length > 0) {
      return (guides.map((guide, index) => {
        const { id, firstName, lastName, birthDate, city, languages, knowledge, description, gender, profilePicture } = guide



        return (
        
          <div style={{textAlign: 'center'}} key={index}>
            
            <CardGuia
              key={index}
              guideId={id}
              firstName={firstName}
              lastName={lastName}
              city={city}
              birthDate={birthDate}
              languages={languages}
              gender={gender}
              knowledge={knowledge}
              description={description}
              profilePicture={profilePicture}



            />
            <br></br>
          </div>
       
        )
      }));

    }
  }



  render() {
    if (this.state.goToHome) {
      return <Redirect to="/search" />
    }

    if (this.state.resultados) {
      return (
      <div className="Results">
        <Header></Header>

        <div className="BodyResults">

          <div className="container-fluid" style={{paddingTop: '20px'}} >
          <h2 style={{ paddingBottom: "15px" }}>No encontramos ningun guía que coincida con los filtros ingresados.</h2>
    
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

    return (
      <div className="Results">
        <Header></Header>

        <div className="BodyResults">

          <div className="container-fluid" style={{paddingTop: '20px'}} >
          <h2 style={{ paddingBottom: "15px" }}>Enviale solicitud a tu guía preferido</h2>
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
