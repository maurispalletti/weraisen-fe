import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

let chartConfigs;

class GraficoCityPerMatch extends React.Component {

	UNSAFE_componentWillMount() {
		console.log(this.props.citiesPerMatches[0])
		const { citiesPerMatches } = this.props;



		
		chartConfigs = {
			type: 'mscolumn2d',// The chart type
			width: '700', // Width of the chart
			height: '400', // Height of the chart
			dataFormat: 'json', // Data type
			dataSource: {
				"chart": {
					"caption": "Ciudades más elegidas",
					"subCaption": "",
					"xAxisName": "Ciudad",
					"yAxisName": "Cantidad de Encuentros por ciudad",
					"theme": "fusion"
				},
				"categories": [
					{
						"category": [
							{
								"label": citiesPerMatches[0].category
							},
							{
								"label": citiesPerMatches[1].category
							},
							{
								"label": citiesPerMatches[2].category
							},
							/*
							{
									"label": "Neuquen"
							},
							{
									"label": "Rosario"
							},
							{
									"label": "Mendoza"
							},*/

						]
					}
				],
				"dataset": [
					{
						"seriesname": "Ciudades elegidas",
						"color": "#9CD6AE",
						"data": [
							{
								"value": citiesPerMatches[0].value,
								"color": "#9CD6AE"
							},
							{
								"value": citiesPerMatches[1].value,
								"color": "#9CD6AE"
							},
							{
								"value": citiesPerMatches[2].value,
								"color": "#9CD6AE"
							},
							/*
							{
									"value":"4",
									"color": "#9CD6AE"
							},
							{
									"value": "5",
									"color": "#9CD6AE"
							},
							{
									"value": "6",
									"color": "#9CD6AE"
							},*/

						]
					},
				]
			}
		};
	}


	render() {
		return (
			<ReactFC
				{...chartConfigs} />
		);
	}
}

export default GraficoCityPerMatch