import React, { Component } from 'react';
import bar from '../icons/cocktail.svg'
import fotografia from '../icons/camera.svg'
import cinema from '../icons/cinema.svg'
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
                <div className="ActivitiesSection">
                    <div onClick={() => this.setState({ elegida: "deportes" })} className="Activity">
                        <img alt={"Activity"} src={deporte} />
                        <h4 className="letra">DEPORTES</h4>

                    </div>
                  
                    <div onClick={() => this.setState({ elegida: "fotografias" })} className="Activity">
                        <img alt={"Activity"} src={fotografia} />
                        <h4 className="letra">
                            FOTOGRAFÍAS</h4>
                    </div>
                    <div onClick={() => this.setState({ elegida: "naturaleza" })} className="Activity">
                        <img alt={"Activity"} src={montañana} />
                        <h4 className="letra">NATURALEZA</h4>
                    </div>
                </div>
                <div className="ActivitiesSection">

                    <div onClick={() => this.setState({ elegida: "cafe" })} className="Activity">
                        <img alt={"Activity"} src={cafe} />
                        <h4 className="letra">CAFÉ</h4>
                    </div>

                    <div onClick={() => this.setState({ elegida: "espectaculos" })} className="Activity">

                        <img alt={"Activity"} src={cinema} />
                        <h4 className="letra">
                            ESPECTÁCULOS</h4>
                    </div>


                    <div onClick={() => this.setState({ elegida: "bares" })} className="Activity">
                        <img alt={"Activity"} src={bar} />
                        <h4 className="letra">
                            BARES</h4>
                    </div>
                </div>
                <h3>Categoría seleccionada: {this.state.elegida}</h3>
            </div>
        )


    }


}



