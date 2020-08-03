import * as Yup from 'yup'

export function LoginSchema () {
  return Yup.object().shape({
    email: Yup.string().required('Ingresa un email'),
    password: Yup.string().required('Ingresa una contraseña')
  })
}
export function PasswordRecoverySchema(){
  return Yup.object().shape({
    email: Yup.string().required('Ingresa un email')
  })
}
export function ChangePasswordSchema(){
  return Yup.object().shape({
    password: Yup.string().required('Ingresa una contraseña'),
    passwordRepeated: Yup.string().required('Repite la contraseña')
  })
}
export function ReviewSchema () {
  return Yup.object().shape({
    description: Yup.string().required('Ingresa una descripción de tu acompañante')
  })
}

export function SignUpSchema () {
  return Yup.object().shape({
    firstName: Yup.string().required('Ingresa tu nombre'),
    lastName: Yup.string().required('Ingresa tu apellido'),
    identification: Yup.string().required('Ingresa tu número de documento'),
    //birthDate: Yup.date().required('Ingresa tu fecha de nacimiento'),
    gender: Yup.string().required('Ingresa tu género'),
    email: Yup.string().required('Ingresa un email'),
    password: Yup.string().required('Ingresa una contraseña'),
    passwordRepeated: Yup.string().required('Repite la contraseña')
  })
}

export function GuideProfileSchema () {
  return Yup.object().shape({
    description: Yup.string().required('Ingresa una descripción'),
    city: Yup.string().required('Selecciona una ciudad'),      
    
  })
}

export function ProfileSchema () {
  return Yup.object().shape({
    firstName: Yup.string().required('Ingresa tu nombre'),
    lastName: Yup.string().required('Ingresa tu apellido'),
    birthDate: Yup.date().required('Ingresa tu fecha de nacimiento'), 
    identification: Yup.string().required('Ingresa tu identificación'),
    gender: Yup.string().required('Ingresa tu género'),
    city: Yup.string().required('Ingresa tu ciudad de residencia'),
  })
}
