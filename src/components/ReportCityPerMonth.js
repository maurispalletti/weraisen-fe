import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

let chartConfigs2019;
let chartConfigs2020;
let chartConfigs2021;

class GraficoCityPerMatch extends React.Component {
	state = {
		option2019: false,
		option2020: true,
		option2021: false,
		loading: true,
	}

	componentDidMount() {
		this.renderGraficos();
	}
	renderGraficos = () => {
		console.log(this.props.citiesPerMatches)
		const { citiesPerMatches } = this.props;

		const arrayCategories2019 = []
		const arrayLabels2019 = []
		const arrayCategories2020 = []
		const arrayLabels2020 = []
		const arrayCategories2021 = []
		const arrayLabels2021 = []

		for (let index = 0; index < citiesPerMatches.length; index++) {
			const ciudad = citiesPerMatches[index];
			if (ciudad.year == 2019) {

				arrayCategories2019.push({ label: ciudad.category })
				arrayLabels2019.push({ value: ciudad.value, color: "#9CD6AE" })
			} else {
				if (ciudad.year == 2020) {
					arrayCategories2020.push({ label: ciudad.category })
					arrayLabels2020.push({ value: ciudad.value, color: "#9CD6AE" })
				} else {
					arrayCategories2021.push({ label: ciudad.category })
					arrayLabels2021.push({ value: ciudad.value, color: "#9CD6AE" })
				}
			}
		}

		this.setState({ loading: false })

		chartConfigs2019 = {
			type: 'mscolumn2d',// The chart type
			width: '85%', // Width of the chart
			height: '50%', // Height of the chart
			dataFormat: 'json', // Data type
			dataSource: {
				"chart": {
					"caption": "Cantidad de encuentros por ciudad durante el 2019",
					"subCaption": "",
					"xAxisName": "Ciudades",
					"yAxisName": "Cantidad de Encuentros por ciudad",
					"theme": "fusion"
				},
				"categories": [
					{
						"category": arrayCategories2019
					}
				],
				"dataset": [
					{
						"seriesname": "Ciudades elegidas",
						"color": "#9CD6AE",
						"data": arrayLabels2019
					},
				]
			}
		};
		chartConfigs2020 = {
			type: 'mscolumn2d',// The chart type
			width: '85%', // Width of the chart
			height: '50%', // Height of the chart
			dataFormat: 'json', // Data type
			dataSource: {
				"chart": {
					"caption": "Cantidad de encuentros por ciudad durante el 2020",
					"subCaption": "",
					"xAxisName": "Ciudades",
					"yAxisName": "Cantidad de Encuentros por ciudad",
					"theme": "fusion"
				},
				"categories": [
					{
						"category": arrayCategories2020
					}
				],
				"dataset": [
					{
						"seriesname": "Ciudades elegidas",
						"color": "#9CD6AE",
						"data": arrayLabels2020
					},
				]
			}
		};

		chartConfigs2021 = {
			type: 'mscolumn2d',// The chart type
			width: '85%', // Width of the chart
			height: '50%', // Height of the chart
			dataFormat: 'json', // Data type
			dataSource: {
				"chart": {
					"caption": "Cantidad de encuentros por ciudad durante el 2021",
					"subCaption": "",
					"xAxisName": "Ciudades",
					"yAxisName": "Cantidad de Encuentros por ciudad",
					"theme": "fusion"
				},
				"categories": [
					{
						"category": arrayCategories2021
					}
				],
				"dataset": [
					{
						"seriesname": "Ciudades elegidas",
						"color": "#9CD6AE",
						"data": arrayLabels2021
					},
				]
			}
		};
		
	}



	render() {
		
		if (this.state.loading) {
			return(
				<div style={{ alignItems: "center", padding: "auto" }}>
			<div className="SeccionGrafico">
				Cargando gráfico...
			</div>
			</div>
			)}else{
		return (

			<div style={{ alignItems: "center", padding: "auto" }}>
				<div className="container-fluid" style={{ boxSizing: "border-box" }}>
					<div className="SeccionGrafico" >
						{this.state.option2020 && <ReactFC style={{ float: "left" }} {...chartConfigs2020} />}
						{this.state.option2021 && <ReactFC style={{ float: "left" }} {...chartConfigs2021} />}
						{this.state.option2019 && <ReactFC style={{ float: "left" }} {...chartConfigs2019} />}
					</div>
					<div className="SeccionFiltros">
						<div class="dropdown">
							<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								Seleccioná el año
				  </button>
							<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
								<a class="dropdown-item" onClick={() => this.setState({ option2019: true, option2020: false, option2021: false })}>2019</a>
								<a class="dropdown-item" onClick={() => this.setState({ option2020: true, option2019: false, option2021: false })}>2020</a>
								<a class="dropdown-item" onClick={() => this.setState({ option2021: true, option2020: false, option2019: false })}>2021</a>
							</div>
						</div>
					</div>
				</div>
			</div>

		);}
	}


}

export default GraficoCityPerMatch