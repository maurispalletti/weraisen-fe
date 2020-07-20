import React, { Component } from 'react';
import './Boton_Sombreado.css';
// import { Button } from 'react-bootstrap';

export default class Dias_Disponible extends Component {
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
                            className={( this.state.elegidas && this.state.elegidas.length > 0) && this.state.elegidas.includes('Lunes') ? " button ItemSeleccionadoA" : "button ItemNoSeleccionadoA"}
                            onClick={() => this.agregarIdioma("Lunes")}
                            style={{ width: '72px', height: '32px', margin: '10px' }}
                        >Lunes</button>
                    </div>
                    <div >
                        <button type="button"
                            className={( this.state.elegidas && this.state.elegidas.length > 0) && this.state.elegidas.includes('Martes') ? "button ItemSeleccionadoA" : "button ItemNoSeleccionadoA"}
                            onClick={() => this.agregarIdioma("Martes")}
                            style={{ width: '72px', height: '32px', margin: '10px' }}
                        >Martes</button>
                    </div>
                </div>
                <div className="row d-flex align-items-center bd-highlight mb-3 text-center justify-content-center">
                    <div >
                        <button type="button"
                            className={( this.state.elegidas && this.state.elegidas.length > 0)&& this.state.elegidas.includes('Miércoles') ? "button ItemSeleccionadoA" : "button ItemNoSeleccionadoA"}
                            onClick={() => this.agregarIdioma("Miércoles")}
                            style={{ width: '72px', height: '32px', margin: '10px' }}
                        >Miércoles</button>
                    </div>
                    <div >
                        <button type="button"
                            className={( this.state.elegidas && this.state.elegidas.length > 0)&& this.state.elegidas.includes('Jueves') ? "button ItemSeleccionadoA" : "button ItemNoSeleccionadoA"}
                            onClick={() => this.agregarIdioma("Jueves")}
                            style={{ width: '72px', height: '32px', margin: '10px' }}
                        >Jueves</button>
                    </div>
                </div>
                <div className="row d-flex align-items-center bd-highlight mb-3 text-center justify-content-center">
                    <div >
                        <button type="button"
                            className={( this.state.elegidas && this.state.elegidas.length > 0) && this.state.elegidas.includes('Viernes') ? "button ItemSeleccionadoA" : "button ItemNoSeleccionadoA"}
                            onClick={() => this.agregarIdioma("Viernes")}
                            style={{ width: '72px', height: '32px', margin: '10px' }}
                        >Viernes</button>
                    </div>
                    <div >
                        <button type="button"
                            className={( this.state.elegidas && this.state.elegidas.length > 0) && this.state.elegidas.includes('Sábado') ? "button ItemSeleccionadoA" : "button ItemNoSeleccionadoA"}
                            onClick={() => this.agregarIdioma("Sábado")}
                            style={{ width: '72px', height: '32px', margin: '10px' }}
                        >Sábado</button>
                    </div>
                </div>
                <div className="row d-flex align-items-center bd-highlight mb-3 text-center justify-content-center">
                    <div >
                        <button type="button"
                            className={( this.state.elegidas && this.state.elegidas.length > 0) && this.state.elegidas.includes('Domingo') ? "button ItemSeleccionadoA" : "button ItemNoSeleccionadoA"}
                            onClick={() => this.agregarIdioma("Domingo")}
                            style={{ width: '72px', height: '32px', margin: '10px' }}
                        >Domingo</button>
                    </div>                    
                </div>
            </div>
        )
    }
}
