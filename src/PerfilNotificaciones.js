import React, { Component } from 'react';
import CardNotificaciones from '../src/components/CardNotificacionesAAl';
import home from './icons/home.svg';
import Header from '../src/components/Header';

class Notificacion extends Component {
    render() {
        return (

        <div>

            <div>
                 <Header> </Header>
            </div> 

            <div className="notificacion">
                <h1>Notificaciones</h1>
            </div>

            <div>
              <CardNotificaciones></CardNotificaciones>
            </div>
        </div>

        );
    }
}
    export default Notificacion;