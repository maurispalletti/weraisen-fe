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
import CrearCuentaModal_Alvo from './components/CrearCuentaModal_Alvo'

const INITIAL_VALUES = {
  firstName: '',
  lastName: '',
  identification: '',
  gender: '',
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
    min: '',
    denunciaModalShow: false,
    imagenDNI1: null
  }

  createUser = async ({
    firstName,
    lastName,
    identification,
    birthDate,
    gender,
    email,
    password,
    passwordRepeated,
  }) => {
    console.log('entrooooooooooo')
    try {
      if (password === passwordRepeated) {
        const birthDate = this.state.value;
        const response = await userServices.createUser({
          firstName,
          lastName,
          identification,
          birthDate,
          gender,
          email,
          password
        })

        const { data: { id } } = response

        // save Id in local storage
        localStorage.setItem("userId", id);

        this.setState({ passwordsMissmatch: false, denunciaModalShow: true, signUpFailed: false })
      } else {
        this.setState({ signUpFailed: true, passwordsMissmatch: true })
      }

    } catch (error) {
      this.setState({ signUpFailed: true })
      console.error(`There was an error trying to create the user`)
    }
  }

  handleChange = (event) => {
    console.log(`!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`)
    console.log(event.target.value)
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

  onChange(e) {
    let files = e.target.files;
    console.log(files);
    this.setState.imagenDNI1 = files;
  }

  render() {

    let denunciaModalClose = () => this.setState({ denunciaModalShow: false, goToLogin: true });
    if (this.state.goToLogin) {
      return <Redirect to="/login" />
    }
    if (this.state.pendingScreen) {
      return <div><h3>Estamos validando tu perfil</h3></div>
    }

    return (
      
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
            <FieldWithError name="identification" placeholder="Ingresa tu documento" aria-label="identification" className="input" />
            Documento
            </div>

              <div className="title">
                <FieldWithError name="age"
                  placeholder="Ingresa tu fecha de nacimiento"
                  className="input"
                  max={this.state.min}
                  value={this.state.value}
                  onChange={this.handleChange}
                  required 
                  type="date" 
                  />
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
              <br />




              <div className="right-container">
                <label className="title">Subí foto de tu DNI para validar tu identidad</label><br></br>
                {/* <input style={{ display: 'none' }} type="file" onChange={this.fileSelectedHandler} ref={fileImput => this.fileImput = fileImput}/> */}
                <input style={{ display: 'none' }} type="file" onChange={(e) => this.onChange(e)} ref={fileImput => this.fileImput = fileImput} />

                <div className="dni1">
                  <label className="input3">Frente</label><br></br>
                  <img src={dni1} alt={"dni frente"} width="150" onClick={() => this.fileImput.click()} />
                </div>
                <div className="dni2">
                  <label className="input3">Dorso</label><br></br>
                  <img src={dni2} alt={"dni detras"} width="150" onClick={() => this.fileImput.click()} />
                </div>
                <div className='remember'>
                  <p>Al crear cuenta estoy aceptando los
                   <a className="forgotPass" href={'/terminos'}> términos y condiciones</a></p>


                </div>
                <div className="righ-container">
                

                  <input type="submit" className="btn-primero" value="Crear cuenta" />

                  <CrearCuentaModal_Alvo
                    show={this.state.denunciaModalShow}
                    onHide={denunciaModalClose}
                  />

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
                </div>
            </Form>
          </Formik>
        
       </div>
        
    );
  }
};

export default SignUp;

