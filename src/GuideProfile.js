import React, { Component } from 'react';
import avatar_1 from './avatars/avatar_1.svg';
// import basketball from './icons/basketball.svg';
// import camera from './icons/camera.svg';
// import cinema from './icons/cinema.svg';
// import climbing from './icons/climbing.svg';
// import cocktail from './icons/cocktail.svg';
// import coffee from './icons/coffee.svg';
import home from './icons/home.svg';
import './GuideProfile.css';

import { Formik, Form } from 'formik'
import FieldWithError from './forms/FieldWithError'
import CheckboxGroupWithError from './forms/CheckboxGroupWithError'
import { GuideProfileSchema } from './helpers/validators'


const languages = [
  { description: 'Español', value: 'SPANISH' },
  { description: 'Inglés', value: 'ENGLISH' },
  { description: "Alemán", value: 'GERMAN' },
  { description: "Alemán", value: 'GERMAN' },
  { description: "Italiano", value: 'ITALIAN' },
  { description: "Portugués", value: 'PORTUGUESE' },
  { description: "Francés", value: 'FRENCH' },
  { description: "Japonés", value: 'JAPANESE' },
];

const knowledge = [
  { description: 'Bares', value: 'BAR' },
  { description: 'Restaurantes', value: 'RESTAURANT' },
  { description: "Montaña", value: 'MOUNTAIN' },
  { description: "Museos", value: 'MUSEUM' },
  { description: "Historia", value: 'HISTORY' },
  { description: "Deportes", value: 'SPORT' },
  { description: "Espectáculos", value: 'SHOWS' },
  { description: "Fotografía", value: 'PHOTOGRAPHY' },
];


const INITIAL_VALUES = {
  description: '',
  languages: '',
  knowledge: '',
}

class GuideProfile extends Component {

  
  // state = {
  //   goToHome: false,
  //   signUpFailed: false,
  //   passwordsMissmatch: false,
  // }

  updateGuide = ({ description, languages, knowledge }) => {

    const values = { description, languages, knowledge }

    console.log(values)
  }


  // createUser = async ({
  //   firstName,
  //   lastName,
  //   age,
  //   identification,
  //   gender,
  //   city,
  //   email,
  //   password,
  //   passwordRepeated,
  // }) => {
  //   try {
  //     if (password === passwordRepeated) {
  //       const response = await loginServices.createUser({
  //         firstName,
  //         lastName,
  //         identification,
  //         age,
  //         city,
  //         gender,
  //         email,
  //         password
  //       })

  //       const { data: { id } } = response

  //       // // save Id in local storage
  //       // localStorage.setItem("userId", id);

  //       // console.log(`GET ID`)
  //       // localStorage.getItem("userId");
  //       console.log(`!!!!!!!!!!!` + id)

  //       this.setState({ passwordsMissmatch: false, goToHome: true, signUpFailed: false })
  //     } else {
  //       this.setState({ signUpFailed: true, passwordsMissmatch: true })
  //     }

  //   } catch (error) {
  //     this.setState({ signUpFailed: true })
  //     console.error(`There was an error trying to create the user`)
  //   }
  // }

  render() {
    return (
      <div className="GuideProfile">
        <div className="Header">
          <a href={"/home"} className="HomeIcon">
            <img src={home} alt={"Home"} />
          </a>
          <div className="HeaderImage">
            <a href={"/profile"}>
              <img src={avatar_1} alt={"User"} />
            </a>
          </div>
        </div>

        <div className="Body">

          <Formik
            initialValues={INITIAL_VALUES} // ADD INITIAL VALUES 
            validationSchema={GuideProfileSchema}
            onSubmit={(values) => this.updateGuide(values)}>
            <Form>
              <h2>Quiero ser guía</h2>
              <div className="Section">
                <h4>Describite brevemente para que otros te conozcan: </h4>
                <FieldWithError name="description" placeholder="Ingresa tu descripción" aria-label="description" className="descripcion-input" />
                <div className="IdiomsSection">
                  <h4>Idiomas que manejas:</h4>
                  <CheckboxGroupWithError name="languages" values={languages} />
                </div>
                <div className="LastSection">
                  <h4>Conocimientos que posees:</h4>
                  <CheckboxGroupWithError name="knowledge" values={knowledge} />
                </div>
              </div>

              <div className="buttonsSection">
                <input type="button" className="cancel-button" value="Cancelar" />
                <input type="submit" className="button" value="Guardar cambios" />
                {false && (
                  // {this.state.signUpFailed && (
                  <p className="form-error">
                    Actualización de datos de guía falló. Intanta de nuevo.
                    </p>
                )}
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    );
  }
};

export default GuideProfile;
