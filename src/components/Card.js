import React from 'react'
import { Fragment } from 'react';

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = { cosas: [] };
    }

    componentDidMount() {

        this.setState({
            cosas: [
                { Nombre: 'Gato 1', Descripcion: 'algo gato para la joda', Puntuacion: -5 },
                { Nombre: 'Gato 2', Descripcion: 'algo gato para la comer', Puntuacion: 12 },
                { Nombre: 'Gato 3', Descripcion: 'algo gato para la deporte', Puntuacion: 2 },
                { Nombre: 'Gato 4', Descripcion: 'algo gato para la vago', Puntuacion: 10 },
                
                
            ]
        });

    }

    render() {
        return <Fragment>

            {this.state.cosas.map((item, index) => {
                return <div className="col-md-4" key={index}>
                    <div className="bs-component">

                         <div className="card text-white bg-primary mb-2" style={{ maxWidth: '20rem' }}>
                            <div className="card-header">{item.Nombre}</div>
                            <div className="card-body">
                                <h4 className="card-title">Puntuacion: {item.Puntuacion}</h4>
                                <p className="card-text">{item.Descripcion}</p>
                            </div>
                        </div>
                    </div>
                </div>
            })}
        </Fragment>;
    }
}



export default Card;

