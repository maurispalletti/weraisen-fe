import React from 'react';
//import src from '*.bmp';
import userServices from '../services/userServices';

import e1 from '../icons/1ESTRELLA_N.png';
import e4 from '../icons/4ESTRELLA_N.png';
import e2 from '../icons/2ESTRELLA_N.png';
import e3 from '../icons/3ESTRELLA_N.png';
import e5 from '../icons/5ESTRELLA_N.png';



export default class  extends React.Component {
  state = {
    show: false,
    userName:""
    
  }
  getNameGuide = async () => {
    
    const name =  userServices.getProfile(this.props.giverId)
    this.setState({userName: name})
    console.log("*"+name)
     }


   render() {

    console.log("**"+this.state.userName);
    const {points, description, createdAt, giverId} = this.props;
        
    return (
      <div className="container">
        
          <div className="card-body">
                      
          <b><div className="card-title">{createdAt}</div></b>

           <div className="card-text">{description}</div>
           <div className="Estrellas">
           {points=== 1 && <img alt='1' src={e1} width={60}></img>}
           {points=== 2 && <img alt='2' src={e2} width={60}></img>}
           {points=== 3 && <img alt='3' src={e3} width={60}></img>}
           {points=== 4 && <img alt='4' src={e4} width={60}></img>}
           {points=== 5 && <img alt='5' src={e5} width={60}></img>}
           </div>
           <b><div className="card-title">{giverId}</div></b>
           
            <hr></hr>
        </div>
     </div>
    )
  }
}