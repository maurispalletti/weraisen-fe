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
            "caption": "Categorías elegidas por género",
            "subCaption": "",
            "xAxisName": "Categoría",
            "yAxisName": "Cantidad de usuarios",            
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
                
                "color": "#d48e4b",
                "data": [
                    {
                        "value": "",
                        "color": "#d48e4b"
                    },
                    {
                        "value": "",
                        "color": "#d48e4b"
                    },
                    {
                        "value": "",
                        "color": "#d48e4b"
                    },
                    {
                        "value": "",
                        "color": "#d48e4b"
                    },
                    {
                        "value": "",
                        "color": "#d48e4b"
                    },
                    {
                        "value": "",
                        "color": "#d48e4b"
                    }
                    
                    
                ]
            },
              ]
            }
        
};

class GraficoCategoryPerGender extends React.Component {
  render() {
     return (
     <ReactFC
        {...chartConfigs}/>
     );
  }
}

export default GraficoCategoryPerGender