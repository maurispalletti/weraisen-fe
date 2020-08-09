import userServices from './services/userServices'
import { Redirect } from 'react-router'

import { Formik, Form } from 'formik'
import { PasswordRecoverySchema } from './helpers/validators'
import FieldWithError from './forms/FieldWithError'
import React, { Component } from 'react'



const INITIAL_VALUES = {
    email: '',
}
class PasswordRecovery extends Component {
    state = {
        goToLogin: false,
        enviado: false,

    }

     sendEmail = async ({email})=> {
        console.log(email)
        this.setState({enviado:true})
       
       
    }


    render() {
        console.log(this.state.goToLogin)
        if (this.state.goToLogin) {
            return <Redirect to="/login" />
        }
        
        return (
            <div class="contaainer" style={{backgroundColor: "#2c2b2b"}}>
                <div class="m-5" style={{backgroundColor: "#2c2b2b", borderRadius:'6px', alignItems:'center', justifyContent:'center'}}>
                    <div class="User">
                        <br></br>
                        <div className="title">
                            <h2>Recuperar contraseña</h2>
                        </div>

                        <Formik
                            initialValues={INITIAL_VALUES}
                            validationSchema={PasswordRecoverySchema}
                            onSubmit={(values) => this.sendEmail(values)}>
                            <Form>
                                <p>Ingresa tu email para restablecer tu contraseña</p>
                                <FieldWithError name="email" aria-label="username" className="input" autoComplete="off" />Email

                            <div className="right-container" style={{ paddingTop: "50px" }}>
                                    <input type="submit" className="btn-primero" value="Enviar"  />
                                </div>
                            </Form>
                        </Formik>

                       
                        {this.state.enviado && 
                        <div class="alert alert-dismissible alert-secondary" style={{ maxWidth: '300px', textAlign: 'center' }} role="alert">
                        <strong>Se ha enviado el email.</strong> Por favor verifica tu casilla de correo
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close" onClick={() => this.setState({ goToLogin: true })}>
                             <span aria-hidden="true">&times;</span>
                        </button>
                        </div>}

                    </div>
                    <div className="right-container" style={{ paddingTop: "10px" }}>
                        <input type="submit" className="btn-primero" value="Volver" onClick={() => this.setState({ goToLogin: true })} />
                    </div>
                    <div class="col-sm-8 align-self-center text-center">


                    </div>
                </div>
            </div>

        )

    }

};
export default PasswordRecovery;