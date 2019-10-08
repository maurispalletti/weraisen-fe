import React, { Component } from 'react';
import './Results.css';
import home from './icons/home.svg';
import avatar_woman_1 from './avatars/avatar_1.svg';
import GuideCard from './GuideCard';
import { Redirect } from 'react-router'

import loginServices from './services/userServices'

class Results extends Component {
  state = {
    goToHome: false,
    searchFailed: false,
    guides: [],
  }

  getGuides = async (filters) => {
    try {
      console.log(`!!!!!!!!!!!!!!!!`)
      console.log(filters)

      const response = await loginServices.getGuides(filters);

      if (response && response.data && response.data.length > 0) {
        this.setState({ guides: response.data })
      }
    } catch (error) {
      console.error(`There was an error trying to get guides: ${error}`)
      this.setState({ searchFailed: true })
      return null
    }
  }

  async componentWillMount() {
    let filters = localStorage.getItem("filters");
    filters = JSON.parse(filters)
    await this.getGuides(filters)
  }

  renderGuides = () => {
    const { guides } = this.state
    if (guides.length > 0) {
      return guides.map(guide => {
        const { firstName, lastName, age, city, languages, knowledge, description, gender } = guide
        return (
          <GuideCard
            key={`lastName_${lastName}`}
            firstName={firstName}
            lastName={lastName}
            city={city}
            age={age}
            languages={languages}
            gender={gender}
            knowledge={knowledge}
            description={description}
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
            <h4>Guías que coinciden con tu búsqueda:</h4>
            {this.renderGuides()}
            {/* {this.state.guides} */}
          </div>

          <div className="Section">
            <input type="button" className="ResultsButton" value="Volver al menú principal" onClick={() => this.setState({ goToHome: true })} />
          </div>
          {this.state.searchFailed && (
            <p className="form-error">La búsqueda de guías falló. Intantá de nuevo.</p>
          )}
        </div>
      </div>
    );
  }
}
export default Results;
