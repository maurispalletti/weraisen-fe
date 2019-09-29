import React from 'react'
import {render} from 'react-dom'
import {withFormik, Form, Field } from 'formik'
import Yup from 'yup'


const Profile = ({
  values,
  errors,
  touched
  
} ) => (
  <Form > 
    <div>
      {touched.nombre && errors.nombre && <p>{errors.nombre}</p>}
    <Field type="text" name="nombre" placeholder="Nombre"/>
    </div>
    <div>
      {touched.apellido && errors.apellido && <p>{errors.apellido}</p>}
    <Field type="text" name="apellido" placeholder="Apellido" />
    </div>

    <Filed type="text" name="fechaNacimiento" placeholder="fechaNacimiento" />
    <Field type="text" name="dni" placeholder="dni"  />
    
    <Field componenet= "selected" name="sexo" >
        <option value="Masculino">Masculino</option>
        <option value="Femenino">Femenino</option>
        <option value="Otro">Otro</option>
    </Field>


        
    
    <button>Submit</button>


  </Form>
)

const formikApp =withFormik ({
  mapPropsToValues({nombre, apellido, fechaNacimiento, dni, sexo}){
    return{
      nombre: nombre || '',
      apellido: apellido || '',
      fechaNacimiento: fechaNacimiento || '',
      dni: dni || '',
      sexo: sexo || 'Femenino'
    }
  },
  validationSchema: Yup.object().shape({
    nombre: Yup.string().required(),
    apellido: Yup.string().required(),
    fechaNacimiento: Yup.string().required(),
    dai: Yup.string().min(7).required(),
    


  }),
  handleSubmit(values) {
    setTimeout (() => {

    }, 2000 )
    
  }
}) (Profile)


export default SingUp;




























// const Profile = () => (
//   <div className="SignUp">
//     <form>
//       {/* <form onSubmit={this.handleSignIn.bind(this)}> */}
//       <div className="signUpTitle">
//         CREA TU CUENTA
//       </div>
//       <input className="input" type="text" placeholder="Nombre" />
//       <input className="input" type="text" placeholder="Apellido" />
//       <input className="input" type="text" placeholder="Fecha de nacimiento" />
//       <input className="input" type="text" placeholder="DNI / Pasaporte / ID" />

//       <select className="Dropdown-g">
//           <option value="" selected disabled hidden>Selecciona un género...</option>
//           <option value={1}>Femenino</option>
//           <option value={2}>Masculino</option>
//           <option value={3}>Otro</option>
//         </select>

//       <input className="input" type="text" placeholder="Ciudad de residencia" />
//       <input className="input" type="text" placeholder="Email" />
//       <input className="input" type="password" placeholder="Contraseña" />
//       <input className="input" type="password" placeholder="Repite tu contraseña" />
//       <a href={'/home'} className="create-account-button">CREAR CUENTA</a>
//     </form>
//     <Footer/>
//   </div>



