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
            "caption": "Distribución de edad por categoría",
            "subCaption": "",
            "xAxisName": "Categoría",
            "yAxisName": "Edad",            
            "theme" : "fusion",
            
            
        },
        "categories": [
            {
                "category": [
                    {
                        "label": "Deportes"
                    },
                    {
                        "label": "Aventura y aire libre"
                    },
                    {
                        "label": "Gastronomía"
                    },
                    {
                        "label": "Cultura"
                    },
                    {
                        "label": "Shopping"
                    },
                    {
                        "label": "Vida Nocturna"
                    }
                ]
            }
        ],
        "dataset": [
            {
                "seriesname": "Distribución",
                "color": "#d48e4b",
                "data": [
                    {
                        "value": "25%",
                        "color": "#d48e4b"
                    },
                    {
                        "value": "5%",
                        "color": "#d48e4b"
                    },
                    {
                        "value": "15%",
                        "color": "#d48e4b"
                    },
                    {
                        "value": "45%",
                        "color": "#d48e4b"
                    },
                    {
                        "value": "3%",
                        "color": "#d48e4b"
                    },
                    {
                        "value": "2%",
                        "color": "#d48e4b"
                    }
                    
                    
                ]
            },
              ]
            }
        
};

class Grafico2 extends React.Component {
  render() {
     return (
     <ReactFC
        {...chartConfigs}/>
     );
  }
}

export default Grafico2