import React, { Component } from 'react';
import userServices from './services/userServices'

// import { Redirect } from 'react-router'

import GraficoCategoryPerGender from './components/ReporCategoryPerGender';
import GraficoCityPerMonth from './components/ReportCityPerMonth';
import GraficoEncuentrosPorMes from './components/ReportMatchesPorMes';
import GraficoNewUserPerMonth from './components/ReportNewUsersPerMonth';
import GraficoCompliantsPerReason from './components/ReportCompliantsPerReason';

class Informes extends Component {

  state = {
    goToHome: false,
    matchesPerMonth: null,

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
            <GraficoCategoryPerGender />
          </div>
          <br></br>
          <div className= "GraphicWrapper">
            <GraficoCityPerMonth />
          </div>
          <br></br>
          <div className="GraphicWrapper">
            {this.state.matchesPerMonth && <GraficoEncuentrosPorMes matchesPerMonth={this.state.matchesPerMonth} />}
          </div> 
          <br></br>
          <br></br>
          <div className="GraphicWrapper">
            <GraficoNewUserPerMonth/>
          </div> 
          <br></br>
          <br></br>
          <div className="GraphicWrapper">
            <GraficoCompliantsPerReason/>
          </div> 
          <br></br>
          <br></br>
       
        </div>
      
    );
  }
}

export default Informes;



