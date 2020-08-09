import React, { Component } from 'react';
import { Redirect } from 'react-router';
import ReviewsCard from './components/ReviewsCard';


import Toolbar from './components/navbar/toolbar';
import SideDrawer from './components/navbar/sideDrawer/sideDrawer';
import Backdrop from './components/navbar/backdrop/backdrop';
import './GuideReviews.css';
import userServices from './services/userServices'

const userId = localStorage.getItem("userId")

const userId2 = userServices.getGuides('5dc1e0b52136dd0d1db6e3cf')

class GuideReviews extends Component {
  state = {
    goToResults: false,
    searchFailed: false,
    reviews: [],
    guideName: "",
    loading: true,
  }
  getNameGuide = async () => {

    const name = await (await userServices.getProfile(userId))
    this.setState({ guideName: name })
  }
  getReviews = async () => {
    try {
      const userId = localStorage.getItem(userId); /* aca va el id del guia de la card seleccionada*/


      const response = await userServices.getReviews(userId)
      if (response && response.data && response.data.length > 0) {

        this.setState({ reviews: response.data, loading: false })
        console.log(response.data)
      }
    } catch (error) {
      console.error(`There was an error trying to get reviews: ${error}`)
      this.setState({ searchFailed: true, loading: false })
    }
  }
  async UNSAFE_componentWillMount() { /* usar el did mount*/
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
      return <Redirect to="/results" /> /*aca hacer que se guarden los resultados */
    }
    if (this.state.loading) {

      return (
        <div className="GuideReviews">
          <Header />
          <div className="BodyGuide">
            <h2>Cargando valoraciones...</h2>
          </div>
        </div>

      )
    } else {
      if (this.state.reviews.length < 1) {

        return (
          <div className="GuideReviews">
            <Header />
            <div className="BodyGuide">
              <h2>Aún no posee</h2>
            </div>
          </div>
        )
      }
      else {
        return (
          <div className="GuideReviews">
            <Header></Header>
            <div className="BodyGuide">
              <div className="Section">
                <h2>¡Valoraciones de {this.getNameGuide}!</h2>
                {this.renderReviews()}
              </div>
              <div className="buttonsSection">
                <input type="button" className="button" value="Volver" onClick={() => this.setState({ goToResults: true })} />
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
export default GuideReviews;
