import React, { Component } from 'react';
import './Results.css';
import './Matches.css';
import Header from '../src/components/Header'
import MatchCard from './components/MatchCard';
import { Redirect } from 'react-router'

import userServices from './services/userServices'

let fullInfoMatches = [];

class Matches extends Component {

  state = {
    goToHome: false,
    searchFailed: false,
    matches: [],
    newMatches: [],
    loading: true,
  }

  getMatches = async () => {

    try {
      const userId = localStorage.getItem("userId");

      const response = await userServices.getMatches(userId);

      if (response && response.data && response.data.length > 0) {

        const matches = response.data;

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
          const { data: { firstName, lastName } } = await userServices.getProfile(userToFind);
          const partnerName = `${firstName} ${lastName}`;
          fullInfoMatches.push({ ...match, partnerRole, partnerName });
        }

        let newMatches = [];

        if (fullInfoMatches.length > 0) {
          newMatches = fullInfoMatches.map(match => {
            const { id, partnerRole, partnerName, chatId, status } = match
            return (
              <MatchCard
                key={id}
                partnerRole={partnerRole}
                partnerName={partnerName}
                chatId={chatId}
                status={status}
              />
            )
          });
          this.setState({ newMatches, loading: false })
        }
      }
    } catch (error) {
      console.error(`There was an error trying to get matches: ${error}`)
      this.setState({ searchFailed: true, loading: false })
      return null
    }
  }

  componentDidMount() {
    this.getMatches()
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  }

  render() {
    if (this.state.goToHome) {
      return <Redirect to="/search" />
    }

    if (this.state.loading) {
      return (
        <div className="Matches">
          <Header></Header>
          <div className="BodyMatches">
            <h2>Cargando resutlados...</h2>
          </div>
        </div>
      )
    } else {
      return (
        <div className="Matches">
          <Header></Header>

          <div className="BodyMatches">

            <div className="Section">
              <h2>Tus encuentros:</h2>
              {this.state.newMatches}
            </div>

            <div className="Section">
              <input type="button" className="MatchesButton" value="Volver al menú principal" onClick={() => this.setState({ goToHome: true })} />
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
export default Matches;
