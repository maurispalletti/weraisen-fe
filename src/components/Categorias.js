import React, { Component } from 'react';
import './Categorias.css';
import cultura from '../icons/cultura.svg'
import shopping from '../icons/shopping.svg'
import montañana from '../icons/climbing.svg'
import cafe from '../icons/coffee.svg'
import deporte from '../icons/basketball.svg'

export default class Categorias extends Component {
    state = {
        elegida: "",
     
    }

    render() {
        console.log(this.state.elegida);
        return (
            <div>
                <div class="col-xs-12" className="Container">
                    <div class="fila">
                    <div className={this.state.elegida === "deportes" ? "ItemSeleccionado" : "ItemNoSeleccionado"} > 
                        
                        <img alt={"Activity"} src={deporte} onClick={() => this.setState({ elegida: "deportes"})} />
                        <h6 className="letra">DEPORTES</h6>
                    </div>
                    <div className={this.state.elegida === "aventura y aire libre" ? "ItemSeleccionado" : "ItemNoSeleccionado"}>

                        <img alt={"Activity"} src={montañana} onClick={() => this.setState({ elegida: "aventura y aire libre" })} />

                        <h6 className="letra">AVENTURA Y AIRE LIBRE</h6>


                    </div>
                    </div>
                    <div class="fila">
                    <div className={this.state.elegida === "cultura" ? "ItemSeleccionado" : "ItemNoSeleccionado"}>

                        <img alt={"Activity"} src={cultura} onClick={() => this.setState({ elegida: "cultura" })} />
                        <h6 className="letra">CULTURA</h6>
                    </div>
                    <div className={this.state.elegida === "shopping" ? "ItemSeleccionado" : "ItemNoSeleccionado"}>

                    <img alt={"Activity"} src={shopping} onClick={() => this.setState({ elegida: "shopping" })} />
                        <h6 className="letra">SHOPPING</h6>
                    </div>

                    <div className={this.state.elegida === "gastronomia y vida nocturna" ? "ItemSeleccionado" : "ItemNoSeleccionado"}>
                     
                        <img alt={"Activity"} src={cafe} onClick={() => this.setState({ elegida: "gastronomia y vida nocturna" })} />
                        <h6 className="letra">
                                GASTRONOMÍA Y VIDA NOCTURNA</h6>

                    
                        </div>
                    </div>
                    </div>
                    <h4>Categoría seleccionada: {this.state.elegida}</h4>
                </div>
             
         
        )


    }


}



