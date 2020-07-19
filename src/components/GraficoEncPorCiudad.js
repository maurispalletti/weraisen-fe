import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

let chartConfigs;

class GraficoEncPorCiudad extends React.Component {

    UNSAFE_componentWillMount() {
        console.log(this.props.matchesPerMonth)

        const { matchesPerMonth } = this.props;

        chartConfigs = {
            type: 'mscolumn3d',// The chart type
            width: '700', // Width of the chart
            height: '400', // Height of the chart
            dataFormat: 'json', // Data type
            dataSource: {
                "chart": {
                    "caption": "Cantidad de encuentros creados por Ciudad",
                    "subCaption": "",
                    "xAxisName": "Ciudad",
                    "yAxisName": "Número de encuentros 2019 - 2020",
                    "theme": "fusion"
                },
                "categories": [
                    {
                        "category": [
                            {
                                "label": matchesPerCity[1].city //BuenosAires
                            },
                            {
                                "label": matchesPerCity[2].city //Cordoba
                            },
                            {
                                "label": matchesPerCity[3].city //La Plata
                            },
                            {
                                "label": matchesPerCity[4].city //Mar del Plata
                            },
                            {
                                "label": matchesPerCity[5].city //Neuquén
                            },
                            {
                                "label": matchesPerCity[6].city //Mendoza
                            },
                            {
                                "label": matchesPerCity[6].city //Rosario
                            },
                                                  
                        ]
                    }
                ],
                "dataset": [
                    {
                        "seriesname": "Encuentros",
                        "data": [
                            {
                                "value": matchesPerCity[0].value
                            },
                            {
                                "value": matchesPerCity[0].value
                            },
                            {
                                "value": matchesPerCity[0].value
                            },
                            {
                                "value": matchesPerCity[0].value
                            },
                            {
                                "value": matchesPerCity[0].value
                            },
                            {
                                "value": matchesPerCity[0].value
                            },
                            {
                                "value": matchesPerCity[0].value
                            },
                            {
                                "value": matchesPerCity[0].value
                            },
                            
                        ]
                    }
                ]
            }
        };

    }

    render() {
        return (
            <ReactFC
                {...chartConfigs} />
        );
    }
}

export default GraficoEncPorCiudad