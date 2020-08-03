import userServices from './services/userServices'
import { Redirect } from 'react-router'

import { Formik, Form } from 'formik'
import { ChangePasswordSchema } from './helpers/validators'
import FieldWithError from './forms/FieldWithError'
import React, { Component } from 'react'



const INITIAL_VALUES = {
    password: '',
     passwordRepeated: '',
}
class ChangePassword extends Component {
    state = {
        goToLogin: false,
        enviado: false,

    }

    changePassword = async ({ password, passwordRepeated }) => {
        console.log(password, passwordRepeated)
        //this.setState({ goToLogin: true })
        this.setState({ enviado: true })

    }


    render() {
        console.log(this.state.goToLogin)
        if (this.state.goToLogin) {
            return <Redirect to="/login" />
        }

        return (
            <div class="contaainer" style={{ backgroundColor: "#282828" }}>
                <div class="m-5" style={{ backgroundColor: "#282828", borderRadius: '6px', alignItems: 'center', justifyContent: 'center' }}>
                    <div class="User">
                        <br></br>
                        <div className="title">
                            <h2>Ingresá tu nueva contraseña</h2>
                        </div>

                        <Formik
                            initialValues={INITIAL_VALUES}
                            validationSchema={ChangePasswordSchema}
                            onSubmit={(values) => this.changePassword(values)}>
                            <Form>
                                
                                <div className="title">
                                    <FieldWithError name="password" placeholder="Ingresa tu contraseña" type="password" aria-label="password" className="input" />
                                                     Contraseña
                                 </div>

                                <div className="title">
                                    <FieldWithError name="passwordRepeated" placeholder="Repetí tu contraseña" type="password" aria-label="passwordRepeated" className="input" />
                                         Repetí la contraseña</div>
                                <br />

                                <div className="right-container" style={{ padding: "30px" }}>
                                    <input type="submit" className="btn-primero" value="Confirmar" />
                                </div>
                            </Form>
                        </Formik>

                        {this.state.enviado && 
                        <div class="alert alert-dismissible alert-secondary" style={{ maxWidth: '300px', textAlign: 'center' }} role="alert">
                        <strong>Se ha actualizado tu contraseña</strong> Vuelve a ingresar
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close" onClick={() => this.setState({ goToLogin: true })}>
                             <span aria-hidden="true">&times;</span>
                        </button>
                        </div>}


                    </div>
                    
                </div>
            </div>

        )

    }

};
export default ChangePassword;