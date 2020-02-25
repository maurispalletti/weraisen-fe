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
                { Nombre: 'Juan', Descripcion: 'Se especializa en turismo natural', Puntuacion: 7},
                { Nombre: 'José', Descripcion: ' Activo, y dispuesto a recorrer lugar emblemáticos', Puntuacion: 6},
                { Nombre: 'Franca', Descripcion: ' Me gusta el arte y recorrer las galerías es mi pasión', Puntuacion: 9},
                { Nombre: 'Sol', Descripcion: ' Apasionada por el intercambio cultural y mostrar mi ciudad', Puntuacion: 9},
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

