import React, { Component } from 'react';
import { Redirect } from 'react-router';
import MyReviewCard from './components/MyReviewCard';
import Header from '../src/components/Header'
import './MyReviews.css';
import userServices from './services/userServices'

import GraficoEncuentrosPorMesForGuide from './components/ReportMatchesPorMesForGuide';
import GraficoMatchesPerStatus from './components/ReportMatchesPerStatus';
let userId

class MyReviews extends Component {
  state = {
    goToProfile: false,
    searchFailed: false,
    reviews: [],
    loading: true,
    matchesPerMonth: null,
    matchesPerStatus: null
  }

  getMatchesPerMonthForGuide = async () => {
    
    try {
      const response = await userServices.getMatchesPerMonthForGuide(userId)
      console.log(response.data)
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
  getMatchesByStatusForGuide = async () => {
    try {
      const response = await userServices.getMatchesByStatusForGuide(userId)
      console.log(response.data)
      if (response.data) {
        const { data } = response;

        this.setState({
          matchesPerStatus: data
        });
        
      }
    } catch (error) {
      console.error(`There was an error trying to get the matchesPerStatus data`)
    }
  }

  async componentDidMount() {
    userId = localStorage.getItem("userId");
    //this.setState({guiaIdState:userIdGuia})
    
    await this.getReviews()
    await this.getMatchesPerMonthForGuide()
    await this.getMatchesByStatusForGuide()
  }
 
  getReviews = async () => {
    try {

      const response = await userServices.getReviews(userId)
      if (response && response.data && response.data.length > 0) {

        this.setState({ reviews: response.data })
        console.log(response.data)
      }
      this.setState({ loading: false })
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
        const month = (fecha.getMonth() + 1);
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
      if (this.state.reviews.length < 1 && !this.state.loading && this.matchesPerMonth==null && this.matchesPerStatus==null) {
        return (
          <div className="MyReviews">
            <Header />
            <div className="BodyGuide">
              {/*<h3 style={{color:"black"}}>Aún no posees ninguna valoración</h3>*/}
              <div className="Section">
                <h2>Aún no posees valoraciones ni informes para mostrar.</h2>
                <br></br>
                <div className="buttonsSection">
                  <input type="button" className="btn-primero" value="Volver" onClick={() => this.setState({ goToProfile: true })} />
                </div>
              </div>
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
              <div className="grafico">
                <h2>Mis Informes</h2>
                <br></br>
                <div style={{ alignContent: "center" }}>
                  <div className="GraphicWrapper" style={{ padding: "10px" }} >
                    {this.state.matchesPerMonth && <GraficoEncuentrosPorMesForGuide matchesPerMonth={this.state.matchesPerMonth} />}
                  </div>
                  <div className="GraphicWrapper" style={{ padding: "10px" }} >
                    {this.state.matchesPerStatus && <GraficoMatchesPerStatus matchesPerStatus={this.state.matchesPerStatus} />}
                  </div>
                </div>

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
