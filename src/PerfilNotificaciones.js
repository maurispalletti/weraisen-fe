import React, { Component } from 'react';
import CardNotificaciones from '../src/components/CardNotificacionesAAl';
import Header from '../src/components/Header';

class Notificacion extends Component {
    render() {
        return (

        <div>
            <Header> </Header>

            <div className="notificacion" style={{paddingTop:"30px"}}>
                <h2>Mis notificaciones</h2>
            </div>

            <div style={{paddingTop:"20px"}}>
              <CardNotificaciones></CardNotificaciones>
            </div>
        </div>

        );
    }
}
    export default Notificacion;