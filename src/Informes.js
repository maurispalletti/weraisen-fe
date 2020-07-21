import React, { Component } from 'react';
import userServices from './services/userServices'

// import { Redirect } from 'react-router'
import Grafico from './components/Grafico2barrasUsuariosSexoCategoria';
import GraficoMatchesPorMes from './components/Grafico2barrasMatchesPorMes'
import GraficoDistPerAgeCat from './components/Grafico2barrasEdadCategoria'

class Informes extends Component {

  state = {
    goToHome: false,
    matchesPerMonth: null,
    sexPerCategory: true,
    agePerCategory: true,
  }

  componentDidMount() {
    this.getMatchesPerMonth();
  }

  getMatchesPerMonth = async () => {
    try {
      const response = await userServices.getMatchesPerMonth()

      if (response.data) {
        const { data } = response;

        this.setState({
          matchesPerMonth: data
        });
      }
    } catch (error) {
      console.error(`There was an error trying to get the matchesPerMonth data`)
    }
  }

  render() {
    return (
      
        <div>
          
          <h3>Informes de uso de la plataforma</h3>
          <br></br>
                  
          <div className= "GraphicWrapper">
            {this.state.sexPerCategory && <Grafico sexPerCategory={this.state.sexPerCategory}/>}
          </div>
          <br></br>
          <br></br>
          <div className= "GraphicWrapper">
            {this.state.agePerCategory && <GraficoDistPerAgeCat agePerCategory={this.state.agePerCategory}/>}
          </div>
          <br></br>
          <br></br>
          <div className="GraphicWrapper">
            {this.state.matchesPerMonth && <GraficoMatchesPorMes matchesPerMonth={this.state.matchesPerMonth} />}
          </div>
        </div>
      
    );
  }
}

export default Informes;



