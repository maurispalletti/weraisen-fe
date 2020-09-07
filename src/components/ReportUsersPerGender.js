import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { isGetAccessor } from 'typescript';

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);


let chartConfigsGe2019;
let chartConfigsGe2020;
let chartConfigsGe2021;
let chartConfigsGui2019;
let chartConfigsGui2020;
let chartConfigsGui2021;
let chartConfigsCom2019;
let chartConfigsCom2020;
let chartConfigsCom2021;
class GraficoUsersPerGender extends React.Component {
	state = {
		rbGenero: true,
		rbGuia: false,
		rbCombinado: false,
		option2019: false,
		option2020: true,
	}
	renderGraficos = () => {
		console.log(this.props.usersPerGender)
		const { usersPerGender } = this.props;


		const arrayDataGe2019 = []
		const arrayDataGe2020 = []
		const arrayDataGe2021 = []
		const arrayDataGui2019 = []
		const arrayDataGui2020 = []
		const arrayDataGui2021 = []
		const arrayDataCom2019 = []
		const arrayDataCom2020 = []
		const arrayDataCom2021 = []
		for (let index = 0; index < usersPerGender.length; index++) {
			const gender = usersPerGender[index];

			if (gender.year == 2019 && gender.id == "genero") {
				arrayDataGe2019.push({ label: gender.label, value: gender.value, color: gender.color })

			} else {
				if (gender.year == 2020 && gender.id == "genero") {
					arrayDataGe2020.push({ label: gender.label, value: gender.value, color: gender.color })
				} else {
					if (gender.year == 2021 && gender.id == "genero") {
						arrayDataGe2021.push({ label: gender.label, value: gender.value, color: gender.color })
					}
				}
			}

		}
		for (let i = 0; i < usersPerGender.length; i++) {
			const mode = usersPerGender[i];
			if (mode.year == 2019 && mode.id == "modo") {
				arrayDataGui2019.push({ label: mode.label, value: mode.value, color: mode.color })
			} else {
				if (mode.year == 2020 && mode.id == "modo") {
					arrayDataGui2020.push({ label: mode.label, value: mode.value, color: mode.color })
				} else {
					if (mode.year == 2021 && mode.id == "modo") {
						arrayDataGui2021.push({ label: mode.label, value: mode.value, color: mode.color })
					}
				}
			}

		}
		for (let j = 0; j < usersPerGender.length; j++) {
			const comb = usersPerGender[j];
			if (comb.year == 2019 && comb.id == "combinado") {
				arrayDataCom2019.push({ label: comb.label, value: comb.value, color: comb.color })
			} else {
				if (comb.year == 2020 && comb.id == "combinado") {
					arrayDataCom2020.push({ label: comb.label, value: comb.value, color: comb.color })
				} else {
					if (comb.year == 2021 && comb.id == "combinado") {
						arrayDataCom2021.push({ label: comb.label, value: comb.value, color: comb.color })
					}
				}

			}

			chartConfigsGe2019 = {
				type: 'pie2d',// The chart type
				width: '85%', // Width of the chart
				height: '50%', // Height of the chart
				showlegend: "1",
				showpercentvalues: "1",
				legendposition: "bottom",
				usedataplotcolorforlabels: "1",
				dataFormat: 'json', // Data type
				dataSource: {
					"chart": {
						"caption": "Porcentaje de usuarios creados por género en el 2019 ",
						"subCaption": "",
						"xAxisName": "Género",
						"yAxisName": "Cantidad de usuarios",
						"theme": "fusion",
						"plottooltext": "<b>$percentValue</b> de usuarios de Género $label "
					},

					data: arrayDataGe2019
				}
			};
			chartConfigsGe2020 = {
				type: 'pie2d',// The chart type
				width: '85%', // Width of the chart
				height: '50%', // Height of the chart
				showlegend: "1",
				showpercentvalues: "1",
				legendposition: "bottom",
				usedataplotcolorforlabels: "1",
				dataFormat: 'json', // Data type
				dataSource: {
					"chart": {
						"caption": "Porcentaje de usuarios creados por género en el 2020 ",
						"subCaption": "",
						"xAxisName": "Género",
						"yAxisName": "Cantidad de usuarios",
						"theme": "fusion",
						"plottooltext": "<b>$percentValue</b> de usuarios de Género $label "
					},

					data: arrayDataGe2020
				}
			};
			chartConfigsGe2021 = {
				type: 'pie2d',// The chart type
				width: '85%', // Width of the chart
				height: '50%', // Height of the chart
				showlegend: "1",
				showpercentvalues: "1",
				legendposition: "bottom",
				usedataplotcolorforlabels: "1",
				dataFormat: 'json', // Data type
				dataSource: {
					"chart": {
						"caption": "Porcentaje de usuarios por género en el 2021",
						"subCaption": "",
						"xAxisName": "Tipo de usuario",
						"yAxisName": "Cantidad de usuarios",
						"theme": "fusion",
						"plottooltext": "<b>$percentValue</b> de usuarios son $label "
					},

					data: arrayDataGe2021
				}
			};
			chartConfigsGui2019 = {
				type: 'pie2d',// The chart type
				width: '85%', // Width of the chart
				height: '50%', // Height of the chart
				showlegend: "1",
				showpercentvalues: "1",
				legendposition: "bottom",
				usedataplotcolorforlabels: "1",
				dataFormat: 'json', // Data type
				dataSource: {
					"chart": {
						"caption": "Porcentaje de usuarios creados por tipo de usuario en el 2019 ",
						"subCaption": "",
						"xAxisName": "Guía/Turista",
						"yAxisName": "Cantidad de usuarios",
						"theme": "fusion",
						"plottooltext": "<b>$percentValue</b> de usuarios  $label "
					},

					data: arrayDataGui2019
				}
			};
			chartConfigsGui2020 = {
				type: 'pie2d',// The chart type
				width: '85%', // Width of the chart
				height: '50%', // Height of the chart
				showlegend: "1",
				showpercentvalues: "1",
				legendposition: "bottom",
				usedataplotcolorforlabels: "1",
				dataFormat: 'json', // Data type
				dataSource: {
					"chart": {
						"caption": "Porcentaje de usuarios creados por tipo de usuario en el 2020 ",
						"subCaption": "",
						"xAxisName": "Guía/Turista",
						"yAxisName": "Cantidad de usuarios",
						"theme": "fusion",
						"plottooltext": "<b>$percentValue</b> de usuarios  $label "
					},

					data: arrayDataGui2020
				}
			};
			chartConfigsGui2021 = {
				type: 'pie2d',// The chart type
				width: '85%', // Width of the chart
				height: '50%', // Height of the chart
				showlegend: "1",
				showpercentvalues: "1",
				legendposition: "bottom",
				usedataplotcolorforlabels: "1",
				dataFormat: 'json', // Data type
				dataSource: {
					"chart": {
						"caption": "Porcentaje de usuarios creados por tipo de usuario en el 2021 ",
						"subCaption": "",
						"xAxisName": "Guía/Turista",
						"yAxisName": "Cantidad de usuarios",
						"theme": "fusion",
						"plottooltext": "<b>$percentValue</b> de usuarios  $label "
					},

					data: arrayDataGui2021
				}
			};
			chartConfigsCom2019 = {
				type: 'pie2d',// The chart type
				width: '85%', // Width of the chart
				height: '50%', // Height of the chart
				showlegend: "1",
				showpercentvalues: "1",
				legendposition: "bottom",
				usedataplotcolorforlabels: "1",
				dataFormat: 'json', // Data type
				dataSource: {
					"chart": {
						"caption": "Porcentaje de usuarios creados por tipo de usuario y género en el 2019 ",
						"subCaption": "",
						"xAxisName": "Guía/Turista",
						"yAxisName": "Cantidad de usuarios",
						"theme": "fusion",
						"plottooltext": "<b>$percentValue</b> de usuarios  $label "
					},

					data: arrayDataCom2019
				}
			};
			chartConfigsCom2020 = {
				type: 'pie2d',// The chart type
				width: '85%', // Width of the chart
				height: '50%', // Height of the chart
				showlegend: "1",
				showpercentvalues: "1",
				legendposition: "bottom",
				usedataplotcolorforlabels: "1",
				dataFormat: 'json', // Data type
				dataSource: {
					"chart": {
						"caption": "Porcentaje de usuarios creados por tipo de usuario en el 2020 ",
						"subCaption": "",
						"xAxisName": "Guía/Turista",
						"yAxisName": "Cantidad de usuarios",
						"theme": "fusion",
						"plottooltext": "<b>$percentValue</b> de usuarios  $label "
					},

					data: arrayDataCom2020
				}
			};
			chartConfigsCom2021 = {
				type: 'pie2d',// The chart type
				width: '85%', // Width of the chart
				height: '50%', // Height of the chart
				showlegend: "1",
				showpercentvalues: "1",
				legendposition: "bottom",
				usedataplotcolorforlabels: "1",
				dataFormat: 'json', // Data type
				dataSource: {
					"chart": {
						"caption": "Porcentaje de usuarios creados por tipo de usuario en el 2021 ",
						"subCaption": "",
						"xAxisName": "Guía/Turista",
						"yAxisName": "Cantidad de usuarios",
						"theme": "fusion",
						"plottooltext": "<b>$percentValue</b> de usuarios  $label "
					},

					data: arrayDataCom2021
				}
			};
		}
	}
	async componentDidMount() {
		this.renderGraficos();
	}


