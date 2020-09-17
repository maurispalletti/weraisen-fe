import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

let chartConfigs1;
let chartConfigs2;

class GraficoCategoryPerGender extends React.Component {
	state = {
		rbGenero: false,
		loading:true,
	}
	async componentDidMount() {
		this.renderGraficos();
	}
	renderGraficos = () => {
		console.log("***" + this.props.categoriesPerGender)
		const { categoriesPerGender } = this.props;

this.setState({loading:false})
		chartConfigs1 = {
			type: 'mscolumn2d',// The chart type
			width: '85%', // Width of the chart
			height: '50%', // Height of the chart
			dataFormat: 'json', // Data type
			dataSource: {
				"chart": {
					"caption": "Cantidad de usuarios por categoría",
					"subCaption": "",
					"xAxisName": "Categorías",
					"yAxisName": "Cantidad de usuarios",
					"theme": "fusion",
				},
				"categories": [
					{
						"category": [
							{
								"label": categoriesPerGender[18].category
							},
							{
								"label": categoriesPerGender[19].category
							},
							{
								"label": categoriesPerGender[20].category
							},
							{
								"label": categoriesPerGender[21].category
							},
							{
								"label": categoriesPerGender[22].category
							},
							{
								"label": categoriesPerGender[23].category
							}
						]
					}
				],
				"dataset": [
					{
						"seriesname": "Cantidad de usuarios por categoría",
						"color": "#9CD6AE",
						"data": [
							{
								"value": categoriesPerGender[18].value,
								"color": "#9CD6AE"
							},
							{
								"value": categoriesPerGender[19].value,
								"color": "#9CD6AE"
							},
							{
								"value": categoriesPerGender[20].value,
								"color": "#9CD6AE"
							},
							{
								"value": categoriesPerGender[21].value,
								"color": "#9CD6AE"
							},
							{
								"value": categoriesPerGender[22].value,
								"color": "#9CD6AE"
							},
							{
								"value": categoriesPerGender[23].value,
								"color": "#9CD6AE"
							}


						]

					}
				]
			}
		};

		chartConfigs2 = {
			type: 'mscolumn2d',// The chart type
			width: '85%', // Width of the chart
			height: '50%', // Height of the chart
			dataFormat: 'json', // Data type
			dataSource: {
				"chart": {
					"caption": "Categorías elegidas por género",
					"subCaption": "",
					"xAxisName": "Categorías",
					"yAxisName": "Cantidad de usuarios",
					"theme": "fusion",
				},
				"categories": [
					{
						"category": [
							{
								"label": categoriesPerGender[0].category
							},
							{
								"label": categoriesPerGender[3].category
							},
							{
								"label": categoriesPerGender[6].category
							},
							{
								"label": categoriesPerGender[9].category
							},
							{
								"label": categoriesPerGender[12].category
							},
							{
								"label": categoriesPerGender[15].category
							}
						]
					}
				],
				"dataset": [
					{
						"seriesname": "Femenino",
						"color": "#9CD6AE",
						"data": [
							{
								"value": categoriesPerGender[0].value,
								"color": "#9CD6AE"
							},
							{
								"value": categoriesPerGender[3].value,
								"color": "#9CD6AE"
							},
							{
								"value": categoriesPerGender[6].value,
								"color": "#9CD6AE"
							},
							{
								"value": categoriesPerGender[9].value,
								"color": "#9CD6AE"
							},
							{
								"value": categoriesPerGender[12].value,
								"color": "#9CD6AE"
							},
							{
								"value": categoriesPerGender[15].value,
								"color": "#9CD6AE"
							}


						]

					},
					{
						"seriesname": "Masculino",
						"color": "#F9AA68",
						"data": [
							{
								"value": categoriesPerGender[1].value,
								"color": "#F9AA68"
							},
							{
								"value": categoriesPerGender[4].value,
								"color": "#F9AA68"
							},
							{
								"value": categoriesPerGender[7].value,
								"color": "#F9AA68"
							},
							{
								"value": categoriesPerGender[10].value,
								"color": "#F9AA68"
							},
							{
								"value": categoriesPerGender[13].value,
								"color": "#F9AA68"
							},
							{
								"value": categoriesPerGender[16].value,
								"color": "#F9AA68"
							}


						]
					},
					{
						"seriesname": "Otro",
						"color": "#EA4E41",
						"data": [
							{
								"value": categoriesPerGender[2].value,
								"color": "#EA4E41"
							},
							{
								"value": categoriesPerGender[5].value,
								"color": "#EA4E41"
							},
							{
								"value": categoriesPerGender[8].value,
								"color": "#EA4E41"
							},
							{
								"value": categoriesPerGender[11].value,
								"color": "#EA4E41"
							},
							{
								"value": categoriesPerGender[14].value,
								"color": "#EA4E41"
							},
							{
								"value": categoriesPerGender[17].value,
								"color": "#EA4E41"
							},


						]
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
			<div class="container-fluid">
				{!this.state.rbGenero && <ReactFC style={{ float: "left" }}{...chartConfigs1} />}
				{this.state.rbGenero && <ReactFC style={{ float: "left" }}{...chartConfigs2} />}
				<div className="SeccionFiltros">
					<div class="dropdown">
						<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Seleccioná la opción
                                    </button>
						<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
							<a class="dropdown-item" onClick={() => this.setState({ rbGenero: false })}>Por cantidad de usuarios</a>
							<a class="dropdown-item" onClick={() => this.setState({ rbGenero: true })}>Por género</a>

						</div>
					</div>
				</div>

			</div>
		);}


	}


}

export default GraficoCategoryPerGender