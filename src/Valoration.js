// import React, { Component } from 'react';
// import './Valoration.css';
// // import Puntuacion from './components/rating/Rating.js'
// import Buttom from './components/Boton.js'
// import home from './icons/home.svg';
// import avatar_woman_1 from './avatars/avatar_1.svg';
// import { Formik, Form } from 'formik'
// import FieldWithError from './forms/FieldWithError'


// const INITIAL_VALUES = {
//     description: '',
//     valoration: ''
// }


// class Valoration extends Component {
//     state = {
//         rol: "",
//     }


//     render() {

//         return (
//             <div className="Home">
//                 <div className="Header">
//                     <a href={"/home"} className="HomeIcon">
//                         <img src={home} alt={"Home"} />
//                     </a>
//                     <div className="HeaderImage">
//                         <a href={"/profile"}>
//                             <img src={avatar_woman_1} alt={"User"} />
//                         </a>
//                     </div>
//                 </div>

//                 <div className="Body">
//                     <Formik
//                         initialValues={INITIAL_VALUES}
//                         onSubmit={(filters) => this.searchGuides(filters)}>
//                         <Form>
//                             <div className="Section">
//                                 <h4>Puntua a tu {this.state.rol} para ayudar a futuros {!this.state.rol} a tener una mejor experiencia</h4>
//                                 {/* <Puntuacion /> */}
//                             </div>
//                             <div className="DecriptionSection">
//                                 <h4>Añade un comentario sobre el encuentro con tu {this.state.rol}: </h4>
//                                 <FieldWithError component={'textarea'} name="description" placeholder="Ingresa tu descripción" aria-label="description" className="descripcion-input" />

//                             </div>
//                             <div className="buttonsSection">
//                                 <Buttom link={'/home'} className={"button"} name={"GUARDAR VALORACIÓN"} />
//                             </div>
//                             {this.state.notLoggedInUser && (
//                                 <p className="form-error">Usuario no logueado.</p>
//                             )}

//                         </Form>
//                     </Formik>

//                 </div>
//             </div>
//         );
//     }
// }
// export default Valoration;