	render() {

		return (

			<div style={{ alignContent: "center", padding: "auto" }}>
				<div className="container-fluid" style={{ boxSizing: "border-box" }}>
					<div className="SeccionGrafico" >
						{this.state.option2019 && this.state.rbGenero && <ReactFC style={{ float: "left" }} {...chartConfigsGe2019} />}
						{this.state.option2019 && this.state.rbGuia && <ReactFC style={{ float: "left" }} {...chartConfigsGui2019} />}
						{this.state.option2019 && this.state.rbCombinado && <ReactFC style={{ float: "left" }} {...chartConfigsCom2019} />}
						{this.state.option2020 && this.state.rbGenero && <ReactFC style={{ float: "left" }} {...chartConfigsGe2020} />}
						{this.state.option2020 && this.state.rbGuia && <ReactFC style={{ float: "left" }} {...chartConfigsGui2020} />}
						{this.state.option2020 && this.state.rbCombinado && <ReactFC style={{ float: "left" }} {...chartConfigsCom2020} />}
						{this.state.option2021 && this.state.rbGenero && <ReactFC style={{ float: "left" }} {...chartConfigsGe2021} />}
						{this.state.option2021 && this.state.rbGuia && <ReactFC style={{ float: "left" }} {...chartConfigsGui2021} />}
						{this.state.option2021 && this.state.rbCombinado && <ReactFC style={{ float: "left" }} {...chartConfigsCom2021} />}
					</div>
					<div className="SeccionFiltros" style={{ display: "inline-flex", alignContent: "center", padding: "auto", position:"relative" }}>
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
						<div class="dropdown">
							<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								Seleccioná la opción
                                    </button>
							<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
								<a class="dropdown-item" onClick={() => this.setState({ rbGenero: true, rbGuia: false, rbCombinado: false })}>Por género</a>
								<a class="dropdown-item" onClick={() => this.setState({ rbGuia: true, rbGenero: false, rbCombinado: false })}>Por modo guía/turista</a>
								<a class="dropdown-item" onClick={() => this.setState({ rbCombinado: true, rbGenero: false, rbGuia: false })}>Combinado</a>
							</div>
						</div>
					</div>
				</div>
			</div>

		);
	}
}

export default GraficoUsersPerGender