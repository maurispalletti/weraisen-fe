import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

let chartConfigs;

class GraficoNewUserPerMonth extends React.Component{

UNSAFE_componentWillMount(){

    console.log(this.props.usersCreatedPerMonth)
    const {usersCreatedPerMonth} = this.props;


 chartConfigs = {
    type: 'mscolumn2d',// The chart type
    width: '700', // Width of the chart
    height: '400', // Height of the chart
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
                "category": [
                    {
                        "label": usersCreatedPerMonth[0].category
                    },
                    {
                        "label": usersCreatedPerMonth[1].category
                    },
                    {
                        "label": usersCreatedPerMonth[2].category
                    },
                    {
                        "label": usersCreatedPerMonth[3].category
                    },
                    {
                        "label": usersCreatedPerMonth[4].category
                    },
                    {
                        "label": usersCreatedPerMonth[5].category
                    },
                    {
                        "label": usersCreatedPerMonth[6].category
                    },
                    {
                        "label": usersCreatedPerMonth[7].category
                    },
                    {
                        "label": usersCreatedPerMonth[8].category
                    },
                    {
                        "label": usersCreatedPerMonth[9].category
                    },
                    {
                        "label": usersCreatedPerMonth[10].category
                    },
                    {
                        "label": usersCreatedPerMonth[11].category
                    },
                    
                    
                    
                ]
            }
        ],
        "dataset": [
            {
               "seriesname": "Usuarios creados",
                "color": "#9CD6AE",
                "data": [
                    {
                        "value": usersCreatedPerMonth[0].value,
                        "color": "#9CD6AE"
                    },
                    {
                        "value": usersCreatedPerMonth[1].value,
                        "color": "#9CD6AE"
                    },
                    {
                        "value": usersCreatedPerMonth[2].value,
                        "color": "#9CD6AE"
                    },
                    {
                        "value":usersCreatedPerMonth[3].value,
                        "color": "#9CD6AE"
                    },
                    {
                        "value": usersCreatedPerMonth[4].value,
                        "color": "#9CD6AE"
                    },
                    {
                        "value": usersCreatedPerMonth[5].value,
                        "color": "#9CD6AE"
                    },
                    {
                        "value": usersCreatedPerMonth[6].value,
                        "color": "#9CD6AE"
                    },
                    {
                        "value": usersCreatedPerMonth[7].value,
                        "color": "#9CD6AE"
                    },
                    {
                        "value": usersCreatedPerMonth[8].value,
                        "color": "#9CD6AE"
                    },
                    {
                        "value": usersCreatedPerMonth[9].value,
                        "color": "#9CD6AE"
                    },
                    {
                        "value": usersCreatedPerMonth[10].value,
                        "color": "#9CD6AE"
                    },
                    {
                        "value": usersCreatedPerMonth[11].value,
                        "color": "#9CD6AE"
                    },
                  
                ]
            }
        ]
    }
};

}

  render() {
     return (
     <ReactFC
        {...chartConfigs}/>
     );
  }
}

export default GraficoNewUserPerMonth