import * as Yup from 'yup'

export function LoginSchema () {
  return Yup.object().shape({
    email: Yup.string().required('Ingresa un email'),
    password: Yup.string().required('Ingresa una contraseña')
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
    age: Yup.number().required('Ingresa tu edad'),
    identification: Yup.string().required('Ingresa tu identificación'),
    gender: Yup.string().required('Ingresa tu género'),
    city: Yup.string().required('Ingresa tu ciudad de residencia'),
    email: Yup.string().required('Ingresa un email'),
    password: Yup.string().required('Ingresa una contraseña'),
    passwordRepeated: Yup.string().required('Repite la contraseña')
  })
}

export function GuideProfileSchema () {
  return Yup.object().shape({
    description: Yup.string().required('Ingresa una descripción'),
    languages: Yup.string().required('Selecciona un lenguaje'),
  })
}

export function ProfileSchema () {
  return Yup.object().shape({
    firstName: Yup.string().required('Ingresa tu nombre'),
    lastName: Yup.string().required('Ingresa tu apellido'),
    age: Yup.number().required('Ingresa tu edad'),
    identification: Yup.string().required('Ingresa tu identificación'),
    gender: Yup.string().required('Ingresa tu género'),
    city: Yup.string().required('Ingresa tu ciudad de residencia'),
  })
}
