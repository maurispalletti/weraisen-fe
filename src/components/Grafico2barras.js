// Step 1 - Include react
import React from 'react';
import ReactDOM from 'react-dom';

// Step 2 - Include the react-fusioncharts component
import ReactFC from 'react-fusioncharts';

// Step 3 - Include the fusioncharts library
import FusionCharts from 'fusioncharts';

// Step 4 - Include the chart type
import Column2D from 'fusioncharts/fusioncharts.charts';

// Step 5 - Include the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Step 6 - Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

// Step 7 - Creating the JSON object to store the chart configurations
const chartConfigs = {
    type: 'mscolumn3d',// The chart type
    width: '700', // Width of the chart
    height: '400', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
        "chart": {
            "caption": "Harry's SuperMart",
            "subCaption": "Sales by quarter",
            "xAxisName": "Sexo",
            "yAxisName": "Edad",            
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

// Step 9 - Creating the DOM element to pass the react-fusioncharts component
class Grafico extends React.Component {
  render() {
     return (
     <ReactFC
        {...chartConfigs}/>
     );
  }
}

export default Grafico