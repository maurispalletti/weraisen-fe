import React, { Component } from 'react';
import './Categorias.css';
import cultura from '../icons/cultura.svg'
import shopping from '../icons/shopping.svg'
import montañana from '../icons/climbing.svg'
import cafe from '../icons/coffee.svg'
import deporte from '../icons/basketball.svg'
import restaurant from '../icons/restaurant.svg'

export default class Categorias extends Component {
    state = {
        elegidas: [],

    }

    agregarCategoria(categoria) {

        let nueva = []
        let vieja = this.state.elegidas

        if (vieja.includes(categoria)) {
            const i = vieja.indexOf(categoria);

            if (i !== -1) {
                vieja.splice(i, 1);
            }
            nueva = vieja.slice(categoria)

        }
        else {
            nueva = [...vieja, categoria]
        }

        this.props.onCategoryChange(nueva);            
        this.setState(() => ({ elegidas: nueva }));

    }

    render() {
        return (
            <div>
                <div className="Container">

                    <div className="fila">
                        <div className={this.state.elegidas.length > 0 && this.state.elegidas.includes('deportes') ? "ItemSeleccionado" : "ItemNoSeleccionado"} onClick={() => this.agregarCategoria("deportes")}>
                            <img alt={"Activity"} src={deporte}  />
                            <h6 className="letra">DEPORTES</h6>
                        </div>

                        <div className={this.state.elegidas.length > 0 && this.state.elegidas.includes('aventura') ? "ItemSeleccionado" : "ItemNoSeleccionado"} onClick={() => this.agregarCategoria("aventura")}>
                            <img alt={"Activity"} src={montañana}  />
                            <h6 className="letra">AVENTURA Y AIRE LIBRE</h6>
                        </div>

                        <div className={this.state.elegidas.length > 0 && this.state.elegidas.includes('gastronomia') ? "ItemSeleccionado" : "ItemNoSeleccionado"} onClick={() => this.agregarCategoria("gastronomia")}>
                            <img alt={"Activity"} src={restaurant}  />
                            <h6 className="letra">GASTRONOMÍA</h6>
                        </div>
                    </div>
                    <div className="fila">
                        <div className={this.state.elegidas.length > 0 && this.state.elegidas.includes('cultura') ? "ItemSeleccionado" : "ItemNoSeleccionado"}  onClick={() => this.agregarCategoria("cultura")}>
                            <img alt={"Activity"} src={cultura} />
                            <h6 className="letra">CULTURA</h6>
                        </div>

                        <div className={this.state.elegidas.length > 0 && this.state.elegidas.includes('shopping') ? "ItemSeleccionado" : "ItemNoSeleccionado"} onClick={() => this.agregarCategoria("shopping")}>
                            <img alt={"Activity"} src={shopping}  />
                            <h6 className="letra">SHOPPING</h6>
                        </div>

                        <div className={this.state.elegidas.length > 0 && this.state.elegidas.includes('noche') ? "ItemSeleccionado" : "ItemNoSeleccionado"} onClick={() => this.agregarCategoria("noche")}>
                            <img alt={"Activity"} src={cafe}  />
                            <h6 className="letra">
                              VIDA NOCTURNA</h6>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
