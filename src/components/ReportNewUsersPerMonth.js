import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const chartConfigs = {
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
                        "label": "Enero"
                    },
                    {
                        "label": "Febrero"
                    },
                    {
                        "label": "Marzo"
                    },
                    {
                        "label": "Abril"
                    },
                    {
                        "label": "Mayo"
                    },
                    {
                        "label": "Junio"
                    },
                    {
                        "label": "Julio"
                    },
                    {
                        "label": "Agosto"
                    },
                    {
                        "label": "Septiembre"
                    },
                    {
                        "label": "Octubre"
                    },
                    {
                        "label": "Noviembre"
                    },
                    {
                        "label": "Diciembre"
                    },
                    
                    
                    
                ]
            }
        ],
        "dataset": [
            {
               
                "color": "#BFD6B1",
                "data": [
                    {
                        "value": "1",
                        "color": "#BFD6B1"
                    },
                    {
                        "value": "2",
                        "color": "#BFD6B1"
                    },
                    {
                        "value": "3",
                        "color": "#BFD6B1"
                    },
                    {
                        "value":"4",
                        "color": "#BFD6B1"
                    },
                    {
                        "value": "5",
                        "color": "#BFD6B1"
                    },
                    {
                        "value": "6",
                        "color": "#BFD6B1"
                    },
                    {
                        "value": "6",
                        "color": "#BFD6B1"
                    },
                    {
                        "value": "6",
                        "color": "#BFD6B1"
                    },
                    {
                        "value": "6",
                        "color": "#BFD6B1"
                    },
                    {
                        "value": "6",
                        "color": "#BFD6B1"
                    },
                    {
                        "value": "6",
                        "color": "#BFD6B1"
                    },
                    {
                        "value": "6",
                        "color": "#BFD6B1"
                    },
                  
                ]
            }
        ]
    }
};

class GraficoNewUserPerMonth extends React.Component {
  render() {
     return (
     <ReactFC
        {...chartConfigs}/>
     );
  }
}

export default GraficoNewUserPerMonth 