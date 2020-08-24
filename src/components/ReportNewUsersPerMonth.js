import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';


ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

let chartConfigs;

class GraficoNewUserPerMonth extends React.Component {
   


    UNSAFE_componentWillMount() {

        console.log(this.props.usersCreatedPerMonth)
        const results = [];
        const { usersCreatedPerMonth } = this.props;

        const arrayCategories= []
		const arrayLabels=[]

        for (let index = 0; index < usersCreatedPerMonth.length; index++) {
			const month = usersCreatedPerMonth[index];
			
			
				arrayCategories.push({label: month.category})
				arrayLabels.push({value: month.value, color: "#9CD6AE"})
			
		}

        chartConfigs = {
            type: 'mscolumn2d',// The chart type
            width: '85%', // Width of the chart
			height: '50%', // Height of the chart
            dataFormat: 'json', // Data type
            dataSource: {
                "chart": {
                    "caption": "Cantidad de usuarios creados por mes",
                    "subCaption": "",
                    "xAxisName": "Meses",
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
                        "seriesname": "Usuarios creados",
                        "color": "#9CD6AE",
                        "data": arrayLabels
                                                           
                        
                    }
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

export default GraficoNewUserPerMonth