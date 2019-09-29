import * as Yup from 'yup'

export function LoginSchema () {
  return Yup.object().shape({
    email: Yup.string().required('Ingresa un email'),
    password: Yup.string().required('Ingresa una contraseña')
  })
}

// export function TalentPartnerSignUpSchema () {
//   return Yup.object().shape({
//     name: Yup.string().required('Required'),
//     email: Yup.string().required('Required'),
//     password: Yup.string().required('Required')
//   })
// }


// export function JobOrderSchema () {
//   return Yup.object().shape({
//     jobTitle: Yup.string().required('Required'),
//     company: Yup.string().required('Required'),
//     jobLocation: Yup.string().required('Required'),
//     baseSalary: Yup.number()
//       .min(0)
//       .required('Required'),
//     salaryPeriod: Yup.string().required('Required'),
//     fullName: Yup.string().required('Required'),
//     email: Yup.string()
//       .required('Required')
//       .email()
//   })
// }

// export function ResetPasswordSchema () {
//   return Yup.object().shape({
//     password: Yup.string().required('Password is required'),
//     passwordConfirm: Yup.string()
//       .oneOf([Yup.ref('password'), null], 'Passwords must match')
//       .required('Password confirm is required')
//   })
// }
