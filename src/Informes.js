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
    categoriesPerGender: null,
    citiesPerMatch: null,
    usersCreatedPerMonth: null,
    usersReportedPerReason: null,
    //estados para cargando graficos
    loadingMatchesPerMonth: true,
    loadingReportedUsers: true,
    loadingCitiesPerMatch: true,
  }

  componentDidMount() {
  this.getMatchesPerMonth();
   this.getUsersCreatedPerMonth();
   this.getUsersReportedPerReason();
   this.getCategoriesPerGender();
  this.getCitiesPerMatch();


  }
  getCategoriesPerGender = async () => {
    try {
      console.log("entrooooooooooooo")
      const response = await userServices.getCategoriesPerGender()

      if (response.data) {
        const { data } = response;

        this.setState({
          categoriesPerGender: data
        });
        console.log(this.state.categoriesPerGender)
      }
    } catch (error) {
      console.error(`There was an error trying to get the category per gender data`)
    }
  }

  getMatchesPerMonth = async () => {
    try {
      const response = await userServices.getMatchesPerMonth()

      if (response.data) {
        const { data } = response;

        this.setState({
          matchesPerMonth: data, loadingMatchesPerMonth:false
        });
      }
    } catch (error) {
      console.error(`There was an error trying to get the matchesPerMonth data`)
    }
  }
  
  getUsersCreatedPerMonth = async () => {
    // const añoUsuariosCreados = document.getElementById("optionsRadiosYear").value
    const añoUsuariosCreados = 2020;
    
    try {
      console.log("entro")
      const response = await userServices.getUsersCreatedPerMonth(añoUsuariosCreados)

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
          usersReportedPerReason: data, loadingReportedUsers: false
        });
        
      }
    } catch (error) {
      console.error(`There was an error trying to get the Reported users per reason data`)
    }
  }


 getCitiesPerMatch = async () =>
 {
  try {
    
    const response = await userServices.getCitiesPerMatch()
    
    if (response.data) {
      const { data } = response;
      
      this.setState({
        citiesPerMatch: data, loadingCitiesPerMatch:false
       
      });
      
    }
  } catch (error) {
    console.error(`There was an error trying to get the cities per match`)
  }

 }


  render() {

    if (this.state.loadingMatchesPerMonth &&this.state.loadingReportedUsers  ){
      return (
        
          <div>
            <h3>Cargando gráficos...</h3>
          </div>
          )
    
      }

    return (

      <div>

        <h2>Informes de uso de la plataforma</h2>

        <br></br>
        
        
          <div className="GraphicWrapper">
           {this.state.categoriesPerGender && <GraficoCategoryPerGender  categoriesPerGender={this.state.categoriesPerGender}/>}
          </div>
          <br></br>
          <br></br>
          <div className="GraphicWrapper">
           {this.state.citiesPerMatch && <GraficoCityPerMonth citiesPerMatches={this.state.citiesPerMatch} />}
          </div>
          <br></br>
          <br></br> 
          <div className="GraphicWrapper" >
            {this.state.matchesPerMonth && <GraficoEncuentrosPorMes matchesPerMonth={this.state.matchesPerMonth}/>}
          </div>
          


          <br></br>
          <br></br>


          <div className="GraphicWrapper" >
            {this.state.usersCreatedPerMonth && <GraficoNewUserPerMonth usersCreatedPerMonth={this.state.usersCreatedPerMonth} />}
          </div>
          <br></br>
          <br></br>
          <div className="GraphicWrapper" >
            {this.state.usersReportedPerReason && <GraficoCompliantsPerReason usersReportedPerReason={this.state.usersReportedPerReason} />}
          </div>
          <br></br>
          <br></br>

        

      </div>
    );
  }
}

export default Informes;



