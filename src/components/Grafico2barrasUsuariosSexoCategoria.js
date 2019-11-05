import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const chartConfigs = {
    type: 'mscolumn3d',// The chart type
    width: '700', // Width of the chart
    height: '400', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
        "chart": {
            "caption": "Cantidad de encuentros creados por mes",
            "subCaption": "",
            "xAxisName": "Mes",
            "yAxisName": "Número de encuentros",            
            "theme": "fusion"
        },
        "categories": [
            {
                "category": [
                    {
                        "label": "Gastronomia"
                    },
                    {
                        "label": "Vida Nocturna"
                    },
                    {
                        "label": "Deportes"
                    },
                    {
                        "label": "Cultura"
                    }
                ]
            }
        ],
        "dataset": [
            {
                "seriesname": "Masculino",
                "data": [
                    {
                        "value": "18"
                    },
                    {
                        "value": "34"
                    },
                    {
                        "value": "26"
                    },
                    {
                        "value": "57"
                    }
                ]
            },
            {
                "seriesname": "Femenino",
                "data": [
                    {
                        "value": "36"
                    },
                    {
                        "value": "33"
                    },
                    {
                        "value": "25"
                    },
                    {
                        "value": "45"
                    }
                ]
            }
        ]
    }
};

class Grafico extends React.Component {
  render() {
     return (
     <ReactFC
        {...chartConfigs}/>
     );
  }
}

export default Grafico