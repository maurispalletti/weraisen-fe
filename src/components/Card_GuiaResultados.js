import React from 'react';
import d from '../Imagenes_Alvo/150.png'

export default class Card_GuiaResultados extends React.Component {

    //const { imagen, nombre, edad, detalle } = props.guia;

    state =
        {
            verMas: false,
        }

    mostrarVerMas = () => {
        this.setState({ verMas: !this.state.verMas });
    }

    render() {

        return (

            <div className="card" >
                <img src={d} className="card-img-top img-fluid" alt="Card image cap" />
                <div className="card-body">
                    {/* Nombre y aprellido */}
                    <h5 className="card-title">Mewtwo</h5>
                    {/* Ciudad */}
                    <h6 className="card-subtitle mb-2 ">Ciudad: Cueva Celeste</h6>
                    <h6 className="card-subtitle mb-2 ">Edad: ?</h6>
                    <h6 className="card-subtitle mb-2 ">Idiomas: Español, Ingles</h6>

                    <div className="Filters" style={{ display: this.state.verMas ? 'block' : 'none' }}>
                        <h6 className="card-subtitle">Descripción:</h6>
                        <p className="card-text mb-2">Mewtwo fue creado por manipulación genética. Pero, a pesar de que el hombre creó su cuerpo, dotar a Mewtwo de un corazón compasivo quedó en el olvido.</p>
                        <h6 className="card-subtitle">Conocimientos:</h6>
                        <p className="card-text mb-2">Psiquico</p>
                    </div>

                    <div className=" mb-3">
                        <a className="verMas " onClick={() => this.mostrarVerMas()} >{this.state.verMas ? "Ver menos" : "Ver más"}</a>
                    </div>

                    <div className="container-flwid col text-center">
                        <input type="button" className="botonsGuideCard " value={"Iniciar chat"} onClick={() => this.goToChat()} />
                    </div>


                    {/* <input type="button" className="botonsGuideCard" value={"Iniciar chat"} onClick={() => this.goToChat()} /> */}
                    {/* <a href="#" className="btn btn-outline-primary btn-block" >Ver más...</a> */}
                </div>
            </div>
            // </div>


        );
    }
}

