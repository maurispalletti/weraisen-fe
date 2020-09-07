import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

let chartConfigs2019;
let chartConfigs2020;
let chartConfigs2021;

class Grafico extends React.Component {
	state = {
		option2019: false,
		option2020: true,
		option2021: false,
	}

	renderGraficos = () => {
		console.log(this.props.matchesPerMonth)

		const { matchesPerMonth } = this.props;

		const arrayCategories2020 = []
		const arrayLabels2020 = []
		const arrayCategories2021 = []
		const arrayLabels2021 = []
		const arrayCategories2019 = []
		const arrayLabels2019 = []

		for (let index = 0; index < matchesPerMonth.length; index++) {
			const match = matchesPerMonth[index];

			if (match.year == 2020) {
				arrayCategories2020.push({ label: match.category })
				arrayLabels2020.push({ value: match.value, color: "#9CD6AE" })
			} else {
				if (match.year == 2021) {
					arrayCategories2021.push({ label: match.category })
					arrayLabels2021.push({ value: match.value, color: "#9CD6AE" })
				} else {
					arrayCategories2019.push({ label: match.category })
					arrayLabels2019.push({ value: match.value, color: "#9CD6AE" })
				}
			}
			chartConfigs2020 = {
				type: 'mscolumn2d',// The chart type
				width: '85%', // Width of the chart
				height: '50%', // Height of the chart
				dataFormat: 'json', // Data type
				dataSource: {
					"chart": {
						"caption": "Cantidad de encuentros creados por mes en el año 2020",
						"subCaption": "",
						"xAxisName": "Meses",
						"yAxisName": "Número de encuentros",
						"theme": "fusion"
					},
					"categories": [
						{
							"category": arrayCategories2020
						}
					],
					"dataset": [
						{
							"seriesname": "Cantidad de Encuentros",
							"color": "#9CD6AE",
							"data": arrayLabels2020
						}

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
						"caption": "Cantidad de encuentros creados por mes en el año 2021",
						"subCaption": "",
						"xAxisName": "Meses",
						"yAxisName": "Número de encuentros",
						"theme": "fusion"
					},
					"categories": [
						{
							"category": arrayCategories2021
						}
					],
					"dataset": [
						{
							"seriesname": "Cantidad de Encuentros",
							"color": "#9CD6AE",
							"data": arrayLabels2021
						}

					]
				}
			};
			chartConfigs2019 = {
				type: 'mscolumn2d',// The chart type
				width: '85%', // Width of the chart
				height: '50%', // Height of the chart
				dataFormat: 'json', // Data type
				dataSource: {
					"chart": {
						"caption": "Cantidad de encuentros creados por mes en el año 2019",
						"subCaption": "",
						"xAxisName": "Meses",
						"yAxisName": "Número de encuentros",
						"theme": "fusion"
					},
					"categories": [
						{
							"category": arrayCategories2019
						}
					],
					"dataset": [
						{
							"seriesname": "Cantidad de Encuentros",
							"color": "#9CD6AE",
							"data": arrayLabels2019
						}

					]
				}
			};
		}
	}
	async componentDidMount() {

		this.renderGraficos();

	}


	render() {

		return (

			<div style={{ alignItems: "center", padding: "auto" }}>
				<div className="container-fluid" style={{ boxSizing: "border-box" }}>
					<div className="SeccionGrafico" >
						{this.state.option2020 && <ReactFC style={{ float: "left" }} {...chartConfigs2020} />}
						{this.state.option2019 && <ReactFC style={{ float: "left" }} {...chartConfigs2019} />}
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
								<a class="dropdown-item" onClick={() => this.setState({ option2021: true, option2020: false, option2019: false })}>2021</a>
							</div>
						</div>
					</div>
				</div>
			</div>

		);


	}
}

export default Grafico