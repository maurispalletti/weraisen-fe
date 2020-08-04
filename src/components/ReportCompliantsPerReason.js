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
            "xAxisName": "Motivos",
            "yAxisName": "Cantidad de denuncias",            
            "theme": "fusion"
        },
        "categories": [
            {
                "category": [
                    {
                        "label": "Acoso sexual y/o verbal."
                    },
                    {
                        "label": "Discriminación"
                    },
                    {
                        "label": "Perfil falsos / Suplantación identidad"
                    },
                    {
                        "label": "Amenzas"
                    },
                    {
                        "label": "Otro"
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
                  
                  
                ]
            }
        ]
    }
};

class GraficoComplaintsPerReason extends React.Component {
  render() {
     return (
     <ReactFC
        {...chartConfigs}/>
     );
  }
}

export default GraficoComplaintsPerReason 