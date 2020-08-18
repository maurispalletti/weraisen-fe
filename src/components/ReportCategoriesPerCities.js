import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

let chartConfigs;

class GraficoCategoriesPerCities extends React.Component {

	UNSAFE_componentWillMount() {
		let ciudades =["Cordoba", "Buenos Aires"]
		console.log(this.props.categoriesPerCities)

		const { categoriesPerCities } = this.props;
		arraySeriesname.push({ seriesname: categoriesPerCities.resultsS })

		const arrayLabels = []
		const arraySeriesname = []
		for (let index = 0; index < categoriesPerCities.length; index++) {
			const category = categoriesPerCities[index];

			
			arrayLabels.push({ label: category.label })
			
				
			
		}



		chartConfigs = {
			type: 'stackedcolumn2d',// The chart type
			width: '700', // Width of the chart
			height: '400', // Height of the chart
			showlegend: "1",
			showpercentvalues: "1",
			legendposition: "bottom",
			usedataplotcolorforlabels: "1",
			dataFormat: 'json', // Data type
			drawcrossline: "1",
			dataSource: {
				"chart": {
					"caption": "Porcentaje de usuarios por ciudad y categoria",
					"subCaption": "",
					"xAxisName": "Categorías",
					"yAxisName": "Número de usuarios",
					"theme": "fusion",
					"plottooltext": "<b>$percentValue</b> de usuarios que eligen $label en $seriesName ",
					"drawcrossline": "1",
				},
				"categories": [
					{
						"category": [
							{
								"label": arrayLabels[0].label
							},
							{
								"label": arrayLabels[1].label
							},
							{
								"label": arrayLabels[2].label
							},
							{
								"label": arrayLabels[3].label
							},
							{
								"label": arrayLabels[4].label
							},
							{
								"label": arrayLabels[5].label
							}
						]
					}
				],
				"dataset": [{
					"seriesname": "Gastronomia",
					"data": [
						{
							"value": "400"
						},
						{
							"value": "830"
						},
						{
							"value": "500"
						},
						{
							"value": "420"
						},
						{
							"value": "790"
						},
						{
							"value": "380"
						}
					]
				},
				{
					"seriesname": "Noche",
					"data": [
						{
							"value": "350"
						},
						{
							"value": "620"
						},
						{
							"value": "410"
						},
						{
							"value": "370"
						},
						{
							"value": "720"
						},
						{
							"value": "310"
						}
					]
				},

				]
			}




		};

	}

	render() {
		return (

			<ReactFC style={{ float: "left" }}
				{...chartConfigs} />

		);
	}
}

export default GraficoCategoriesPerCities