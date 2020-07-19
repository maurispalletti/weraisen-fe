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
            "caption": "Distribución de edad por categoría",
            "subCaption": "",
            "xAxisName": "Categoría",
            "yAxisName": "Edad",            
            "theme" : "fusion",
            "color": "#d48e4b"
            
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
                "data": [
                    {
                        "value": "18 - 25"
                    },
                    {
                        "value": "20"
                    },
                    {
                        "value": "35"
                    },
                    {
                        "value": "45"
                    },
                    {
                        "value": "18 - 30"
                    },
                    {
                        "value": "27 - 30"
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