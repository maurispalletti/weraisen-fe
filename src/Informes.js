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
    cateogryPerGender: null,
    citiesPerMonth: null,
    usersCreatedPerMonth: null,
    usersReportedPerReason: null,

  }

  componentDidMount() {
    this.getMatchesPerMonth();
    this.getUsersCreatedPerMonth();
    this.getUsersReportedPerReason();
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
  getCitiesPerMonth = async () => {
    try {
      const response = await userServices.getCitiesPerMonth()

      if (response.data) {
        const { data } = response;

        this.setState({
          citiesPerMonth: data
        });
      }
    } catch (error) {
      console.error(`There was an error trying to get the citiesPerMonth data`)
    }
  }

  getUsersCreatedPerMonth = async () => {
    try {
      const response = await userServices.getUsersCreatedPerMonth()

      if (response.data) {
        const { data } = response;

        this.setState({
          usersCreatedPerMonth: data
        });
      }
    } catch (error) {
      console.error(`There was an error trying to get the citiesPerMonth data`)
    }
  }
  getUsersReportedPerReason = async () => {
    try {
      const response = await userServices.getUsersReportedByReason()

      if (response.data) {
        const { data } = response;

        this.setState({
          usersReportedPerReason: data
        });
      }
    } catch (error) {
      console.error(`There was an error trying to get the citiesPerMonth data`)
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
          {this.state.usersCreatedPerMonth && <GraficoNewUserPerMonth usersCreatedPerMonth={this.state.usersCreatedPerMonth} />}
          </div> 
          <br></br>
          <br></br>
          <div className="GraphicWrapper">
            {this.state.usersReportedPerReason && <GraficoCompliantsPerReason usersReportedPerReason={this.state.usersReportedPerReason}/>}
          </div> 
          <br></br>
          <br></br>
       
        </div>
      
    );
  }
}

export default Informes;



