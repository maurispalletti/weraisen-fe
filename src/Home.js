import React, { Component } from 'react';
import Header from './components/Header';
import { Fragment } from 'react';
import CardGuiaHome from './components/Card_Guia_Home';
import userServices from './services/userServices';
import fotoFer from '../src/Imagenes_Alvo/Fer.png';
import fotoLucre from '../src/Imagenes_Alvo/Lucre.png';
import fotoLu from '../src/Imagenes_Alvo/Lu.png';

class Home extends Component {
	state = {
		guias: [],
		ciudades: [],
		initialValues: null,
	}

	getProfile = async () => {
		try {
			const userId = localStorage.getItem("userId");
			if (userId) {
				const response = await userServices.getProfile(userId)
				console.log(response.data);
				return response.data;

			} else {
				this.setState({ notLoggedInUser: true })
			}
		} catch (error) {
			console.error(`There was an error trying to get the profile`)
		}
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
		} = await this.getProfile()

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
				{ imagen: fotoFer, nombre: 'Fernando', edad: '5 estrellas', detalle: '"Hola me encanta el futbol, ofrezco mi experiencia en tours deportivos y también en deporte como tenis y paddle."'},
				{ imagen: fotoLucre, nombre: 'Lucrecia', edad: '4 estrellas', detalle: '"Mis salidas se centran cultura y deportes. A su vez, podremos practicar inglés, si así lo deseas."' },
				{ imagen: fotoLu, nombre: 'Luciana', edad: '5 estrellas', detalle: '"Soy estudiante de turismo, me apasiona conocer otras culturas. Yo te muestro la mía y vos me contas la tuya, te parece?🥰."' },
			],
			ciudades: [
				{ imagen: "https://elplanetaurbano.com/wp-content/uploads/2017/06/Puerto-madero-2.jpg", nombre: 'Buenos Aires' },
				{ imagen: "https://s.libertaddigital.com/2018/03/09/cordoba_argentina01.jpg", nombre: 'Córdoba' },
				{ imagen: "https://latecla-repos-dgf.aplinews.com/archivos/noticias/fotografias/79032_3.jpg", nombre: 'Mar del Plata' },

			], initialValues
		});
	}

	mostrarGuias = () => {
		const guias = this.state.guias;
		if (guias.length === 0) return null;

		return (
			<React.Fragment>
				<div className="container-fluid">
					<div className="card-columns">
						{guias.map((guia, index) => (
							<CardGuiaHome
								key={index}
								guia={guia}
							/>
						))}
					</div>
				</div>
			</React.Fragment>
		)
	}

	mostrarCiudades = () => {
		const ciudades = this.state.ciudades;
		return (
			<React.Fragment>
				<div className="container-fluid">
					<div className="card-columns">
						{ciudades.map((cuidad, index) => (
							<CardGuiaHome
								key={index}
								guia={cuidad}
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
					<div className="container-fluid">
						<h2 style={{ marginTop: '20px' }}>¡Hola, {this.state.initialValues.firstName}!</h2>
						<div className='m-auto' style={{ paddingLeft: "10px", peddingRight: "10px" }}>
							<h4 style={{ lineHeight: 1.5, marginLeft: "10px" }}>Encontrá a tu guía ideal para que te acompañe en tu recorrido y así vivir una experiencia única</h4>
						</div>
						<div className="" style={{ alignItems: "center", paddingTop: '10px' }}>
							<a href="/search"><input type="submit" className="btn-primero" value="Comenzá tu experiencia" style={{ display: "block", margin: "auto" }} />
							</a></div>
						<hr />
						<div className='ml-auto'>
							<h3 style={{ marginTop: '20px' }}>Guias con mejores puntuaciones</h3>
						</div>
						<hr />
						<div className="bs-docs-section">
							{this.mostrarGuias()}
						</div>
						<hr />
						<div className='ml-auto'>
							<h3 >Ciudades más visitadas</h3>
						</div>

						<hr />
						<div className="bs-docs-section">
							{this.mostrarCiudades()}
						</div>
					</div>
				</Fragment>
			);
		} else {
			return null
		}
	}
}
export default Home;