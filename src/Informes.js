import React, { Component } from 'react';
import userServices from './services/userServices'

// import { Redirect } from 'react-router'

import GraficoCategoryPerGender from './components/ReporCategoryPerGender';
import GraficoCityPerMonth from './components/ReportCityPerMonth';
import GraficoEncuentrosPorMes from './components/ReportMatchesPorMes';
import GraficoNewUserPerMonth from './components/ReportNewUsersPerMonth';
import GraficoCompliantsPerReason from './components/ReportCompliantsPerReason';
import GraficoUsersPerAge from './components/ReportUsersPerAge';
import GraficoUsersPerLanguages from './components/ReportUsersPerLanguages';
import GraficoUsersPerGender from './components/ReportUsersPerGender';
import GraficoMatchesPerCategories from './components/ReportMatchesPerCategories';
import GraficoCategoriesPerCities from './components/ReportCategoriesPerCities';
class Informes extends Component {

  state = {
    goToHome: false,
    matchesPerMonth: null,
    categoriesPerGender: null,
    citiesPerMatch: null,
    usersCreatedPerMonth: null,
    usersReportedPerReason: null,
    usersCreatedPerAge: null,
    matchesPerCategories: null,
    usersPerLanguages: null,
    usersCreatedPerGender: null,
    categoriesPerCities: null,
    //estados para mostrar graficos
    matchesPerMonthSelect: false,
    matchesPerCategoriesSelect: false,
    citiesPerMatchSelect: false,

    usersCreatedPerMonthSelect: false,
    reportedUsersSelect: false,
    usersCreatedPerGenderSelect: false,
    usersCreatedPerAgeSelect: false,
    usersPerLanguagesSelect: false,

    categoriesPerGenderSelect: false,
    categoriesPerCitySelect: false


  }


  componentDidMount() {
    this.getCategoriesPerCity();
    this.getMatchesPerMonth();
    this.getUsersPerLanguages();
    this.getUsersPerAge();
    this.getUsersCreatedPerMonth();
    this.getUsersCreatedPerGender();
    this.getUsersReportedPerReason();
    this.getCategoriesPerGender();
    this.getCitiesPerMatch();
    this.getMatchesPerCategories();

  }
  getCategoriesPerCity = async () => {
    try {

      const response = await userServices.getCategoriesPerCity()

      if (response.data) {
        const { data } = response;

        this.setState({
          categoriesPerCities: data,
        });

      }
    } catch (error) {
      console.error(`There was an error trying to get the matches per categories`)
    }
  }
  getMatchesPerCategories = async () => {
    try {

      const response = await userServices.getMatchesPerCategories()

      if (response.data) {
        const { data } = response;

        this.setState({
          matchesPerCategories: data,
        });

      }
    } catch (error) {
      console.error(`There was an error trying to get the matches per categories`)
    }
  }
  getUsersPerLanguages = async () => {
    try {

      const response = await userServices.getUsersPerLanguages()

      if (response.data) {
        const { data } = response;

        this.setState({
          usersPerLanguages: data,
        });
      }
    } catch (error) {
      console.error(`There was an error trying to get the users per languages`)
    }
  }
  getUsersCreatedPerGender = async () => {
    try {

      const response = await userServices.getUsersPerGender()

      if (response.data) {
        const { data } = response;

        this.setState({
          usersCreatedPerGender: data,
        });
        console.log(this.state.usersCreatedPerGender)
      }
    } catch (error) {
      console.error(`There was an error trying to get the users per gender`)
    }
  }

