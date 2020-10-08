import React, { Component } from 'react';
import './Boton_Sombreado.css';
// import { Button } from 'react-bootstrap';

export default class Boton_Sombreado extends Component {
    state = {
        elegidas: [],

    }
    componentDidMount() {
		this.setState({elegidas: this.props.defaultSelected});
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
                            className={this.state.elegidas.length > 0 && this.state.elegidas.includes('Español') ? " button ItemSeleccionadoA" : "button ItemNoSeleccionadoA"}
                            onClick={() => this.agregarIdioma("Español")}
                            style={{ width: '72px', height: '32px', margin: '10px', color:'white' }}
                        >Español</button>
                    </div>
                    <div >
                        <button type="button"
                            className={this.state.elegidas.length > 0 && this.state.elegidas.includes('Inglés') ? "button ItemSeleccionadoA" : "button ItemNoSeleccionadoA"}
                            onClick={() => this.agregarIdioma("Inglés")}
                            style={{ width: '72px', height: '32px', margin: '10px', color:'white' }}
                        >Inglés</button>
                    </div>
                </div>
                <div className="row d-flex align-items-center bd-highlight mb-3 text-center justify-content-center">
                    <div >
                        <button type="button"
                            className={this.state.elegidas.length > 0 && this.state.elegidas.includes('Italiano') ? "button ItemSeleccionadoA" : "button ItemNoSeleccionadoA"}
                            onClick={() => this.agregarIdioma("Italiano")}
                            style={{ width: '72px', height: '32px', margin: '10px', color:'white' }}
                        >Italiano</button>
                    </div>
                    <div >
                        <button type="button"
                            className={this.state.elegidas.length > 0 && this.state.elegidas.includes('Portugués') ? "button ItemSeleccionadoA" : "button ItemNoSeleccionadoA"}
                            onClick={() => this.agregarIdioma("Portugués")}
                            style={{ width: '72px', height: '32px', margin: '10px', color:'white' }}
                        >Portugués</button>
                    </div>
                </div>
                <div className="row d-flex align-items-center bd-highlight mb-3 text-center justify-content-center">
                    <div >
                        <button type="button"
                            className={this.state.elegidas.length > 0 && this.state.elegidas.includes('Francés') ? "button ItemSeleccionadoA" : "button ItemNoSeleccionadoA"}
                            onClick={() => this.agregarIdioma("Francés")}
                            style={{ width: '72px', height: '32px', margin: '10px', color:'white' }}
                        >Francés</button>
                    </div>
                    <div >
                        <button type="button"
                            className={this.state.elegidas.length > 0 && this.state.elegidas.includes('Alemán') ? "button ItemSeleccionadoA" : "button ItemNoSeleccionadoA"}
                            onClick={() => this.agregarIdioma("Alemán")}
                            style={{ width: '72px', height: '32px', margin: '10px', color:'white' }}
                        >Alemán</button>
                    </div>
                </div>
            </div>
        )
    }
}
