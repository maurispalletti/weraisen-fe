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
                        "label": usersCreatedPerMonth[0].month
                    },
                    {
                        "label": usersCreatedPerMonth[1].month
                    },
                    {
                        "label": usersCreatedPerMonth[2].month
                    },
                    {
                        "label": usersCreatedPerMonth[3].month
                    },
                    {
                        "label": usersCreatedPerMonth[4].month
                    },
                    {
                        "label": usersCreatedPerMonth[5].month
                    },
                    {
                        "label": usersCreatedPerMonth[6].month
                    },
                    {
                        "label": usersCreatedPerMonth[7].month
                    },
                    {
                        "label": usersCreatedPerMonth[8].month
                    },
                    {
                        "label": usersCreatedPerMonth[9].month
                    },
                    {
                        "label": usersCreatedPerMonth[10].month
                    },
                    {
                        "label": usersCreatedPerMonth[11].month
                    },
                    
                    
                    
                ]
            }
        ],
        "dataset": [
            {
               
                "color": "#BFD6B1",
                "data": [
                    {
                        "value": usersCreatedPerMonth[0].value,
                        "color": "#BFD6B1"
                    },
                    {
                        "value": usersCreatedPerMonth[1].value,
                        "color": "#BFD6B1"
                    },
                    {
                        "value": usersCreatedPerMonth[2].value,
                        "color": "#BFD6B1"
                    },
                    {
                        "value":usersCreatedPerMonth[3].value,
                        "color": "#BFD6B1"
                    },
                    {
                        "value": usersCreatedPerMonth[4].value,
                        "color": "#BFD6B1"
                    },
                    {
                        "value": usersCreatedPerMonth[5].value,
                        "color": "#BFD6B1"
                    },
                    {
                        "value": usersCreatedPerMonth[6].value,
                        "color": "#BFD6B1"
                    },
                    {
                        "value": usersCreatedPerMonth[7].value,
                        "color": "#BFD6B1"
                    },
                    {
                        "value": usersCreatedPerMonth[8].value,
                        "color": "#BFD6B1"
                    },
                    {
                        "value": usersCreatedPerMonth[9].value,
                        "color": "#BFD6B1"
                    },
                    {
                        "value": usersCreatedPerMonth[10].value,
                        "color": "#BFD6B1"
                    },
                    {
                        "value": usersCreatedPerMonth[11].value,
                        "color": "#BFD6B1"
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