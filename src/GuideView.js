import React, { Component } from 'react';
import { Redirect } from 'react-router';
import ReviewsCard from './components/ReviewsCard';
import Header from './components/Header';
import './GuideView.css';
import img2 from './icons/estrella.png';

import userServices from './services/userServices'

//const GuiaId = localStorage.getItem("DetalleGuia") /*este el el id del guia que selecciono en results */
let userIdGuia


class GuideView extends Component {
    state = {
      goToResults: false,
      reviews: [],
      guiaIdState:"",
      nombreGuia: " ",
      initialValues:"",
      knowledge:[],
      languages:[],
      profilePicture: "",
      ReviewsFailed: false
    }

   

    /*componentDidMount () {
        userIdGuia=localStorage.getItem("detalleGuia");
        this.setState({guiaIdState:userIdGuia})

        console.log("+++"+userIdGuia)
    }*/
   async componentDidMount() {

      userIdGuia=localStorage.getItem("detalleGuia");
         //this.setState({guiaIdState:userIdGuia})
         console.log("+++"+userIdGuia)
 
 
         const  {
           firstName,
           lastName,
           age,
           gender,
           email,
           knowledge,
           description,
           languages,
           profilePicture
     } =  await this.getProfile()
 
     
 
     console.log(`knowledge`)
     console.log(knowledge)
     console.log(`languages`)
     console.log(languages)
 
     const initialValues = {
       firstName,
       lastName,
       age,
       gender,
       email,
       description,
     }
 
     this.setState({ initialValues, profilePicture, knowledge, languages, guiaIdState:userIdGuia })
     console.log("!!!!"+ knowledge);
     console.log("!!!!"+ languages);
   }


    getProfile = async () => {
        try {
          //const userId = this.state.guiaIdState;
          const userId = localStorage.getItem("detalleGuia");
          if (userId) {
            const response = await userServices.getProfile(userId)
    
            return response.data;
    
          } else {
            this.setState({ notLoggedInUser: true })
          }
        } catch (error) {
          console.error(`There was an error trying to get the profile`)
        }
    }
    

    getReviews = async () => {
    try {
      const userId= userIdGuia;
      //const userId = localStorage.getItem("DetalleGuia"); /* aca va el id del guia de la card seleccionada*/
      //const userId = this.state.guiaIdState;

      const response = await userServices.getReviews(userId)
      if (response && response.data && response.data.length > 0) {

        this.setState({ reviews: response.data })
        console.log("*+*+"+response.data)
      }
    } catch (error) {
      console.error(`There was an error trying to get reviews: ${error}`)
      this.setState({ ReviewsFailed: true })
    }
  }

  // async UNSAFE_componentWillMount() { /* usar el did mount*/
  //    await this.getProfile()
  //    await this.getReviews()
  // }

  renderReviews = () => {
    const { reviews } = this.state
    if (reviews.length > 0) {
      return reviews.map(review => {
        const { giver, points, description, createdAt, _id } = review
        
        //para convertir fecha en año y mes
        const fecha= new Date(createdAt);
        const year= fecha.getFullYear();
        const month= fecha.getMonth();
        const fechaReview=year+"/"+month;
        
        return (
          
          <ReviewsCard
            key={_id}
            giverId={giver}
            description={description}
            points={points}
            createdAt={fechaReview}
          />
          
        )
      });
    }
    else {

      return(
              <p>Todavía no se han publicado opiniones.</p>

      )
    }
  }
    render() {
        if (this.state.goToResults) {
          return <Redirect to="/results" /> /*aca ver que se guarden los resultados */
        }  

      
      const edad= this.state.initialValues.age;
      const descripcion=this.state.initialValues.description;
      const nombre=this.state.initialValues.firstName;
      const apellido=this.state.initialValues.lastName;
      const conocimientos= this.state.knowledge.join(', ');
      const languages= this.state.languages.join(', ')
      //const idiomas= this.state.languajes.toString();
        return (

        
          <div className="GuideView">
                <Header />
                <br></br>
                {/*<h2>{nombre} {apellido}</h2> */}
                <div className="container-fluid" style={{color:'rgba(255,255,255,0.8)'}}>
                      <div className="containerArriba">  
                          <div className="SectionGuide"> 

                           <b> <label for="nombre" id="nombreApellido" class="col--2 col-form-label">{nombre} {apellido}</label> <br></br>  </b>              
          
                            <label for="edad" id="edad" class="col--2 col-form-label">Edad: {edad}</label>
                            <div className="PromedioEstrella">
                              <i><label for="promedio" id="promedio" class="col--2 col-form-label">4.5</label></i>

                              <img alt='img2' style={{verticalAlign: "0", paddingLeft:'2px'}} src={img2} width={13}></img>
                              </div> 
                                                                           
                          </div>
                          <hr></hr>
                          <div className="Section2">
                            <div className="FotoPerfil">
                              <img src={this.state.profilePicture} alt="profile" style={{width: '200px', height: '200px', objectFit: 'cover'}}/>
                            </div>

                          </div>
                        </div>
                        <div className="containerCentro">

                            <label for="description" class="col--2 col-form-label">Sobre mi: {descripcion}</label><br></br>
                            <label for="languajes" class="col--2 col-form-label">Idiomas que conozco: {languages}</label><br></br>
                            <label for="knowledges" class="col--2 col-form-label">Conocimientos: {conocimientos}</label>

                        </div>
                      
                     <div className="containerAbajo"> <b>Opiniones de sus encuentros </b>

                           {this.renderReviews()}

                      </div>
                      <div className="boton">
                      <div className="buttonsS">
                       <input type="button" className="btn-primero" value="Volver" onClick={() => this.setState({ goToResults: true })} />
                    </div>
                    </div>
                </div> 
                
          </div>
        );
    
      }
    }

   export default GuideView;
          





































































