import React, { Component } from 'react';
import userServices from './services/userServices'

// import { Redirect } from 'react-router'

import GraficoCategoryPerGender from './components/ReporCategoryPerGender';
import GraficoCityPerMonth from './components/ReportCityPerMonth';
import GraficoEncuentrosPorMes from './components/ReportMatchesPorMes';
import GraficoNewUserPerMonth from './components/ReportNewUsersPerMonth';
import GraficoCompliantsPerReason from './components/ReportCompliantsPerReason';
import GraficoCategoriesMostSetelcted from './components/ReportCategoriesMostSelected';
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
    categoriesMostSelected: null,
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

    categoriesMostSelectedSelect: false,
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
    this.getCategoriesMostSelected();
    this.getMatchesPerCategories();

  }
  getCategoriesPerCity = async () => {
    try {
      console.log("entrooooooooooooo")
      const response = await userServices.getCategoriesPerCity()

      if (response.data) {
        const { data } = response;

        this.setState({
          categoriesPerCities: data,
        });
        console.log(this.state.categoriesPerCities)
      }
    } catch (error) {
      console.error(`There was an error trying to get the matches per categories`)
    }
  }
  getMatchesPerCategories = async () => {
    try {
      console.log("entrooooooooooooo")
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
  getCategoriesMostSelected = async () => {

    try {

      const response = await userServices.getCategoriesMostSelected()

      if (response.data) {
        const { data } = response;

        this.setState({
          categoriesMostSelected: data,
        });

      }
    } catch (error) {
      console.error(`There was an error trying to get the categories most selected`)
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
        <div><h2>Informes de uso de la plataforma</h2>
          <div class="container-fluid" style={{ display: "flex" }}>

            <div class="form-group" style={{ padding: "10px" }} >
              <label for="encuentros" style={{ fontWeight: "bold", color: "#F9AA68", fontSize: "15px" }}>Informes de encuentros</label>
              <div class="checkbox" id="encuentros" style={{ textAlign: "left" }}>
                <input checked={this.state.matchesPerMonthSelect} onChange={() => this.setState({ matchesPerMonthSelect: !this.state.matchesPerMonthSelect })} name="matchesPerMonth" type="checkbox" /> Encuentros creados por mes <br></br>
                <input checked={this.state.citiesPerMatchSelect} onChange={() => this.setState({ citiesPerMatchSelect: !this.state.citiesPerMatchSelect })} name="matchesPerMonth" type="checkbox" /> Encuentros creados por ciudad <br></br>
                <input checked={this.state.matchesPerCategoriesSelect} onChange={() => this.setState({ matchesPerCategoriesSelect: !this.state.matchesPerCategoriesSelect })} name="matchesPerMonth" type="checkbox" /> Encuentros creados por categoría <br></br>
              </div>
            </div>
            <div class="form-group" style={{ padding: "10px" }}>
              <label for="usuarios" style={{ fontWeight: "bold", color: "#F9AA68", fontSize: "15px" }}>Informes de usuarios</label>
              <div class="checkbox" id="usuarios" style={{ textAlign: "left" }}>
                <input checked={this.state.newUsersSelect} onChange={() => this.setState({ newUsersSelect: !this.state.newUsersSelect })} name="newUsers" type="checkbox" /> Usuarios creados por mes<br></br>
                <input checked={this.state.reportedUsersSelect} onChange={() => this.setState({ reportedUsersSelect: !this.state.reportedUsersSelect })} name="reportedUsersSelect" type="checkbox" /> Usuarios denunciados por tipo <br></br>
                <input checked={this.state.usersCreatedPerGenderSelect} onChange={() => this.setState({ usersCreatedPerGenderSelect: !this.state.usersCreatedPerGenderSelect })} name="userCreatedPerMonth" type="checkbox" /> Usuarios creados por género <br></br>
                <input checked={this.state.usersCreatedPerAgeSelect} onChange={() => this.setState({ usersCreatedPerAgeSelect: !this.state.usersCreatedPerAgeSelect })} name="usersCreatedPerAge" type="checkbox" /> Usuarios creados por  edad <br></br>
                <input checked={this.state.usersPerLanguagesSelect} onChange={() => this.setState({ usersPerLanguagesSelect: !this.state.usersPerLanguagesSelect })} name="usersPerLanguages" type="checkbox" /> Idiomas más elegidos <br></br>
              </div>


            </div>

            <div class="form-group" style={{ padding: "10px" }}>
              <label for="usuarios" style={{ fontWeight: "bold", color: "#F9AA68", fontSize: "15px" }}>Informes de categorías elegidas por guía</label>
              <div class="checkbox" id="categorias" style={{ textAlign: "left" }}>
                <input checked={this.state.categoriesMostSelectedSelect} onChange={() => this.setState({ categoriesMostSelectedSelect: !this.state.categoriesMostSelectedSelect })} name="categoriesMostSelected" type="checkbox" /> Cantidad de guías por categoría <br></br>
                <input checked={this.state.categoriesPerGenderSelect} onChange={() => this.setState({ categoriesPerGenderSelect: !this.state.categoriesPerGenderSelect })} name="categoriesPerGender" type="checkbox" /> Cantidad de guías por género <br></br>
                <input checked={this.state.categoriesPerCitySelect} onChange={() => this.setState({ categoriesPerCitySelect: !this.state.categoriesPerCitySelect })} name="categoriesPerCity" type="checkbox" /> Cantidad de guías por ciudad<br></br>
              </div>
            </div>
          </div>

        </div>


        <hr></hr>
        <div style={{ background: " #272B30" }}>
          <div class="container-fluid" >
            <div className="GraphicWrapper" style={{ padding: "10px" }}>
              {this.state.citiesPerMatch && this.state.citiesPerMatchSelect && <GraficoCityPerMonth citiesPerMatches={this.state.citiesPerMatch} />}
            </div>
            <div className="GraphicWrapper" style={{ padding: "10px" }} >
              {this.state.matchesPerMonth && this.state.matchesPerMonthSelect && <GraficoEncuentrosPorMes matchesPerMonth={this.state.matchesPerMonth} />}
            </div>
            <div className="GraphicWrapper" style={{ padding: "10px" }}>
              {this.state.categoriesPerGender && this.state.categoriesPerGenderSelect && <GraficoCategoryPerGender categoriesPerGender={this.state.categoriesPerGender} />}
            </div>
            <div className="GraphicWrapper" style={{ padding: "10px" }} >
              {this.state.usersCreatedPerMonth && this.state.newUsersSelect && <GraficoNewUserPerMonth usersCreatedPerMonth={this.state.usersCreatedPerMonth} />}
            </div>
            <div className="GraphicWrapper" style={{ padding: "10px" }} >
              {this.state.usersReportedPerReason && this.state.reportedUsersSelect && <GraficoCompliantsPerReason usersReportedPerReason={this.state.usersReportedPerReason} />}
            </div>
            <div className="GraphicWrapper" style={{ padding: "10px" }} >
              {this.state.usersCreatedPerAge && this.state.usersCreatedPerAgeSelect && <GraficoUsersPerAge usersPerAge={this.state.usersCreatedPerAge} />}
            </div>
            <div className="GraphicWrapper" style={{ padding: "10px" }} >
              {this.state.categoriesMostSelected && this.state.categoriesMostSelectedSelect && <GraficoCategoriesMostSetelcted categoriesMostSelected={this.state.categoriesMostSelected} />}
            </div>
            <div className="GraphicWrapper" style={{ padding: "10px" }} >
              {this.state.usersPerLanguagesSelect && this.state.usersPerLanguages && <GraficoUsersPerLanguages usersPerLanguages={this.state.usersPerLanguages} />}
            </div>
            <div className="GraphicWrapper" style={{ padding: "10px" }} >
              {this.state.usersCreatedPerGender && this.state.usersCreatedPerGenderSelect && <GraficoUsersPerGender usersPerGender={this.state.usersCreatedPerGender} />}
            </div>
            <div className="GraphicWrapper" style={{ padding: "10px" }} >
              {this.state.matchesPerCategories && this.state.matchesPerCategoriesSelect && <GraficoMatchesPerCategories matchesPerCategories={this.state.matchesPerCategories} />}
            </div>
            <div className="GraphicWrapper" style={{ padding: "10px" }} >
              {this.state.categoriesPerCities && this.state.categoriesPerCitySelect && <GraficoCategoriesPerCities categoriesPerCities={this.state.categoriesPerCities} />}
            </div>
          </div>
        </div>

      </div>);
  }
}

export default Informes;



