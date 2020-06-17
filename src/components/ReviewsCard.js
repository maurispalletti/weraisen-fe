import React from 'react';
//import src from '*.bmp';

import e1 from '../icons/1ESTRELLA_N.png';
import e4 from '../icons/4ESTRELLA_N.png';
import e2 from '../icons/2ESTRELLA_N.png';
import e3 from '../icons/3ESTRELLA_N.png';
import e5 from '../icons/5ESTRELLA_N.png';


export default class ReviewsCard extends React.Component {
  state = {
    show: false,
  }

  render() {
    const { points, description, createdAt } = this.props;

    return (
      <div className="container">

        <div className="card-body">

          <div className="Estrellas">
            {points === 1 && <img alt='e1' src={e1} width={60}></img>}
            {points === 2 && <img alt='e2' src={e2} width={60}></img>}
            {points === 3 && <img alt='e3' src={e3} width={60}></img>}
            {points === 4 && <img alt='e4' src={e4} width={60}></img>}
            {points === 5 && <img alt='e5' src={e5} width={60}></img>}
          </div>

          <div className="card-text">{description}</div>

          <b><div className="card-title">{createdAt}</div></b>
        </div>
      </div>
    )
  }
}