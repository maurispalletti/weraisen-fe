import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

let chartConfigs;

class GraficoUsersPerGender extends React.Component {

	UNSAFE_componentWillMount() {
		console.log(this.props.usersPerGender)
		const { usersPerGender } = this.props;

		const arrayLabels=[]

		for (let index = 0; index < usersPerGender.length; index++) {
			const gender = usersPerGender[index];
			
			
				
				arrayLabels.push({value: gender.value})
			
		}	
		
		chartConfigs = {
			type: 'pie2d',// The chart type
			width: '85%', // Width of the chart
			height: '50%', // Height of the chart
            showlegend:"1",
            showpercentvalues:"1",
            legendposition:"bottom",
            usedataplotcolorforlabels: "1",
			dataFormat: 'json', // Data type
			dataSource: {
				"chart": {
					"caption": "Porcentaje de usuarios por género",
					"subCaption": "",
					"xAxisName": "Género",
					"yAxisName": "Cantidad de usuarios",
                    "theme": "fusion",
                    "plottooltext":"<b>$percentValue</b> de usuarios de Género $label "
				},
							
				"data": usersPerGender
                
                
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

export default GraficoUsersPerGender