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
import icongris from './icons/icon-gris.svg'
import dni1gris from './icons/frente-gris.png'
import dni2gris from './icons/dorso-gris.png'
import CrearCuentaModal from './components/CrearCuentaModal_Alvo'

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
    uploadFailed: false,
    passwordsMissmatch: false,
    value: '',
    min: '',
    denunciaModalShow: false,
    imagenDNI1: null,
    imagenDNI2: null,
    imagenFotoPerfil: null,
    acepto: false,
    front: dni1gris,
    back: dni2gris,
    profile: icongris
  }

  createUser = async ({
    firstName,
    lastName,
    identification,
    gender,
    email,
    password,
    passwordRepeated,
  }) => {
    try {
     

      if (password === passwordRepeated) {
        const birthDate = this.state.value;

        let imagenDNI1Url;
        let imagenDNI2Url;
        let imagenFotoPerfilUrl;

        if (this.state.imagenDNI1 && this.state.imagenDNI2 && this.state.imagenFotoPerfil) {
          imagenDNI1Url = await userServices.upLoadImg(this.state.imagenDNI1);
          imagenDNI2Url = await userServices.upLoadImg(this.state.imagenDNI2);
          imagenFotoPerfilUrl = await userServices.upLoadImg(this.state.imagenFotoPerfil);

          console.log(`Imagen 1: ${JSON.stringify(imagenDNI1Url)}`)
          console.log(`Imagen 2: ${imagenDNI2Url}`)
          console.log(`Imagen 3: ${imagenFotoPerfilUrl}`)

        } else {
          this.setState({ signUpFailed: true, uploadFailed: true })
        }

        const response = await userServices.createUser({
          firstName,
          lastName,
          identification,
          birthDate,
          gender,
          email,
          password,
          idFront: imagenDNI1Url.data,
          idBack: imagenDNI2Url.data,
          profilePicture: imagenFotoPerfilUrl.data
        })

        const { data: { id } } = response

        // save Id in local storage
        localStorage.setItem("userId", id);

        this.setState({ passwordsMissmatch: false, uploadFailed: false, denunciaModalShow: true, signUpFailed: false })
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

  fileSelectedDNI1 = event => {
    this.setState({
      imagenDNI1: event.target.files[0], front: dni1
    })

  }

  fileSelectedDNI2 = event => {
    this.setState({
      imagenDNI2: event.target.files[0], back: dni2
    })
  }

  fileSelectedFotoPerfil = event => {
    this.setState({
      imagenFotoPerfil: event.target.files[0], profile: icon
    })
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

              <FieldWithError name="firstName" placeholder="Ingresá tu nombre" pattern="[a-zA-Z]+" aria-label="firstName" className="input" />
            Nombre
            </div>
            <div className="title">
              <FieldWithError name="lastName" type="text" pattern="[a-zA-Z]+" placeholder="Ingresá tu apellido" aria-label="lastName" className="input" />
            Apellido
            </div>
            <div className="title">
              <FieldWithError name="identification" placeholder="Ingresá tu número de documento" aria-label="identification" className="input" pattern="[1,9]{1,15}" />
            Documento
            </div>

            <div className="title">
              <FieldWithError name="age"
                placeholder="Ingresá tu fecha de nacimiento"
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
              <FieldWithError name="email" placeholder="Ingresá tu email" aria-label="email" className="input" />
            Email
            </div>

            <div className="title">
              <FieldWithError name="password" placeholder="Ingresá tu contraseña" type="password" aria-label="password" className="input" />
            Contraseña
            </div>

            <div className="title">
              <FieldWithError name="passwordRepeated" placeholder="Repetí tu contraseña" type="password" aria-label="passwordRepeated" className="input" />
            Repetí la contraseña</div>
            <br />




            <div className="right-container">
              <label className="title">Subí foto de tu DNI para validar tu identidad</label><br></br>
              {/* <input style={{ display: 'none' }} type="file" onChange={this.fileSelectedHandler} ref={fileImput => this.fileImput = fileImput}/> */}
              <input style={{ display: 'none' }} type="file" onChange={this.fileSelectedDNI1} ref={fileImput1 => this.fileImput1 = fileImput1} />
              <input style={{ display: 'none' }} type="file" onChange={this.fileSelectedDNI2} ref={fileImput2 => this.fileImput2 = fileImput2} />
              <input style={{ display: 'none' }} type="file" onChange={this.fileSelectedFotoPerfil} ref={fileImput3 => this.fileImput3 = fileImput3} />

              <div className="dni1">
                <label className="input3">Frente</label><br></br>
                <img src={this.state.front} alt={"dni frente"} width="150" onClick={() => this.fileImput1.click()} />
              </div>
              <div className="dni2">
                <label className="input3">Dorso</label><br></br>
                <img src={this.state.back} alt={"dni detras"} width="150" onClick={() => this.fileImput2.click()} />
              </div>
              <br />
              <label className="title">Subí una foto que se mostrará en tu perfil</label>
              <div className="profile">
                <img src={this.state.profile} alt={"Foto de perfil"} width="60" onClick={() => this.fileImput3.click()} />
              </div>

              <br></br>
              <br></br>
              <div class="custom-control custom-checkbox" style={{ paddingLeft: '50px', paddingRight: '50px', paddingBottom: '15px' }}>
                <input type="checkbox" class="custom-control-input" id="salidaGrupal" checked={this.state.acepto} onChange={() => this.setState({ acepto: !this.state.acepto })} />
                <label class="custom-control-label" for="salidaGrupal" style={{ cursor: 'pointer' }}>Al crear cuenta estoy aceptando los <a className="forgotPass" href={'/terminos'}> términos y condiciones</a></label>
              </div>
              <br></br>
              <br></br>

              <div className="righ-container">

                <input type="submit" className="btn-primero" value="Crear cuenta" disabled={!this.state.acepto} />
                <br></br>
                <br></br>

                <input type="submit" className="btn-primero" value="Cancelar" onClick={() => this.setState({ goToLogin: true })} />


                <CrearCuentaModal
                  show={this.state.denunciaModalShow}
                  onHide={denunciaModalClose}
                />
                {this.state.passwordsMissmatch && (
                  <p className="form-error">
                    Las contreseñas no coinciden. Intenta de nuevo.
                  </p>
                )}
                {this.state.uploadFailed && (
                  <p className="form-error">
                    Sube tus fotos de DNI y de perfil para poder continuar.
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

