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

    
    const { giver, points, description, createdAt} = this.props;
    
    
    
    return (
      <div className="container">
        
          <div className="card-body">
            <b><div className="card-title">{createdAt}</div></b>
            <div className="card-text">{description}</div>
            {/*<div className="card-text" >{points}</div> */}
            
            {/*<img src={img3} width={60}></img> */}
            {/*<div className="giver">De parte de: {giver} </div> */}
           
           {points== 1 && <img src={e1} width={60}></img>}
           {points== 2 && <img src={e2} width={60}></img>}
           {points== 3 && <img src={e3} width={60}></img>}
           {points== 4 && <img src={e4} width={60}></img>}
           {points== 5 && <img src={e5} width={60}></img>}
           
        </div>
     </div>
    )
  }
}