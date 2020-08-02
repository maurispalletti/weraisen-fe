import React, { Component } from 'react';
import './Results.css';
import './Matches.css';
import Header from '../src/components/Header'
import MatchCard from './components/MatchCard';
import { Redirect } from 'react-router';
import DropdownGender from './forms/DropdownGender';
import FieldWithError from './forms/FieldWithError';
import userServices from './services/userServices'

const genders = [
  {
    value: "Femenino",
    description: 'Femenino'
  },
  {
    value: "Masculino",
    description: 'Masculino'
  },
  {
    value: "Otro",
    description: 'Otro'
  },
]

class Matches extends Component {

  state = {
    goToHome: false,
    goToProfile: false,
    searchFailed: false,
    matches: [],
    newMatches: [],
    loading: true,
    showFilters:false
  }

  componentDidMount() {
    this.getMatches()
  }
  mostrarFiltros = () => {
    this.setState({ showFilters: !this.state.showFilters });

  }
  getMatches = async () => {
    try {
      let fullInfoMatches = [];

      const userId = localStorage.getItem("userId");

      const response = await userServices.getMatches(userId);

      if (response && response.data) {
        const matches = response.data;

        console.log(`MATCHES:`)
        console.log(matches)

        for (let index = 0; index < matches.length; index++) {
          const match = matches[index];

          let userToFind;
          let partnerRole;

          if (userId === match.guide) {
            userToFind = match.tourist;
            partnerRole = 'TOURIST';
          } else {
            userToFind = match.guide;
            partnerRole = 'GUIDE';
          }
          const { data: { firstName, lastName, profilePicture } } = await userServices.getProfile(userToFind);
          const partnerName = `${firstName} ${lastName}`;
          fullInfoMatches.push({ ...match, partnerRole, partnerName, profilePicture });
        }

        let newMatches = [];

        if (fullInfoMatches.length > 0) {
          newMatches = fullInfoMatches.map(match => {
            const { id, partnerRole, partnerName, chatId, status, createdAt, profilePicture } = match
            return (
              <MatchCard
                key={id}
                matchId={id}
                partnerRole={partnerRole}
                partnerName={partnerName}
                chatId={chatId}
                status={status}
                date={createdAt}
                profilePicture={profilePicture}

                refresh={() => this.getMatches()}
              />
              
            )
          });
        }
        this.setState({ newMatches, loading: false })
      }
    } catch (error) {
      console.error(`There was an error trying to get matches: ${error}`)
      this.setState({ searchFailed: true, loading: false })
      return null
    }
  }


  render() {
    if (this.state.goToHome) {
      return <Redirect to="/search" />
    }
    if (this.state.goToProfile) {
      return <Redirect to="/profile" />
    }

    if (this.state.loading) {
      return (
        <div className="Matches">
          <Header />
          <div className="BodyMatches">
            <h2>Cargando resultados...</h2>
          </div>
        </div>
      )
    } else {
      if (this.state.newMatches.length < 1) {
        return (
          <div className="Matches">
            <Header />
            <div className="BodyMatches">
              <h2>Aún no posees ningun encuentro</h2>
            </div>
          </div>
        )
      } else {
        return (
          <div className="Matches">
            <Header />
            <div className="BodyMatches">
              <div className="Section">
                <h2 style={{ marginBottom: 40 }}>Tus encuentros</h2>

                <p className="verMas" onClick={() => this.mostrarFiltros()} >{this.state.showFilters ? "Ocultar filtros" : "Filtrar encuentros"}</p>
      
                <div className="Filters" style={{ display: this.state.showFilters ? 'block' : 'none' }}>
             
               acá van los filtros
               {/* <DropdownGender name="gender" styleName={"input"} options={genders} /> */}
               {/* <FieldWithError name="birthDate" placeholder="Ingresa tu fecha de nacimiento" className="input"  type="date"/> */}
              </div>
              <br></br>
                {this.state.newMatches}
              </div>
              <div className="ButtonSection">
                <input type="button" className="btn-primero" value="Volver al menú principal" onClick={() => this.setState({ goToHome: true })} />
              </div>
              <div className="Section">
                <input type="button" className="btn-primero" value="Ir a mi perfil" onClick={() => this.setState({ goToProfile: true })} />
              </div>
              {this.state.searchFailed && (
                <p className="form-error">La búsqueda de encuentros falló. Intentá de nuevo por favor.</p>
              )}
            </div>
          </div>
        );
      }
    }
  }
}
export default Matches;
