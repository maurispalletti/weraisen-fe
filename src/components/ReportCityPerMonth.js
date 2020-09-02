import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

let chartConfigs;

class GraficoCityPerMatch extends React.Component {

	UNSAFE_componentWillMount() {
		console.log(this.props.citiesPerMatches)
		const { citiesPerMatches } = this.props;

		const arrayCategories = []
		const arrayLabels = []

		for (let index = 0; index < citiesPerMatches.length; index++) {
			const ciudad = citiesPerMatches[index];


			arrayCategories.push({ label: ciudad.category })
			arrayLabels.push({ value: ciudad.value, color: "#9CD6AE" })

		}



		chartConfigs = {
			type: 'mscolumn2d',// The chart type
			width: '85%', // Width of the chart
			height: '50%', // Height of the chart
			dataFormat: 'json', // Data type
			dataSource: {
				"chart": {
					"caption": "Cantidad de encuentros por ciudad",
					"subCaption": "",
					"xAxisName": "Ciudades",
					"yAxisName": "Cantidad de Encuentros por ciudad",
					"theme": "fusion"
				},
				"categories": [
					{
						"category": arrayCategories


					}
				],
				"dataset": [
					{
						"seriesname": "Ciudades elegidas",
						"color": "#9CD6AE",
						"data": arrayLabels



					},
				]
			}
		};
	}


	render() {
		return (
			<div>
				<ReactFC style={{ float: "left" }}
					{...chartConfigs} />

				<fieldset class="form-group">

					<div class="form-check">
						<label class="form-check-label">
							<input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="2019" />
								2019
        					</label>
					</div>
					<div class="form-check">
						<label class="form-check-label">
							<input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="2020" />
									2020
       					 </label>
					</div>
				</fieldset>
			</div>


		);
	}
}

export default GraficoCityPerMatch