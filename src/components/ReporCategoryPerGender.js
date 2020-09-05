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
	}
	async componentDidMount() {

		console.log("***" + this.props.categoriesPerGender)
		const { categoriesPerGender } = this.props;


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
		if (!this.state.rbGenero) {
			return (
				<div class="container-fluid">
					<ReactFC style={{ float: "left" }}
						{...chartConfigs1} />
					<fieldset class="form-group" >

						<div class="form-check">
							<label class="form-check-label" style={{ fontSize: "16px" }}>
								<input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" onChange={() => this.setState({ rbGenero: false })} checked={!this.state.rbGenero} />
								 Por cantidad de usuarios
								</label>
						</div>
						<div class="form-check">
							<label class="form-check-label" style={{ fontSize: "16px" }}>
								<input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2" onChange={() => this.setState({ rbGenero: true })} />
										Por género
								 </label>
						</div>
					</fieldset>

				</div>
			);
		} else {
			return (
				<div class="container-fluid">
					<ReactFC style={{ float: "left" }}{...chartConfigs2} />
					<fieldset class="form-group" >

						<div class="form-check">
							<label class="form-check-label" style={{ fontSize: "16px" }}>
								<input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" onChange={() => this.setState({ rbGenero: false })} checked={!this.state.rbGenero} />
								Por cantidad de usuarios
								</label>
						</div>
						<div class="form-check">
							<label class="form-check-label" style={{ fontSize: "16px" }}>
								<input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2" onChange={() => this.setState({ rbGenero: true })} checked={this.state.rbGenero} />
								Por género
								 </label>
						</div>
					</fieldset>

				</div>
			);
		}
	}


}

export default GraficoCategoryPerGender