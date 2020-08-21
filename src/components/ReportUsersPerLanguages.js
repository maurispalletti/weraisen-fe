import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

let chartConfigs;

class GraficoUsersPerLanguages extends React.Component {

	UNSAFE_componentWillMount() {
		console.log(this.props.usersPerLanguages)
		const { usersPerLanguages } = this.props;

		const arrayCategories= []
		const arrayLabels=[]

		for (let index = 0; index < usersPerLanguages.length; index++) {
			const language = usersPerLanguages[index];
			
			
				arrayCategories.push({label: language.category})
				arrayLabels.push({value: language.value, color: "#9CD6AE"})
			
		}


		
		chartConfigs = {
			type: 'mscolumn2d',// The chart type
			width: '700', // Width of the chart
			height: '400', // Height of the chart
			dataFormat: 'json', // Data type
			dataSource: {
				"chart": {
					"caption": "Cantidad de usuarios por idioma",
					"subCaption": "",
					"xAxisName": "Idiomas",
					"yAxisName": "Cantidad de usuarios",
					"theme": "fusion"
				},
				"categories": [
					{
						"category":  arrayCategories
												
						
					}
				],
				"dataset": [
					{
						"seriesname": "Cantidad de usuarios por idioma",
						"color": "#9CD6AE",
						"data": arrayLabels
					},
				]
			}
		};
	}


	render() {
		return (
			
            <ReactFC style={{float:"left"}}
                {...chartConfigs} />
               
		);
	}
}

export default GraficoUsersPerLanguages