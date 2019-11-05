import React, { Component } from 'react'
import './Login.css'
import logo from './icons/logo.png'
import userServices from './services/userServices'
import { Redirect } from 'react-router'
import { ReviewSchema } from './helpers/validators'


// import Rating from './components/rating/Rating.js'
import home from './icons/home.svg'
import Buttom from './components/Boton.js'
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

  render() {
    if (this.state.goToMatches) {
      return <Redirect to="/matches" />
    }

    return (
      <div className="Valoration">
        <div className="Header">
          <a href={"/home"} className="HomeIcon">
            <img src={home} alt={"Home"} />
          </a>
        </div>
        <div className="Body">
          <div className="ratingSection">
            <h3>Puntuá a la persona que te acompañó en tu recorrido</h3>
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
              <h3>Añadí un comentario describiendo tu experiencia:</h3>
              <Formik
                initialValues={INITIAL_VALUES}
                validationSchema={ReviewSchema}
                onSubmit={(values) => this.postReview(values)}>
                <Form>
                  <FieldWithError name="description"
                    placeholder="Juan es excelente! Visitamos el museo Caraffa y supo explicarme todo! Muy agradecida."
                    aria-label="description" component="textarea" className="descripcion-input-valoration" />
                  <div className="buttonsSectionValoration">
                    <input type="submit" className="buttonValoration" value={"Enviar valoración"} />
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
