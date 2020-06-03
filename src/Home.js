import React, { Component } from 'react';
import Header from './components/Header';
import { Fragment } from 'react';
import CardGuiaHome from './components/Card_Guia_Home';
import userServices from './services/userServices';

class Home extends Component {
	state = {
		guias: [],
		ciudades:[],
		initialValues: null
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

		const  {
			firstName,
			lastName,
			age,
			identification,
			gender,
			city,
			email,
			// isActiveGuide,
			// knowledge,
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

console.log(initialValues);


		this.setState({
			guias: [
				{ imagen: "https://theluxonomist.es/wp-content/uploads/2019/11/autofoto.jpg", nombre: 'Mateo', edad: '22 años', detalle: '"Me encanta compartir mis ratos libres enseñándole mi ciudad a personas que la visitan. Son experiencias muy enriquecedoras."' },
				{ imagen: "https://media.istockphoto.com/photos/morning-selfie-picture-id935524698?k=6&m=935524698&s=612x612&w=0&h=qgz5rX_Qi9ATtffT0UcnIyCK94145Vi5XA7hY8rAX58=", nombre: 'Camila', edad: '26 años', detalle: '"Comenzar a usar WeRaisen fue la mejor decisión. No sólo conozco gente de otros lugares, sino que tengo la oportunidad de practicar mi inglés."' },
				{ imagen: "https://www.fujifilm.com.mx/productos/camaras_digitales/serie_x/xa10/features/img/page_02/pic_01.jpg", nombre: 'Anabella', edad: '28 años', detalle: '"Solía aburrirme mucho los domingos. Gracias a una amiga que me recomendó esta plataforma, cada domingo es una aventura distinta."' },
				
			],
			ciudades: [
				{ imagen: "https://elplanetaurbano.com/wp-content/uploads/2017/06/Puerto-madero-2.jpg", nombre: 'Buenos Aires'},
				{ imagen: "https://s.libertaddigital.com/2018/03/09/cordoba_argentina01.jpg", nombre: 'Córdoba'},
				{ imagen: "https://latecla-repos-dgf.aplinews.com/archivos/noticias/fotografias/79032_3.jpg", nombre: 'Mar del Plata'},
				
			],initialValues
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


				<h2 style={{marginTop: '20px'}}>¡Hola, {this.state.initialValues.firstName}!</h2>
				<div className='m-auto'>
				<h4>Comenzá tu experiencia buscando <a href="/search"><i style={{color:"#f9aa68"}}>al guía ideal</i> </a></h4>
				</div>
				<hr />
					<div className='ml-auto'>
						<h3 style={{marginTop: '20px'}}>Testimonios de guías</h3>
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