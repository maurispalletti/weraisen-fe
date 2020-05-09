import React, { Component } from 'react'
import './SignUp.css';
import './Estilos.css';
import userServices from './services/userServices'
import { Redirect } from 'react-router'
import { Formik, Form } from 'formik'
import FieldWithError from './forms/FieldWithError'
import { SignUpSchema } from './helpers/validators'
import DropdownGender from './forms/DropdownGender'
import dni1 from './icons/dni1.png'
import dni2 from './icons/dni2.png'
import icon from './icons/icon.svg'

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
    goToLogin: false,
    signUpFailed: false,
    passwordsMissmatch: false,
    value: '',
    min: ''
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

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  componentDidMount() {
    let hoy = new Date();
  
    const dia = hoy.getDate();
    let mes = (hoy.getMonth() + 1);
    mes = mes.toString()
  
    mes = mes.length === 1 ? "0" + mes : mes

    const año = hoy.getFullYear();
    const añomin = año - 18


    const fechamin = añomin + "-" + mes + "-" + dia;
    hoy = año + "-" + mes + "-" + dia;

    this.setState(() => ({ value: hoy, min: fechamin }));
 

  }

  render() {
    if (this.state.goToLogin) {
      return <Redirect to="/login" />
    }

    return (
    <div>
      <div className="SignUp">
       

        <Formik
          initialValues={INITIAL_VALUES}
          validationSchema={SignUpSchema}
          onSubmit={(values) => this.createUser(values)}>
          <Form>
            <h2>Creá tu cuenta</h2>
            <div className="title"> 
           
            <FieldWithError name="firstName" placeholder="Ingresa tu nombre" aria-label="firstName" className="input" /> 
            Nombre
            </div>
            <div className="title"> 
            <FieldWithError name="lastName" placeholder="Ingresa tu apellido" aria-label="lastName" className="input" />
            Apellido
            </div>

            <div className="title"> 
            <FieldWithError name="age" placeholder="Ingresa tu fecha de nacimiento" className="input" max={this.state.min} value={this.state.value} onChange={this.handleChange} required type="date"/>
            Fecha de nacimiento
            </div>

            <div className="title"> 
          <DropdownGender name="gender" styleName={"input"} options={genders} />
          Género
          </div>

      
           <div className="title"> 
            <FieldWithError name="email" placeholder="Ingresa tu email" aria-label="email" className="input" />
            Email
            </div>

            <div className="title"> 
            <FieldWithError name="password" placeholder="Ingresa tu contraseña" type="password" aria-label="password" className="input" />
            Contraseña
            </div>
          
            <div className="title"> 
            <FieldWithError name="passwordRepeated" placeholder="Repetí tu contraseña" type="password" aria-label="passwordRepeated" className="input" />
            Repetí la contraseña</div>
            <br/>

            
           <label className="title">Subí foto de tu DNI para validar tu identidad</label><br></br>
           
          <div className="right-container">
                <input style={{ display: 'none' }} type="file" onChange={this.fileSelectedHandler} ref={fileImput => this.fileImput = fileImput}/>
          
                <div className="dni1"> 
                     <label className="input3">Frente</label><br></br>
                    <img src={dni1} alt={"dni frente"} width="150" onClick={() => this.fileImput.click()}/>
               </div>
               <div className="dni2">
                     <label className="input3">Dorso</label><br></br>
                     <img src={dni2} alt={"dni detras"} width="150" onClick={() => this.fileImput.click()}/>
              </div>
               <br/>
              <label className="title">Subí una foto que se mostrará en tu perfil</label>
              <div className="profile">
                   <img src={icon} alt={"Foto de perfil"} width="60" onClick={() => this.fileImput.click()}/></div>
               </div>
              <div className='remember'>
                  <p>Al crear cuenta estoy aceptando los
                   <a className="forgotPass" href={'/terminos'}> términos y condiciones</a></p>

     
          </div>
          <div className="right-container">
              <input type="submit" className="btn-primero" value="Crear cuenta" />
             
                   {this.state.passwordsMissmatch && (
                    <p className="form-error">
                     Las contreseñas no coinciden. Intenta de nuevo.
                    </p>
                   )}
                  {this.state.signUpFailed && (
                    <p className="form-error">
                      Creación de usuario falló. Intenta de nuevo.
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

export default SignUp;

