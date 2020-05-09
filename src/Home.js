import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Fragment } from 'react';
import userServices from './services/userServices'
import Card from './components/Card';
import Card_Guia from './components/Card_Guia';
import charizard from './Imagenes_Alvo/006.png'
import jolteon from './Imagenes_Alvo/135.png'
import Aerodactyl from './Imagenes_Alvo/142.png'
import a from './Imagenes_Alvo/150.png'
import b from './Imagenes_Alvo/335.png'
import c from './Imagenes_Alvo/405.png'
import d from './Imagenes_Alvo/697.png'
import e from './Imagenes_Alvo/212.png'
import GuideCard from './components/GuideCard';
import Card_GuiaResultados from './components/Card_GuiaResultados';

class Home extends Component {

    state = {
        guias: [],
        initialValues: null
    }

    //apenas se carga el componente se ejecuta este metodo
    async componentDidMount() {

        const {
            firstName,
            lastName,
            age,
            identification,
            gender,
            city,
            email,
            isActiveGuide,
            knowledge,
        } = await this.getProfile()

        console.log(`isActiveGuide`)
        console.log(isActiveGuide)

        console.log(`knowledge`)
        console.log(knowledge)

        const initialValues = {
            firstName,
            lastName,
            age,
            identification,
            gender,
            city,
            email
        }

        this.setState({
            guias: [
                { imagen: "/static/media/006.6ec096f6.png", nombre: 'Charizard', edad: 22, detalle: 'Charizard se dedica a volar por los cielos en busca de oponentes fuertes. Echa fuego por la boca y es capaz de derretir cualquier cosa. No obstante, si su rival es más débil que él, no usará este ataque.' },
                { imagen: "/static/media/135.395d85ca.png", nombre: 'Jolteon', edad: 26, detalle: 'Las células de Jolteon generan un nivel bajo de electricidad, cuya intensidad aumenta con la electricidad estática que acumula en un pelaje formado por agujas cargadas de electricidad. Esta característica le permite lanzar rayos.' },
                { imagen: "/static/media/142.20af8197.png", nombre: 'Aerodactyl', edad: 22, detalle: 'Los orígenes de Aerodactyl datan de la era de los dinosaurios. Se regeneró a partir de material genético contenido en ámbar. Se supone que fue el amo de los cielos en épocas pasadas.' },
                { imagen: "/static/media/150.831874fd.png", nombre: 'Mewtwo', edad: 22, detalle: 'Mewtwo fue creado por manipulación genética. Pero, a pesar de que el hombre creó su cuerpo, dotar a Mewtwo de un corazón compasivo quedó en el olvido.' },
                { imagen: "/static/media/335.97fe6742.png", nombre: 'Zangoose', edad: 22, detalle: 'Los ecos del combate mantenido con su rival más feroz, Seviper, resuenan aún en cada célula de Zangoose. Este Pokémon esquiva los ataques con auténtica destreza.' },
                { imagen: "/static/media/405.614366ae.png", nombre: 'Luxray', edad: 22, detalle: 'Cuando sus ojos brillan como el oro, puede ver presas escondidas, incluso detrás de un muro.' },
                { imagen: "/static/media/697.b2979631.png", nombre: 'Tyrantrum', edad: 22, detalle: 'En el mundo antiguo en el que habitaba no tenía rivales gracias a sus mandíbulas, con las que podría despedazar con facilidad gruesas placas de acero.' },
                { imagen: "/static/media/212.505afb8e.png", nombre: 'Scizor', edad: 22, detalle: 'Scizor tiene un cuerpo duro como el acero que no es fácil de alterar con ningún ataque común. Este Pokémon bate las alas para regular la temperatura corporal.' }



            ], initialValues, isActiveGuide, knowledge

        });

    }

    getProfile = async () => {
        try {
            const userId = localStorage.getItem("userId");
            if (userId) {
                const response = await userServices.getProfile(userId)

                return response.data;

            } else {
                this.setState({ notLoggedInUser: true })
            }
        } catch (error) {
            console.error(`There was an error trying to get the profile`)
        }
    }


    mostrarGuias = () => {
        const guias = this.state.guias;
        if (guias.length === 0) return null;

        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="card-columns">
                        {guias.map(guia => (
                            <Card_Guia

                                guia={guia}
                            />
                        ))}

                    </div>


                </div>
            </React.Fragment>
        )
    }

    render() {
        if (this.state.initialValues) {
            return (
                <Fragment>
                    <Header />
                    <div className="container-fluid" style={{ marginTop: '15px', marginBottom: '15px' }}>

                        {/* <h2>Hola {this.state.initialValues.firstName}!</h2> */}
                        <h2>Hola {this.state.initialValues.firstName}!</h2>
                        {/* <h4>Comenzá tu experiencia buscando al guía ideal haciendo <a href="#" className="stretched-link">clic acá</a></h4> */}
                        <hr />
                        <h4>Guías con mejor Reputación</h4>
                        <hr />
                        <div className="bs-docs-section">


                            {this.mostrarGuias()}

                        </div>
                        <hr />
                        <h4>Lugares más visitados</h4>
                        <hr />
                    </div>
                    {/* <Footer /> */}
                </Fragment>
            );
        }
        else {
            return null
        }
    }
}
export default Home;