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
            "caption": "Ciudades más elegidas por mes",
            "subCaption": "",
            "xAxisName": "Ciudad",
            "yAxisName": "Cantida de Encuentros en ciudad",            
            "theme": "fusion"
        },
        "categories": [
            {
                "category": [
                    {
                        "label": "Córdoba"
                    },
                    {
                        "label": "Buenos Aires"
                    },
                    {
                        "label": "La Plata"
                    },
                    {
                        "label": "Neuquen"
                    },
                    {
                        "label": "Rosario"
                    },
                    {
                        "label": "Mendoza"
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
                  
                ]
            }
        ]
    }
};

class GraficoCityPerMonth extends React.Component {
  render() {
     return (
     <ReactFC
        {...chartConfigs}/>
     );
  }
}

export default GraficoCityPerMonth