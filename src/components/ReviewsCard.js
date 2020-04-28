import React from 'react';
//import src from '*.bmp';

import img from '../icons/estrella.png';
import img2 from '../icons/estrella2.png';



export default class ReviewsCard extends React.Component {
  state = {
    show: false,
    
  }

 
   render() {

    
    const { giver, points, description, createdAt} = this.props;
    
    
    
    return (
      <div className="container">
        
          <div className="card-body">
            <b><div className="card-title">{createdAt}</div></b>
            <div className="card-text">{description}</div>
            {/*<div className="card-text" >{points}</div> */}
            
            <img src={img2} width={15}></img> 
            {/*<div className="giver">De parte de: {giver} </div> */}
          
        </div>
     </div>
    )
  }
}