import React, { Component } from 'react';
import avatar_1 from './avatars/avatar_1.svg';
import './Informes.css';
import home from './icons/home.svg'
import userServices from './services/userServices'

import { Redirect } from 'react-router'

import GraficoMatchesPorMes from './components/Grafico2barrasMatchesPorMes'

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
      <div className="Home">
        <div className="Header">
          <a href={"/home"} className="HomeIconNew">
            <img src={home} alt={"Home"} />
          </a>
          <div className="HeaderText">
            <div className={"HeaderTextLink"}>Admin</div>

            <a href={"/login"} className={"HeaderTextLink"}>
              <div>Log Out</div>
            </a>
          </div>
        </div>
        <div className="Body">
          <h3>Informes de uso de la plataforma</h3>
          <div className="GraphicWrapper">
            {this.state.matchesPerMonth && <GraficoMatchesPorMes matchesPerMonth={this.state.matchesPerMonth} />}
          </div>
        </div>
      </div>
    );
  }
}

export default Informes;



