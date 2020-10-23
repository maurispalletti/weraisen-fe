import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

let chartConfigs;

class Grafico extends React.Component {
	async componentDidMount() {

		this.renderGraficos();

	}
	renderGraficos = () => {

		
	}
	UNSAFE_componentWillMount() {
		console.log("**"+this.props.matchesPerMonth)

		const { matchesPerMonth } = this.props;

		const arrayCategories= []
		const arrayLabels=[]

		for (let index = 0; index < matchesPerMonth.length; index++) {
			const match = matchesPerMonth[index];
			
			
				arrayCategories.push({label: match.category})
				arrayLabels.push({value: match.value, color: "#9CD6AE"})
			
		}
		chartConfigs = {
			type: 'mscolumn2d',// The chart type
			width: '100%', // Width of the chart
			height: '50%', // Height of the chart
			dataFormat: 'json', // Data type
			dataSource: {
				"chart": {
					"caption": "Cantidad de encuentros creados por mes",
					"subCaption": "",
					"xAxisName": "Meses",
					"yAxisName": "Número de encuentros",
					"theme": "fusion"
				},
				"categories": [
					{
						"category": arrayCategories
					}
				],
				"dataset": [
					{
						"seriesname": "Cantidad de Encuentros",
						"color": "#9CD6AE",
						"data": arrayLabels
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

export default Grafico