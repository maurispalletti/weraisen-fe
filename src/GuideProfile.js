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
import { FormCheckbox } from 'semantic-ui-react';

const languages = [
  { description: 'Español', value: 'Español' },
  { description: 'Inglés', value: 'Inglés' },
  { description: "Italiano", value: 'Italiano' },
  { description: "Portugués", value: 'Portugués' }
  ];
const languages2 = [
  { description: "Francés", value: 'Francés' },
  { description: "Japonés", value: 'Japonés' },
  { description: "Chino", value: 'Chino' },
  {description: "Alemán", value: 'Alemán'}
];

const INITIAL_VALUES = {
  description: '',
  languages: [],
}

class GuideProfile extends Component {
  state = {
    goToProfile: false,
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

        this.setState({ goToProfile: true, updateFailed: false, notLoggedInUser: false })
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
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
           return {sideDrawerOpen: !prevState.sideDrawerOpen};
      });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  }
  render() {
    if (this.state.goToProfile) {
      return <Redirect to="/Profile" />
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
                <h2>Idiomas que manejás:</h2>
                <div className="IdiomsSection">
                
                  <CheckboxGroupWithError name="languages" values={languages}/>
                  <CheckboxGroupWithError name="languages" values={languages2}/>
                </div>
                <FieldWithError component={'textarea'} name="idioma" placeholder="Otro" aria-label="idioma" className="idioma-input" />
                
                <div className="LastSection">
                  <h2>Conocimientos que posees:</h2>
                      <Categorias onCategoryChange={this.knowledge} />
                </div>
                <div class="custom-control custom-checkbox">
                   <input type="checkbox" class="custom-control-input" id="salidaGrupal" />
                   <label class="custom-control-label" for="salidaGrupal">Permitir salidas grupales</label>
                </div>
             </div>
            <div className="buttonsSection">
             <input type="button" className="button" value="Cancelar" onClick={() => this.setState({ goToProfile: true })} />
             <br></br><br></br>
             <input type="submit" className="button" value="Guardar" />
            </div>

          
              {this.state.notLoggedInUser && (
                <p className="form-error">Usuario no logueado.</p>
              )}
              {this.state.updateFailed && (
                <p className="form-error">Actualización de datos de guía falló. Intenta nuevamente.</p>
              )}
            </Form>
          </Formik>
        </div> 
      


     


      </div>
    );
  }
};

export default GuideProfile;
