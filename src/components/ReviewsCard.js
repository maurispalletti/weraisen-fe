import React from 'react';
import { Redirect } from 'react-router'
import userServices from '../services/userServices';
import './ReviewsCard.css';

export default class ReviewsCard extends React.Component {
  state = {
    show: false,
    goToResults: false,

  }

  async goToResults() {

    const guide = localStorage.get("userId");
    this.setState({ goToResults: true })
  }

  render() {

    if (this.state.goToResults) {
      return <Redirect to={`/Results`} />
    }

    const { giver, points, description, createdAt} = this.props;
    
    
   
    return (
      <div className="ReviewsCard">
        <div onClick={() => this.setState({ show: !this.state.show })} className="ReviewsCard">
          <div className="ReviewsCardText">
            <div className="Date">{createdAt}</div>
            <div className="Valoration">{description}</div>
            <div className="Point">{points}</div>
            <div className="giver">{giver} </div>
          </div>
        </div>
     </div>
    )
  }
}