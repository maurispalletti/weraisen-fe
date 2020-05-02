import React, { Component } from 'react';
import { Redirect } from 'react-router';
import ReviewsCard from './components/ReviewsCard';
import Header from './components/Header';
import './GuideView.css';
import img2 from './icons/estrella2.png';

import userServices from './services/userServices'
import Axios from 'axios';

//const GuiaId = localStorage.getItem("DetalleGuia") /*este el el id del guia que selecciono en results */
let GuideId
const guide2= "5dc1df1b2136dd0d1db6e3cc";



class GuideView extends Component {
    state = {
      goToResults: false,
      reviews: [],
      guideName: " ",
      initialValues:"",
      knowledge:[],
      languages:[],
      reviews: [],

    }

   /* getNameGuide = async () => {
    
        const firstName = await (await userServices.getProfile(guide2))
        this.setState({guideName: firstName})
        console.log(guideName)
    }*/

    /*componentDidMount () {
        GuideId=localStorage.getItem(GuideId)

    }*/
    getProfile = async () => {
        try {
          const userId = guide2;
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
    async componentDidMount() {
        const  {
          firstName,
          lastName,
          age,
          gender,
          email,
          knowledge,
          description,
          languages
    } = await this.getProfile()

    

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

    this.setState({ initialValues, knowledge, languages })
    console.log("!!!!"+ knowledge);
    console.log("!!!!"+ languages);
  }

    getReviews = async () => {
    try {
      //const userId = localStorage.getItem(userId); /* aca va el id del guia de la card seleccionada*/
      const userId = guide2;

      const response = await userServices.getReviews(userId)
      if (response && response.data && response.data.length > 0) {

        this.setState({ reviews: response.data })
        console.log(response.data)
      }
    } catch (error) {
      console.error(`There was an error trying to get reviews: ${error}`)
      this.setState({ searchFailed: true })
    }
  }
  async componentWillMount() { /* usar el did mount*/
    
     await this.getProfile()
     await this.getReviews()
  }




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
  }
    render() {
        if (this.state.goToResults) {
          return <Redirect to="/results" /> /*aca ver que se guarden los resultados */
        }  

      const mail= this.state.initialValues.email;  
      const edad= this.state.initialValues.age;
      const descripcion=this.state.initialValues.description;
      const nombre=this.state.initialValues.firstName;
      const apellido=this.state.initialValues.lastName;
      const conocimientos= this.state.knowledge.toString();
      const languages= this.state.languages.toString();
      //const idiomas= this.state.languajes.toString();
        return (

        
          <div className="GuideView">
                <Header></Header>
                <br></br>
                <h2>{nombre} {apellido}</h2> 
                <div className="container-fluid">
                      <div className="containerArriba">  
                          <div className="Section1">                     
                            <b><label for="name" class="col--2 col-form-label">5</label></b>  <img src={img2} width={15}></img><br></br>
                            <label for="age" class="col--2 col-form-label">Edad: {edad}</label>
                            
                                                                           
                          </div>
                          <hr></hr>
                          <div className="Section2">


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
                </div> 
                     
                     

                    <div className="buttonsSection">
                       <input type="button" className="button" value="Volver" onClick={() => this.setState({ goToResults: true })} />
                    </div>
          </div>
            
            
        );
    
      }
    }

   export default GuideView;
          





































































