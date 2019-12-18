import React, { Component } from 'react';
import './Results.css';

import GuideCard from './components/GuideCard';
import { Redirect } from 'react-router'
import Toolbar from './components/navbar/toolbar'
import SideDrawer from './components/navbar/sideDrawer/sideDrawer'
import Backdrop from './components/navbar/backdrop/backdrop'
import userServices from './services/userServices'

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

      const response = await userServices.getGuides(filters);

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
        const { id, firstName, lastName, age, city, languages, knowledge, description, gender } = guide
        return (
          <GuideCard
            key={id}
            guideId={id}
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

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
           return {sideDrawerOpen: !prevState.sideDrawerOpen};
      });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  }

  render() {
    if (this.state.goToHome) {
      return <Redirect to="/search" />
    }
    let sideDrawer;
    let backdrop;
   
    if (this.state.sideDrawerOpen) {
      sideDrawer =<SideDrawer/>;
      backdrop = <Backdrop click={this.backdropClickHandler}/>

    }

    return (
      <div className="Results">
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
        {sideDrawer}
        {backdrop}
        {/* <div className="Header">
          <a href={"/home"} className="HomeIcon">
            <img src={home} alt={"Home"} />
          </a>
          <div className="HeaderImage">
            <a href={"/profile"}>
              <img src={avatar_woman_1} alt={"User"} />
            </a>
          </div>
        </div> */}

        {/* <div className="Header">
          <a href={"/home"} className="HomeIconNew">
            <img src={home} alt={"Home"} />
          </a>
          <div className="HeaderText">
            <a href={"/matches"} className={"HeaderTextLink"}>
              <div>Mis Encuentros</div>
            </a>
            <a href={"/profile"} className={"HeaderTextLink"}>
              <div>Mi perfil</div>
            </a>
          </div>
        </div> */}

        <div className="BodyResults">

          <div className="Section">
            <h2>Guías que coinciden con tu búsqueda:</h2>
            {this.renderGuides()}
          </div>

          <div className="Section">
            <input type="button" className="ResultsButton" value="Volver al menú principal" onClick={() => this.setState({ goToHome: true })} />
          </div>
          {this.state.searchFailed && (
            <p className="form-error">La búsqueda de guías falló. Intentá de nuevo por favor.</p>
          )}
        </div>
      </div>
    );
  }
}
export default Results;
