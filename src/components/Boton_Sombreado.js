import React, { Component } from 'react';
import './Boton_Sombreado.css';
// import { Button } from 'react-bootstrap';

export default class Boton_Sombreado extends Component {
    state = {
        elegidas: [],

    }

    agregarIdioma(idioma) {

        let nueva = []
        let vieja = this.state.elegidas

        if (vieja.includes(idioma)) {
            const i = vieja.indexOf(idioma);

            if (i !== -1) {
                vieja.splice(i, 1);
            }
            nueva = vieja.slice(idioma)

        }
        else {
            nueva = [...vieja, idioma]
        }

        this.props.onCategoryChange(nueva);
        this.setState(() => ({ elegidas: nueva }));

    }    

    render() {
        return (
            <div>
                <div className="row d-flex align-items-center bd-highlight mb-3 text-center justify-content-center">
                    <div >
                        <button type="button"
                            className={this.state.elegidas.length > 0 && this.state.elegidas.includes('Español') ? " button " : "button ItemNoSeleccionadoA"}
                            onClick={() => this.agregarIdioma("Español")}
                            style={{ width: '72px', height: '32px', margin: '10px' }}
                        >Español</button>
                    </div>
                    <div >
                        <button type="button"
                            className={this.state.elegidas.length > 0 && this.state.elegidas.includes('Inglés') ? "button" : "button ItemNoSeleccionadoA"}
                            onClick={() => this.agregarIdioma("Inglés")}
                            style={{ width: '72px', height: '32px', margin: '10px' }}
                        >Inglés</button>
                    </div>
                </div>
                <div className="row d-flex align-items-center bd-highlight mb-3 text-center justify-content-center">
                    <div >
                        <button type="button"
                            className={this.state.elegidas.length > 0 && this.state.elegidas.includes('Italiano') ? "button" : "button ItemNoSeleccionadoA"}
                            onClick={() => this.agregarIdioma("Italiano")}
                            style={{ width: '72px', height: '32px', margin: '10px' }}
                        >Italiano</button>
                    </div>
                    <div >
                        <button type="button"
                            className={this.state.elegidas.length > 0 && this.state.elegidas.includes('Portugués') ? "button" : "button ItemNoSeleccionadoA"}
                            onClick={() => this.agregarIdioma("Portugués")}
                            style={{ width: '72px', height: '32px', margin: '10px' }}
                        >Portugués</button>
                    </div>
                </div>
                <div className="row d-flex align-items-center bd-highlight mb-3 text-center justify-content-center">
                    <div >
                        <button type="button"
                            className={this.state.elegidas.length > 0 && this.state.elegidas.includes('Francés') ? "button" : "button ItemNoSeleccionadoA"}
                            onClick={() => this.agregarIdioma("Francés")}
                            style={{ width: '72px', height: '32px', margin: '10px' }}
                        >Francés</button>
                    </div>
                    <div >
                        <button type="button"
                            className={this.state.elegidas.length > 0 && this.state.elegidas.includes('Alemán') ? "button" : "button ItemNoSeleccionadoA"}
                            onClick={() => this.agregarIdioma("Alemán")}
                            style={{ width: '72px', height: '32px', margin: '10px' }}
                        >Alemán</button>
                    </div>
                </div>
            </div>
        )
    }
}
