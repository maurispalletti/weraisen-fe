import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

let chartConfigs1;
let chartConfigs2;
let chartConfigs3;
class GraficoUsersPerGender extends React.Component {
	state = {
		rbGenero: true,
		rbGuia: false,
		rbCombinado: false,

	}
	async componentDidMount() {
		console.log(this.props.usersPerGender)
		const { usersPerGender } = this.props;

		const arrayLabels = []
		const arrayValues = []
		for (let index = 0; index < usersPerGender.length; index++) {
			const gender = usersPerGender[index];



			arrayLabels.push({ value: gender.value })

		}

		chartConfigs1 = {
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
					"caption": "Porcentaje de usuarios por género",
					"subCaption": "",
					"xAxisName": "Género",
					"yAxisName": "Cantidad de usuarios",
					"theme": "fusion",
					"plottooltext": "<b>$percentValue</b> de usuarios de Género $label "
				},

				data: [
					{
						label: "Femenino",
						value: usersPerGender[6].value,
						"color": "#9CD6AE"
					},
					{
						label: "Masculino",
						value: usersPerGender[7].value,
						"color": "#F9AA68"
					},
					{
						label: "Otro",
						value: usersPerGender[8].value,
						"color": "#EA4E41"
					},
				]
			}
		};
		chartConfigs2 = {
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
					"caption": "Porcentaje de usuarios por tipo de usuario",
					"subCaption": "",
					"xAxisName": "Tipo de usuario",
					"yAxisName": "Cantidad de usuarios",
					"theme": "fusion",
					"plottooltext": "<b>$percentValue</b> de usuarios son $label "
				},

				data: [
					{
						label: "Turista",
						value: usersPerGender[9].value,
						"color": "#9CD6AE"
					},
					{
						label: "Guia",
						value: usersPerGender[10].value,
						"color": "F9AA68"
					},

				]
			}
		};
		chartConfigs3 = {
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
					"caption": "Porcentaje de usuarios por tipo de usuario/género",
					"subCaption": "",
					"xAxisName": "Tipo de usuario",
					"yAxisName": "Cantidad de usuarios",
					"theme": "fusion",
					"plottooltext": "<b>$percentValue</b> de usuarios son $label "
				},

				data: [
					{
						label: usersPerGender[0].label,
						value: usersPerGender[0].value,
						"color": usersPerGender[0].color,
					},
					{
						label: usersPerGender[1].label,
						value: usersPerGender[1].value,
						"color": usersPerGender[1].color,
					},
					{
						label: usersPerGender[2].label,
						value: usersPerGender[2].value,
						"color": usersPerGender[2].color,
					},
					{
						label: usersPerGender[3].label,
						value: usersPerGender[3].value,
						"color": usersPerGender[3].color,
					},
					{
						label: usersPerGender[4].label,
						value: usersPerGender[4].value,
						"color": usersPerGender[4].color,
					},
					{
						label: usersPerGender[5].label,
						value: usersPerGender[5].value,
						"color": usersPerGender[5].color,
					},

				]
			}
		};
	}


	render() {
	
			return (
				<div class="container-fluid" style={{display:"inline-block"}}>
					{this.state.rbGenero && <ReactFC style={{ float: "left" }}{...chartConfigs1} />}
					{this.state.rbGuia && <ReactFC style={{ float: "left" }}{...chartConfigs2} />}
					{this.state.rbCombinado && <ReactFC style={{ float: "left" }}{...chartConfigs3} />}
					<fieldset class="form-group" >

						<div class="form-check">
							<label class="form-check-label" style={{ fontSize: "16px" }}>
								<input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1"  onChange={() => this.setState({ rbGenero: true, rbCombinado: false, rbGuia:false })} checked={this.state.rbGenero} />
                         Por género
                        </label>
						</div>
						<div class="form-check">
							<label class="form-check-label" style={{ fontSize: "16px" }}>
								<input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2" onChange={() => this.setState({ rbGuia: true, rbCombinado: false, rbGenero:false })}checked={this.state.rbGuia} />
                            Por modo guía/turista
                         </label>
						</div>
						<div class="form-check">
							<label class="form-check-label" style={{ fontSize: "16px" }}>
								<input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2" onChange={() => this.setState({ rbCombinado: true,rbGenero:false, rbGuia: false})} checked={this.state.rbCombinado} />
                            Combinado
                         </label>
						</div>
					</fieldset>

				</div>
			);
		
		
	}
}

export default GraficoUsersPerGender