  getCategoriesPerGender = async () => {
    try {

      const response = await userServices.getCategoriesPerGender()

      if (response.data) {
        const { data } = response;

        this.setState({
          categoriesPerGender: data,
        });

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
          matchesPerMonth: data
        });
      }

    } catch (error) {
      console.error(`There was an error trying to get the matchesPerMonth data`)
    }
  }


  getUsersCreatedPerMonth = async () => {


    try {

      const response = await userServices.getUsersCreatedPerMonth()
      if (response.data) {
        const { data } = response;

        this.setState({
          usersCreatedPerMonth: data,
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
      console.error(`There was an error trying to get the Reported users per reason data`)
    }
  }


  getCitiesPerMatch = async () => {
    try {

      const response = await userServices.getCitiesPerMatch()

      if (response.data) {
        const { data } = response;

        this.setState({
          citiesPerMatch: data

        });

      }
    } catch (error) {
      console.error(`There was an error trying to get the cities per match`)
    }

  }
  getUsersPerAge = async () => {
    try {

      const response = await userServices.getUsersPerAge()

      if (response.data) {
        const { data } = response;

        this.setState({
          usersCreatedPerAge: data,
        });
      }
    } catch (error) {
      console.error(`There was an error trying to get the users per age`)
    }
  }
  render() {

    return (
      <div>
        <div><h2 style={{ marginBottom: '18px' }}>Informes de uso de la plataforma</h2>
          <div class="container-fluid" style={{ display: "flex", margin: "auto", textAlign: "center", justifyContent: "center" }}>

            <div class="form-group" style={{ padding: "10px", minWidth: "313px" }} >
              <label for="encuentros" style={{ fontWeight: "bold", color: "#F9AA68", fontSize: "20px" }}>Informes de encuentros</label>
              <div class="checkbox" id="encuentros" style={{ textAlign: "left" }}>
                <input checked={this.state.matchesPerMonthSelect} onChange={() => this.setState({ matchesPerMonthSelect: !this.state.matchesPerMonthSelect })} name="matchesPerMonth" type="checkbox" /> <label for="encuentros" style={{ fontWeight: "bold", color: "#aaaaaa", fontSize: "18px" }}>Encuentros creados por mes</label><br></br>
                <input checked={this.state.citiesPerMatchSelect} onChange={() => this.setState({ citiesPerMatchSelect: !this.state.citiesPerMatchSelect })} name="matchesPerMonth" type="checkbox" /> <label for="encuentros" style={{ fontWeight: "bold", color: "#aaaaaa", fontSize: "18px" }}>Encuentros creados por ciudad</label> <br></br>
                <input checked={this.state.matchesPerCategoriesSelect} onChange={() => this.setState({ matchesPerCategoriesSelect: !this.state.matchesPerCategoriesSelect })} name="matchesPerMonth" type="checkbox" /> <label for="encuentros" style={{ fontWeight: "bold", color: "#aaaaaa", fontSize: "18px" }}>Encuentros creados por categorías</label><br></br>
              </div>
            </div>
            <div class="form-group" style={{ padding: "10px", minWidth: "313px" }}>
              <label for="usuarios" style={{ fontWeight: "bold", color: "#F9AA68", fontSize: "20px" }}>Informes de usuarios</label>
              <div class="checkbox" id="usuarios" style={{ textAlign: "left" }}>
                <input checked={this.state.newUsersSelect} onChange={() => this.setState({ newUsersSelect: !this.state.newUsersSelect })} name="newUsers" type="checkbox" /> <label for="usuarios" style={{ fontWeight: "bold", color: "#aaaaaa", fontSize: "18px" }}>Usuarios creados por mes</label><br></br>
                <input checked={this.state.usersCreatedPerGenderSelect} onChange={() => this.setState({ usersCreatedPerGenderSelect: !this.state.usersCreatedPerGenderSelect })} name="userCreatedPerMonth" type="checkbox" />  <label for="usuarios" style={{ fontWeight: "bold", color: "#aaaaaa", fontSize: "18px" }}>Usuarios creados por tipo</label><br></br>
                <input checked={this.state.usersCreatedPerAgeSelect} onChange={() => this.setState({ usersCreatedPerAgeSelect: !this.state.usersCreatedPerAgeSelect })} name="usersCreatedPerAge" type="checkbox" />  <label for="usuarios" style={{ fontWeight: "bold", color: "#aaaaaa", fontSize: "18px" }}>Usuarios creados por edad</label><br></br>
                <input checked={this.state.reportedUsersSelect} onChange={() => this.setState({ reportedUsersSelect: !this.state.reportedUsersSelect })} name="reportedUsersSelect" type="checkbox" /> <label for="usuarios" style={{ fontWeight: "bold", color: "#aaaaaa", fontSize: "18px" }}>Usuarios denunciados por tipo</label><br></br>
              </div>


            </div>

            <div class="form-group" style={{ padding: "10px", minWidth: "313px" }}>
              <label for="usuarios" style={{ fontWeight: "bold", color: "#F9AA68", fontSize: "20px" }}>Informes de Guías</label>
              <div class="checkbox" id="categorias" style={{ textAlign: "left" }}>
                <input checked={this.state.categoriesPerGenderSelect} onChange={() => this.setState({ categoriesPerGenderSelect: !this.state.categoriesPerGenderSelect })} name="categoriesPerGender" type="checkbox" /> <label for="usuarios" style={{ fontWeight: "bold", color: "#aaaaaa", fontSize: "18px" }}>Categorias más elegidas</label><br></br>
                <input checked={this.state.categoriesPerCitySelect} onChange={() => this.setState({ categoriesPerCitySelect: !this.state.categoriesPerCitySelect })} name="categoriesPerCity" type="checkbox" /> <label for="usuarios" style={{ fontWeight: "bold", color: "#aaaaaa", fontSize: "18px" }}>Categorias elegidas por ciudad</label><br></br>
                <input checked={this.state.usersPerLanguagesSelect} onChange={() => this.setState({ usersPerLanguagesSelect: !this.state.usersPerLanguagesSelect })} name="usersPerLanguages" type="checkbox" />  <label for="usuarios" style={{ fontWeight: "bold", color: "#aaaaaa", fontSize: "18px" }}>Idiomas más elegidos</label><br></br>
              </div>
            </div>
          </div>

        </div>


        <hr></hr>
        <div style={{ background: " #272B30" }}>
          <div className="GraphicWrapper" style={{ padding: "10px" }} >
            {this.state.matchesPerMonth && this.state.matchesPerMonthSelect && <GraficoEncuentrosPorMes matchesPerMonth={this.state.matchesPerMonth} />}
          </div>
          <div class="container-fluid" >
            <div className="GraphicWrapper" style={{ padding: "10px" }}>
              {this.state.citiesPerMatch && this.state.citiesPerMatchSelect && <GraficoCityPerMonth citiesPerMatches={this.state.citiesPerMatch} />}
            </div>
            <div className="GraphicWrapper" style={{ padding: "10px" }} >
              {this.state.matchesPerCategories && this.state.matchesPerCategoriesSelect && <GraficoMatchesPerCategories matchesPerCategories={this.state.matchesPerCategories} />}
            </div>
            <div className="GraphicWrapper" style={{ padding: "10px" }} >
              {this.state.usersCreatedPerMonth && this.state.newUsersSelect && <GraficoNewUserPerMonth usersCreatedPerMonth={this.state.usersCreatedPerMonth} />}
            </div>
            <div className="GraphicWrapper" style={{ padding: "10px" }} >
              {this.state.usersCreatedPerGender && this.state.usersCreatedPerGenderSelect && <GraficoUsersPerGender usersPerGender={this.state.usersCreatedPerGender} />}
            </div>
            <div className="GraphicWrapper" style={{ padding: "10px" }} >
              {this.state.usersCreatedPerAge && this.state.usersCreatedPerAgeSelect && <GraficoUsersPerAge usersPerAge={this.state.usersCreatedPerAge} />}
            </div>
            <div className="GraphicWrapper" style={{ padding: "10px" }} >
              {this.state.usersReportedPerReason && this.state.reportedUsersSelect && <GraficoCompliantsPerReason usersReportedPerReason={this.state.usersReportedPerReason} />}
            </div>
            <div className="GraphicWrapper" style={{ padding: "10px" }}>
              {this.state.categoriesPerGender && this.state.categoriesPerGenderSelect && <GraficoCategoryPerGender categoriesPerGender={this.state.categoriesPerGender} />}
            </div>
            <div className="GraphicWrapper" style={{ padding: "10px" }} >
              {this.state.categoriesPerCities && this.state.categoriesPerCitySelect && <GraficoCategoriesPerCities categoriesPerCities={this.state.categoriesPerCities} />}
            </div>
            <div className="GraphicWrapper" style={{ padding: "10px" }} >
              {this.state.usersPerLanguagesSelect && this.state.usersPerLanguages && <GraficoUsersPerLanguages usersPerLanguages={this.state.usersPerLanguages} />}
            </div>
          </div>
        </div>

      </div>);
  }
}

export default Informes;



