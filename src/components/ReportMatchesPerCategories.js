import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

let chartConfigs;

class Grafico extends React.Component {

	UNSAFE_componentWillMount() {
		console.log(this.props.matchesPerCategories)

		const { matchesPerCategories } = this.props;

		
		const arrayLabels=[]

		for (let index = 0; index < matchesPerCategories.length; index++) {
			const match = matchesPerCategories[index];
			
			
				
				arrayLabels.push({value: match.value})
			
		}
		chartConfigs = {
			type: 'pie2d',// The chart type
			width: '700', // Width of the chart
			height: '400', // Height of the chart
			showlegend:"1",
            showpercentvalues:"1",
            legendposition:"bottom",
            usedataplotcolorforlabels: "1",
			dataFormat: 'json', // Data type
			dataSource: {
				"chart": {
					"caption": "Porcentaje de categorias elegidas en las búsquedas",
					"subCaption": "",
					"xAxisName": "Categorías",
					"yAxisName": "Número de encuentros",
					"theme": "fusion",
					"plottooltext":"<b>$percentValue</b> de encuentros de $label "
				},
				
						"data": matchesPerCategories

				
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