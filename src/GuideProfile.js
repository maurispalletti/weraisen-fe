import React, { Component } from 'react';
import { Redirect } from 'react-router'

import Categorias from './components/Categorias'

import Toolbar from './components/navbar/toolbar'
import SideDrawer from './components/navbar/sideDrawer/sideDrawer'
import Backdrop from './components/navbar/backdrop/backdrop'

import './GuideProfile.css';

import { Formik, Form } from 'formik'
import FieldWithError from './forms/FieldWithError'
import CheckboxGroupWithError from './forms/CheckboxGroupWithError'
import { GuideProfileSchema } from './helpers/validators'
import userServices from './services/userServices'



const languages = [
  { description: 'Español', value: 'Español' },
  { description: 'Inglés', value: 'Inglés' },
  { description: "Alemán", value: 'Alemán' },
  { description: "Italiano", value: 'Italiano' },
  { description: "Portugués", value: 'Portugués' },
  { description: "Francés", value: 'Francés' },
  { description: "Japonés", value: 'Japonés' },
  { description: "Chino", value: 'Chino' },
  { description: "Ruso", value: 'Ruso' },
  { description: "Turco", value: 'Turco' },
  { description: "Neerlandés", value: 'Neerlandés' },
  { description: "Polaco", value: 'Polaco' },
];

const disponibilidad =[
{description:'Lunes', value: 'Lunes'},
{description:'Martes', value: 'Martes'},
{description:'Miercoles', value: 'Miercoles'},
{description:'Jueves', value: 'Jueves'},
{description:'Viernes', value: 'Viernes'},
{description:'Sabado', value: 'Sabado'},
{description:'Domingo', value: 'Domingo'},
{description:'Todos', value: 'Todos'},
];


const INITIAL_VALUES = {
  description: '',
  languages: [],
  disponibilidad:[],
}

class GuideProfile extends Component {

constructor (props ){

  
  super(props);
  this.state={selectedOption: "Option1"};
}
  state = {
    goToHome: false,
    updateFailed: false,
    notLoggedInUser: false,
    knowledge: [],
  }

  updateGuide = async ({ description, languages }) => {

    try {
      const userId = localStorage.getItem("userId");

      const knowledge = this.state.knowledge

      console.log(knowledge)

      if (userId) {
        const response = await userServices.updateGuide({
          userId,
          description,
          languages,
          knowledge,
        })

        console.log(response);

        const { data: { id } } = response

        console.log(id);

        this.setState({ goToHome: true, updateFailed: false, notLoggedInUser: false })
      } else {
        this.setState({ notLoggedInUser: true })
      }
    } catch (error) {
      this.setState({ updateFailed: true })
      console.error(`There was an error trying to update the guide`)
    }
  }

  handleCategory = (values) => {
    console.log(values)
    this.setState({ knowledge: values })
  };

  getInitialState=()=>{
    return {selectedOption: 'option1'};
  };

  handleOptionChange=(changeEvent)=>{
this.setState({selectedOption: changeEvent.target.value});

  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
           return {sideDrawerOpen: !prevState.sideDrawerOpen};
      });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  }
  render() {
    if (this.state.goToHome) {
      return <Redirect to="/search" />
    }

    let sideDrawer;
    let backdrop;
       if (this.state.sideDrawerOpen) {
      sideDrawer =<SideDrawer/>;
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }

    return (
      <div className="GuideProfile">
         <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
        {sideDrawer}
        {backdrop}
      
      <div className="BodyGuide">
          <Formik
            initialValues={INITIAL_VALUES}
            validationSchema={GuideProfileSchema}
            onSubmit={(values) => this.updateGuide(values)}>
            <Form>
    
              <div className="Section">
                <h2>¡Describite para que otros te conozcan! </h2>
                <FieldWithError component={'textarea'} name="description" placeholder="Ingresa una breve descripción sobre vos" aria-label="description" className="descripcion-input" />
                <div className="IdiomsSection">
                  <h2>Idiomas que manejas:</h2>
                  <h3><CheckboxGroupWithError name="languages" values={languages} /></h3>
                  {/* seccion de disponibilidad ponele */}
                  <h2>Disponibilidad por semana:</h2>
                <h3><CheckboxGroupWithError name="disponibilidad" values={disponibilidad} /></h3>
                <div className="radio">
                <h2><label>
                <input type="radio" value="option1" checked={this.state.selectedOption==='option1'}
                                                    onChange={this.handleOptionChange}/>
                  Permitir encuentros grupales
                </label>
                </h2>
                </div>
              
                </div>
               
                  <div className="LastSection">
        <h2>Conocimientos que posees:</h2>
        {/* <CheckboxGroupWithError name="knowledge" values={knowledge} /> */}
      </div>
    </div>
    <div className="buttonsSection">
      <input type="button" className="button" value="Cancelar" onClick={() => this.setState({ goToHome: true })} />
      <input type="submit" className="button" value="Guardar" />
    </div>

          
              {this.state.notLoggedInUser && (
                <p className="form-error">Usuario no logueado.</p>
              )}
              {this.state.updateFailed && (
                <p className="form-error">Actualización de datos de guía falló. Intanta de nuevo.</p>
              )}
            </Form>
          </Formik>
        </div> 
      


     


      </div>
    );
  }
};

export default GuideProfile;
