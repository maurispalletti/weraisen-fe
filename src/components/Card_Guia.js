import React from 'react';
import avatar_woman_1 from '../avatars/avatar_1.svg';
import avatar_man_1 from '../avatars/avatar_4.svg';
import { Redirect } from 'react-router'
import userServices from '../services/userServices';
import { Button } from 'react-bootstrap';



export default class Card_Guia extends React.Component {
  state = {
    show: false,
    goToChat: false,
    
  }

  
  async goToChat() {

    const tourist = localStorage.getItem("userId");

    const guide = this.props.guideId;

    const { data: { chatId } } = await userServices.createMatch({ tourist, guide })

    localStorage.setItem("chatId", chatId);

    this.setState({ goToChat: true })
  }

  /*async goToGuideView(){

    const guia= this.props.guideId; //guia es el guia de la card que yo selecciono
    localStorage.setItem("DetalleGuia", guia);

    this.setState({goToGuideView: true})


  }*/
  
  guardarGuia=(guiaIdcard)=>{
  

  localStorage.setItem("detalleGuia",guiaIdcard); //aca detalleGuia es lo que paso de una pantalla a otra, guiaId es la key
  console.log("!!****"+guiaIdcard)                    //detalleGuia=this.props.guideId -> lo hago abajo en el guardar guia.

  }

  render() {

    if (this.state.goToChat) {
      return <Redirect to={`/chat`} />
    }
    /*if(this.state.goToGuideView){
      return <Redirect to={`/guideView`}/>
    }*/

    const { firstName, lastName, city, age, gender, languages, knowledge, description} = this.props;
    const avatar = gender === 'Femenino' ? avatar_woman_1 : avatar_man_1;

    const languagesString = languages.join(', ')
    const knowledgeString = knowledge.join(', ')

    const guiaSelec = this.props.guideId;

    return (
        <div className="card col-sm-12 col-xs-12" style={{ maxWidth:'400px',margin:'0px auto'}}>
         
         <div style={{ margin:'0px auto'}}> 

             <div style={{textAlign:"center"}}>
              
                <h4 style={{textAlign:"center", paddingTop:"10px"}}>{firstName} {lastName}</h4>
                        
                <img src={avatar} alt={`${firstName} ${lastName}`} style={{ float:"left", maxWidth:'100px', padding: "10px 0px 0px 20px"}}/>
             </div>

                                      
                 
              
              <div>
                   <div className="card-body" style={{padding: '10px 10px 10px 10px', right:"auto",left: "auto", Width:'300px'}}>  
                                        
                        <p className="card-text" style={{textAlign:"left", Width:'100px'}}>Edad: {age} </p>
                        <p className="card-text" style={{textAlign:"left", Width:'100px'}}>Ciudad: {city}</p>
                        <p className="card-text" style={{textAlign:"left", Width:'100px'}}>Descripción: {description}</p>
                        <p className="card-text" style={{textAlign:"left", Width:'100px'}}>Idiomas: {languagesString}</p>
                        <p className="card-text" style={{textAlign:"left", Width:'100px'}}>Id: {guiaSelec}</p>
                        {this.state.show && <div className="GuideText">Descripción: {description}</div>}
                        {this.state.show && <div className="GuideText">Conocimientos: {knowledgeString}</div>}
                        
                   </div>
               </div>

               <div className="row mb-2">
                           <div className="center">
                              <Button variant="primary" value={"Iniciar chat"} size="sm" style={{textAlign:"left"}}  onClick={() => this.goToChat()}> Iniciar Chat </Button>
                              
                              <div> <a href="/guideView" className="lead"  onClick={() => this.guardarGuia(guiaSelec)}>Ver más</a> </div> 
                            </div> 
               </div>
            </div>   
        </div>
               
      )
    }
  }


