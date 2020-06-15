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
            "caption": "Cantidad de usuarios discriminados por sexo en ciudades centrales",
            "subCaption": "",
            "xAxisName": "Ciudad",
            "yAxisName": "Número de usuarios",            
            "theme": "fusion"
        },
        "categories": [
            {
                "category": [
                    {
                        "label": "Buenos Aires"
                    },
                    {
                        "label": "Córdoba"
                    },
                    {
                        "label": "La Plata"
                    },
                    {
                        "label": "Mar del Plata"
                    },
                    {
                        "label": "Neuquén"
                    },
                    {
                        "label": "Mendoza"
                    },
                    {
                        "label": "Rosario"
                    }
                ]
            }
        ],
        "dataset": [
            {
                "seriesname": "Masculino",
                "data": [
                    {
                        "value": "80"
                    },
                    {
                        "value": "22"
                    },
                    {
                        "value": "25"
                    },
                    {
                        "value": "79"
                    },
                    {
                        "value": "7"
                    },
                    {
                        "value": "27"
                    },
                    {
                        "value": "0"
                    }
                ]
            },
            {
                "seriesname": "Femenino",
                "data": [
                    {
                        "value": "89"
                    },
                    {
                        "value": "43"
                    },
                    {
                        "value": "5"
                    },
                    {
                        "value": "42"
                    },
                    {
                        "value": "73"
                    },
                    {
                        "value": "5"
                    },
                    {
                        "value": "45"
                    }
                ]
            }
        ]
    }
};

class GraficoSex extends React.Component {
  render() {
     return (
     <ReactFC
        {...chartConfigs}/>
     );
  }
}

export default GraficoSex