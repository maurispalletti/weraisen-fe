import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { Label } from 'semantic-ui-react';

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

let chartConfigs2019;
let chartConfigs2020;
let chartConfigs2021;



class GraficoNewUserPerMonth extends React.Component {

	state = {
		option2019: false,
		option2020: true,
		option2021: false,
		loading: true,
	}
	async componentDidMount() {
		this.renderGraficos();
	}
	renderGraficos = () => {
		console.log("***" + this.props.usersCreatedPerMonth)
		const { usersCreatedPerMonth } = this.props;

		const arrayCategories2020 = []
		const arrayCategories2019 = []
		const arrayCategories2021 = []

		const arrayLabelsG2020 = []
		const arrayLabelsT2020 = []

		const arrayLabelsG2021 = []
		const arrayLabelsT2021 = []

		const arrayLabelsG2019 = []
		const arrayLabelsT2019 = []


		for (let index = 0; index < usersCreatedPerMonth.length; index++) {
			const user = usersCreatedPerMonth[index];

			if (user.year == 2020 && user.guide == true) {
				arrayCategories2020.push(user.category)
				arrayLabelsG2020.push({ value: user.value, color: "#F9AA68" })
			}
			else {
				if (user.year == 2020 && user.guide == false) {
					arrayCategories2020.push(user.category)
					arrayLabelsT2020.push({ value: user.value, color: "#9CD6AE" })
				}
			}
		}
		for (let index = 0; index < usersCreatedPerMonth.length; index++) {
			const user = usersCreatedPerMonth[index];

			if (user.year == 2019 && user.guide == true) {
				arrayCategories2019.push(user.category)
				arrayLabelsG2019.push({ value: user.value, color: "#F9AA68" })
			}
			else {
				if (user.year == 2019 && user.guide == false) {
					arrayCategories2019.push(user.category)
					arrayLabelsT2019.push({ value: user.value, color: "#9CD6AE" })
				}
			}

		}
		for (let index = 0; index < usersCreatedPerMonth.length; index++) {
			const user = usersCreatedPerMonth[index];

			if (user.year == 2021 && user.guide == true) {
				arrayCategories2021.push(user.category)
				arrayLabelsG2021.push({ value: user.value, color: "#F9AA68" })
			}
			else {
				if (user.year == 2021 && user.guide == false) {
					arrayCategories2021.push(user.category)
					arrayLabelsT2021.push({ value: user.value, color: "#9CD6AE" })
				}
			}

		}


		const arrayCategories2020SinDuplicados = Array.from(new Set(arrayCategories2020));
		const arrayCategories2019SinDuplicados = Array.from(new Set(arrayCategories2019));
		const arrayCategories2021SinDuplicados = Array.from(new Set(arrayCategories2021));
		const arrayCategory2020Final = []
		const arrayCategory2019Final = []
		const arrayCategory2021Final = []
		for (let index = 0; index < arrayCategories2020SinDuplicados.length; index++) {
			const element = arrayCategories2020SinDuplicados[index];
			arrayCategory2020Final.push({ label: element })
		}
		for (let index = 0; index < arrayCategories2019SinDuplicados.length; index++) {
			const element = arrayCategories2019SinDuplicados[index];
			arrayCategory2019Final.push({ label: element })
		}
		for (let index = 0; index < arrayCategories2021SinDuplicados.length; index++) {
			const element = arrayCategories2021SinDuplicados[index];
			arrayCategory2021Final.push({ label: element })
		}

		this.setState({ loading: false })
		
		chartConfigs2020 = {
			type: 'mscolumn2d',// The chart type
			width: '85%', // Width of the chart
			height: '85%', // Height of the chart
			dataFormat: 'json', // Data type
			dataSource: {
				"chart": {
					"caption": "Cantidad de usuarios creados por mes en el año 2020",
					"subCaption": "",
					"xAxisName": "Meses",
					"yAxisName": "Cantidad de usuarios",
					"theme": "fusion"
				},
				"categories": [
					{
						"category": arrayCategory2020Final
					}
				],
				"dataset": [
					{
						"seriesname": "Turistas",
						"color": "#9CD6AE",
						"data": arrayLabelsT2020
					},
					{
						"seriesname": "Guías",
						"color": "#F9AA68",
						"data": arrayLabelsG2020
					}
				]

			}
		};
		chartConfigs2019 = {
			type: 'mscolumn2d',// The chart type
			width: '85%', // Width of the chart
			height: '85%', // Height of the chart
			dataFormat: 'json', // Data type
			dataSource: {
				"chart": {
					"caption": "Cantidad de usuarios creados por mes en el año 2019",
					"subCaption": "",
					"xAxisName": "Meses",
					"yAxisName": "Cantidad de usuarios",
					"theme": "fusion"
				},
				"categories": [
					{
						"category": arrayCategory2019Final
					}
				],
				"dataset": [
					{
						"seriesname": "Turistas",
						"color": "#9CD6AE",
						"data": arrayLabelsT2019
					},
					{
						"seriesname": "Guías",
						"color": "#F9AA68",
						"data": arrayLabelsG2019
					}
				]

			}
		};

		chartConfigs2021 = {
			type: 'mscolumn2d',// The chart type
			width: '85%', // Width of the chart
			height: '85%', // Height of the chart
			dataFormat: 'json', // Data type
			dataSource: {
				"chart": {
					"caption": "Cantidad de usuarios creados por mes en el año 2021",
					"subCaption": "",
					"xAxisName": "Meses",
					"yAxisName": "Cantidad de usuarios",
					"theme": "fusion"
				},
				"categories": [
					{
						"category": arrayCategory2021Final
					}
				],
				"dataset": [
					{
						"seriesname": "Turistas",
						"color": "#9CD6AE",
						"data": arrayLabelsT2021
					},
					{
						"seriesname": "Guías",
						"color": "#F9AA68",
						"data": arrayLabelsG2021
					}
				]

			}
		};

	}
	

	render() {
		if (this.state.loading) {
			return(
				<div style={{ alignItems: "center", padding: "auto" }}>
			<div className="SeccionGrafico">
				Cargando gráfico
			</div>
			</div>
			)}else{

		return (

			<div style={{ alignItems: "center", padding: "auto" }}>
				<div className="container-fluid" style={{ boxSizing: "border-box" }}>
					<div className="SeccionGrafico" >
						{this.state.option2019 && <ReactFC style={{ float: "left" }} {...chartConfigs2019} />}
						{this.state.option2020 && <ReactFC style={{ float: "left" }} {...chartConfigs2020} />}
						{this.state.option2021 && <ReactFC style={{ float: "left" }} {...chartConfigs2021} />}
					</div>
					<div className="SeccionFiltros">
						<div class="dropdown">
							<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								Seleccioná el año
                                    </button>
							<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
								<a class="dropdown-item" onClick={() => this.setState({ option2019: true, option2020: false, option2021: false })}>2019</a>
								<a class="dropdown-item" onClick={() => this.setState({ option2020: true, option2019: false, option2021: false })}>2020</a>
								<a class="dropdown-item" onClick={() => this.setState({ option2021: true, option2019: false, option2020: false })}>2021</a>
							</div>
						</div>
					</div>
				</div>
			</div>

		);}
	}
}




export default GraficoNewUserPerMonth