import userServices from './services/userServices'
import { Redirect } from 'react-router'

import { Formik, Form } from 'formik'
import { PasswordRecoverySchema } from './helpers/validators'
import FieldWithError from './forms/FieldWithError'
import React, { Component } from 'react'
import PasswordRecovery_Alerta from './components/PasswordRecovery_Alerta'


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
        let AlertaClose = () => this.setState({ goToLogin: true });
        return (
            <div class="contaainer" style={{backgroundColor: "#282828"}}>
                <div class="m-5" style={{backgroundColor: "#282828", borderRadius:'6px', alignItems:'center', justifyContent:'center'}}>
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

                            <div className="right-container" style={{ padding: "30px" }}>
                                    <input type="submit" className="btn-primero" value="Enviar"  />
                                </div>
                            </Form>
                        </Formik>

                        <PasswordRecovery_Alerta
                        show={this.state.enviado}
                         onHide={AlertaClose}
                       />

                    </div>
                    <div className="right-container" style={{ padding: "30px" }}>
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