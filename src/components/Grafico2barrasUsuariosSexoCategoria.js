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
            "caption": "Categorías seleccionadas por género",
            "subCaption": "",
            "xAxisName": "Géneros",
            "yAxisName": "Cantidad de selecciones",            
            "theme" : "fusion"
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
                "seriesname": "Masculino",
                "color": "#d48e4b",
                "data": [
                    {
                        "value": "18",
                        "color": "#d48e4b"
                    },
                    {
                        "value": "34",
                        "color": "#d48e4b"
                    },
                    {
                        "value": "21",
                        "color": "#d48e4b"
                    },
                    {
                        "value": "57",
                        "color": "#d48e4b"
                    },
                    {
                        "value": "7",
                        "color": "#d48e4b"
                    },
                    {
                        "value": "23",
                        "color": "#d48e4b"
                    }
                    
                    
                ]
            },
            {
                "seriesname": "Femenino",
                "color": "#BFD6B1",
                "data": [
                    {
                        "value": "36",
                        "color": "#BFD6B1"
                    },
                    {
                        "value": "33",
                        "color": "#BFD6B1"
                    },
                    {
                        "value": "25",
                        "color": "#BFD6B1"
                    },
                    {
                        "value": "45",
                        "color": "#BFD6B1"
                    },
                    {
                        "value": "71",
                        "color": "#BFD6B1"
                    },
                    {
                        "value": "53",
                        "color": "#BFD6B1"
                    },

                ]
            },
            {  
                "seriesname": "Otro",
                        "data": [
                            {
                                "value": "0"
                            },
                            {
                                "value": "0"
                            },
                            {
                                "value": "0"
                            },
                            {
                                "value": "0"
                            },
                            {
                                "value": "1"
                            },
                            {
                                "value": "0"
                            },
                            
                            
                        ]
                    },
                    
                    
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