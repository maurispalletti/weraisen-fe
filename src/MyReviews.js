import React, { Component } from 'react';
import { Redirect } from 'react-router';
import MyReviewCard from './components/MyReviewCard';
import Header from '../src/components/Header'
import './MyReviews.css';
import userServices from './services/userServices'

let userId

class MyReviews extends Component {
  state = {
    goToProfile: false,
    searchFailed: false,
    reviews: [],
    loading: true,
  }



  async componentDidMount() {
    userId = localStorage.getItem("userId");
    //this.setState({guiaIdState:userIdGuia})
    console.log("+++" + userId)
    await this.getReviews()
  }

  getReviews = async () => {
    try {

      const response = await userServices.getReviews(userId)
      if (response && response.data && response.data.length > 0) {

        this.setState({ reviews: response.data, loading: false })
        console.log(response.data)
      }
      return response.data;
    } catch (error) {
      console.error(`There was an error trying to get reviews: ${error}`)
      this.setState({ searchFailed: true, loading: false })
    }
  }


  /*drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  }*/

  renderReviews = () => {
    const { reviews } = this.state
    if (reviews.length > 0) {
      return reviews.map(review => {
        const { giverId, points, description, createdAt, _id } = review

        //para convertir fecha en año y mes
        const fecha = new Date(createdAt);
        const year = fecha.getFullYear();
        const month = fecha.getMonth();
        const fechaReview = year + "/" + month;


        return (

          <MyReviewCard
            key={_id}
            giverId={giverId}
            description={description}
            points={points}
            createdAt={fechaReview}
          />

        )
      });
    }
  }


  render() {
    if (this.state.goToProfile) {
      return <Redirect to="/Profile" />
    }
    if (this.state.loading) {
      return (
        <div className="MyReviews">
          <Header />
          <div className="BodyGuide">
            <h2>Cargando valoraciones...</h2>
          </div>
        </div>

      )


    } else {
      if (this.state.reviews.length < 1) {
        return (
          <div className="MyReviews">
            <Header />
            <div className="BodyGuide">
              <h2>Aún no posees ninguna valoración</h2>
            </div>
          </div>
        )
      } else {

        return (
          <div className="MyReviews">
            <Header></Header>

            <div className="BodyGuide">
              <div className="Section">
                <h2>Mis valoraciones</h2>
                {this.renderReviews()}
              </div>
            </div>
            <div className="buttonsSection">
              <input type="button" className="btn-primero" value="Volver" onClick={() => this.setState({ goToProfile: true })} />
            </div>
            {this.state.searchFailed && (
                <p className="form-error">La búsqueda de encuentros falló. Intentá de nuevo por favor.</p>
              )}
          </div>
        );

      }
    }
  }
}
export default MyReviews;
