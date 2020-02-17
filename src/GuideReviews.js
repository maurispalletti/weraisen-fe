import React, { Component } from 'react';
import { Redirect } from 'react-router';
import ReviewsCard from './components/ReviewsCard';


import Toolbar from './components/navbar/toolbar';
import SideDrawer from './components/navbar/sideDrawer/sideDrawer';
import Backdrop from './components/navbar/backdrop/backdrop';
import './GuideReviews.css';
import userServices from './services/userServices'
import Axios from 'axios';

const userId = localStorage.getItem("userId")

/*const userId= userServices.getGuides('5dc1e0b52136dd0d1db6e3cf')*/

class GuideReviews extends Component {
  state = {
    goToResults: false,
    searchFailed: false,
    reviews: [],
    guideName: "",
  }
  getNameGuide = async () => {
    
    const name = await (await userServices.getProfile('5dc1e0b52136dd0d1db6e3cf'))
    this.setState({guideName: name})
     }
  getReviews = async () => {
    try {
      const userId = localStorage.getItem("userId"); /* aca va el id del guia de la card seleccionada*/
       

      const response = await userServices.getReviews('5dc1e0b52136dd0d1db6e3cf')
      if (response && response.data && response.data.length > 0) {

        this.setState({ reviews: response.data })
        console.log(response.data)
      }
    } catch (error) {
      console.error(`There was an error trying to get reviews: ${error}`)
      this.setState({ searchFailed: true })
    }
  }
  async componentWillMount() {
    await this.getNameGuide()
     await this.getReviews()
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  }

  renderReviews = () => {
    const { reviews } = this.state
    if (reviews.length > 0) {
      return reviews.map(review => {
        const { giver, points, description, createdAt, _id } = review
        return (
          
          <ReviewsCard
            key={_id}
            giverId={giver}
            description={description}
            points={points}
            createdAt={createdAt}
          />
          
        )
      });
    }
  }


  render() {
    if (this.state.goToResults) {
      return <Redirect to="/results" />
    }

    let sideDrawer;
    let backdrop;
    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer />;
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (
      <div className="GuideReviews">
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        {sideDrawer}
        {backdrop}

        <div className="BodyGuide">
          <div className="Section">
            <h2>¡Valoraciones de {this.getNameGuide}!</h2> 
            {this.renderReviews()}
          </div>
          <div className="buttonsSection">
            <input type="button" className="button" value="Volver" onClick={() => this.setState({ goToResults: true })} />
          </div>
        </div>
      </div>
    );

  }
}
export default GuideReviews;