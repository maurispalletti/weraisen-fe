import React, { Component } from 'react'
import './SignUp.css';
import userServices from './services/userServices'
import { Redirect } from 'react-router'

import { Formik, Form } from 'formik'
import FieldWithError from './forms/FieldWithError'
import { SignUpSchema } from './helpers/validators'
import DropdownGender from './forms/DropdownGender'


const INITIAL_VALUES = {
  firstName: '',
  lastName: '',
  age: '',
  identification: '',
  gender: '',
  city: '',
  email: '',
  password: '',
  passwordRepeated: '',
}

const genders = [
  {
    value: "Femenino",
    description: 'Femenino'
  },
  {
    value: "Masculino",
    description: 'Masculino'
  },
  {
    value: "Otro",
    description: 'Otro'
  },
]

class SignUp extends Component {

  state = {
    goToHome: false,
    signUpFailed: false,
    passwordsMissmatch: false,
  }

  createUser = async ({
    firstName,
    lastName,
    age,
    identification,
    gender,
    city,
    email,
    password,
    passwordRepeated,
  }) => {
    try {
      if (password === passwordRepeated) {
        const response = await userServices.createUser({
          firstName,
          lastName,
          identification,
          age,
          city,
          gender,
          email,
          password
        })

        const { data: { id } } = response

        // save Id in local storage
        localStorage.setItem("userId", id);

        this.setState({ passwordsMissmatch: false, goToHome: true, signUpFailed: false })
      } else {
        this.setState({ signUpFailed: true, passwordsMissmatch: true })
      }

    } catch (error) {
      this.setState({ signUpFailed: true })
      console.error(`There was an error trying to create the user`)
    }
  }

  render() {
    if (this.state.goToHome) {
      return <Redirect to="/home" />
    }

    return (
      <div className="SignUp">

        <Formik
          initialValues={INITIAL_VALUES}
          validationSchema={SignUpSchema}
          onSubmit={(values) => this.createUser(values)}>
          <Form>
            <h2>Crea tu cuenta</h2>

            <FieldWithError name="firstName" placeholder="Nombre" aria-label="firstName" className="input" />
            <FieldWithError name="lastName" placeholder="Apellido" aria-label="lastName" className="input" />
            <FieldWithError name="age" placeholder="Edad" aria-label="age" className="input" />
            <FieldWithError name="identification" placeholder="ID / DNI / PASAPORTE" aria-label="identification" className="input" />
            <DropdownGender name="gender" styleName={"Dropdown-g"} options={genders} />
            <FieldWithError name="city" placeholder="Ciudad de residencia" aria-label="city" className="input" />
            <FieldWithError name="email" placeholder="Email" aria-label="email" className="input" />
            <FieldWithError name="password" placeholder="Contraseña" type="password" aria-label="password" className="input" />
            <FieldWithError name="passwordRepeated" placeholder="Repetí tu contraseña" type="password" aria-label="passwordRepeated" className="input" />

            <br/>

            
            {/* botones para subir la foto */}
            
            <div>
            <input style={{ display: 'none' }} type="file" onChange={this.fileSelectedHandler}
              ref={fileImput => this.fileImput = fileImput}
            />
            <button type="button" className="btn btn-primary" onClick={() => this.fileImput.click()}>Seleccionar Archivo</button>
            <button type="button" className="btn btn-primary" onClick={this.fileUploadHandler}>Upload</button>  

            </div>
            



            <div className='remember'>
              <p>Al crear cuenta estoy aceptando los
             <a className="forgotPass" href={'/terminos'}> términos y condiciones</a></p>
            </div>



            <div className="right-container">
              <input type="submit" className="login-button" value="Crear cuenta" />
              {this.state.passwordsMissmatch && (
                <p className="form-error">
                  Las contreseñas no coinciden. Intanta de nuevo.
                </p>
              )}
              {this.state.signUpFailed && (
                <p className="form-error">
                  Creación de usuario falló. Intanta de nuevo.
                </p>
              )}
            </div>
          </Form>
        </Formik>
      </div>
    );
  }
};

export default SignUp;
