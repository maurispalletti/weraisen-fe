import React, { Component } from 'react';
import './Results.css';
import './Matches.css';
import home from './icons/home.svg';
import avatar_woman_1 from './avatars/avatar_1.svg';
import MatchCard from './components/MatchCard';
import { Redirect } from 'react-router'

import userServices from './services/userServices'

let fullInfoMatches = [];

class Matches extends Component {

  state = {
    goToHome: false,
    searchFailed: false,
    matches: [],
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
        this.setState({ matches: fullInfoMatches })
      }
    } catch (error) {
      console.error(`There was an error trying to get matches: ${error}`)
      this.setState({ searchFailed: true })
      return null
    }
  }

  async componentWillMount() {
    await this.getMatches()
  }

  renderMatches = () => {
    const { matches } = this.state

    console.log(matches);



    if (matches.length > 0) {



      return matches.map(match => {

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
    }
  }

  render() {
    if (this.state.goToHome) {
      return <Redirect to="/home" />
    }

    return (
      <div className="Home">
        <div className="Header">
          <a href={"/home"} className="HomeIcon">
            <img src={home} alt={"Home"} />
          </a>
          <div className="HeaderImage">
            <a href={"/profile"}>
              <img src={avatar_woman_1} alt={"User"} />
            </a>
          </div>
        </div>

        <div className="Body">

          <div className="Section">
            <h4>Tus encuentros:</h4>
            {this.renderMatches()}
          </div>

          <div className="Section">
            <input type="button" className="ResultsButton" value="Volver al menú principal" onClick={() => this.setState({ goToHome: true })} />
          </div>
          {this.state.searchFailed && (
            <p className="form-error">La búsqueda de encuentros falló. Intentá de nuevo por favor.</p>
          )}
        </div>
      </div>
    );
  }
}
export default Matches;
