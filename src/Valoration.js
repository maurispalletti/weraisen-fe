import React, { Component } from 'react'
import './Valoration.css'

import userServices from './services/userServices'
import { Redirect } from 'react-router'
import { ReviewSchema } from './helpers/validators'

import Toolbar from './components/navbar/toolbar'
import SideDrawer from './components/navbar/sideDrawer/sideDrawer'
import Backdrop from './components/navbar/backdrop/backdrop'

// import Rating from './components/rating/Rating.js'

import './Valoration.css'

import { Formik, Form } from 'formik'
import FieldWithError from './forms/FieldWithError'

import Rating from 'react-rating'
import star from './components/rating/star.png'
import starEmpty from './components/rating/star-empty.png'

const INITIAL_VALUES = {
  description: ''
}

class Valoration extends Component {
  state = {
    goToMatches: false,
    reviewFailed: false,
    points: 0,
    missingPoints: false,
  }

  postReview = async (values) => {
    if (this.state.points === 0) {
      this.setState({ missingPoints: true })
    } else {
      this.setState({ missingPoints: false })
      try {

        const { points } = this.state;
        const description = values.description;
        const giver = localStorage.getItem("userId");
        const owner = localStorage.getItem("ownerId");
        const matchId = localStorage.getItem("matchId");

        console.log({ giver, owner, matchId, points, description })

        const response = await userServices.postReview({ giver, owner, matchId, points, description })

        if (response && response.data) {
          this.setState({ goToMatches: true })
        }

      } catch (error) {
        this.setState({ reviewFailed: true })
        console.error(`There was an error trying to post review`)
      }
    }
  }

  updatePoints(value) {
    this.setState({ points: value })
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
    if (this.state.goToMatches) {
      return <Redirect to="/matches" />
    }
    let sideDrawer;
    let backdrop;
   
    if (this.state.sideDrawerOpen) {
      sideDrawer =<SideDrawer/>;
      backdrop = <Backdrop click={this.backdropClickHandler}/>

    }
    return (
      <div className="Valoration">
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
        {sideDrawer}
        {backdrop}
        {/* <div className="Header">
          <a href={"/home"} className="HomeIcon">
            <img src={home} alt={"Home"} />
          </a>
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

        <div className="BodyValoration">
          <div className="ratingSection">
            <h2>Puntuá a la persona que te acompañó en tu recorrido</h2>
            <div>
              <Rating {...this.props} initialRating={this.state.points}
                emptySymbol={<img alt={"Activity"} src={starEmpty} />}
                fullSymbol={<img alt={"Activity"} src={star} />}
                onClick={(value) => { this.updatePoints(value) }} />
            </div>
            {this.state.missingPoints && (
              <p className="form-error">
                Por favor selecciona la puntuación de tu acompañante
                </p>
            )}
            <div className="descriptionSection">
              <h2>Añadí un comentario describiendo tu experiencia:</h2>
        
              <Formik
                initialValues={INITIAL_VALUES}
                validationSchema={ReviewSchema}
                onSubmit={(values) => this.postReview(values)}>
                <Form>
                  <FieldWithError name="description"
                    placeholder="Juan es excelente! Visitamos el museo Caraffa y supo explicarme todo! Muy agradecida."
                    aria-label="description" component="textarea" className="descripcion-input" />
                  <div className="buttonsSectionValoration">
                    <input type="submit" className="ValorationButton" value={"Enviar"} />
                  </div>
                </Form>
              </Formik>
            </div>
            {this.state.reviewFailed && (
              <p className="form-error">
                Ocurrió un error al tratar de guardar la valoración. Por favor intentá otra vez
                </p>
            )}
          </div>
        </div>
      </div>
    )
  }
};

export default Valoration;
