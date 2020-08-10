import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

let chartConfigs;

class Grafico extends React.Component {

    UNSAFE_componentWillMount() {
        console.log(this.props.matchesPerMonth)

        const { matchesPerMonth } = this.props;

        chartConfigs = {
            type: 'mscolumn2d',// The chart type
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
                                "label": matchesPerMonth[0].month
                            },
                            {
                                "label": matchesPerMonth[1].month
                            },
                            {
                                "label": matchesPerMonth[2].month
                            },
                            {
                                "label": matchesPerMonth[3].month
                            },
                            {
                                "label": matchesPerMonth[4].month
                            },
                            {
                                "label": matchesPerMonth[5].month
                            },
                            {
                                "label": matchesPerMonth[6].month
                            },
                            {
                                "label": matchesPerMonth[7].month
                            },
                            {
                                "label": matchesPerMonth[8].month
                            },
                            {
                                "label": matchesPerMonth[9].month
                            },
                            {
                                "label": matchesPerMonth[10].month
                            },
                            {
                                "label": matchesPerMonth[11].month
                            },
                        ]
                    }
                ],
                "dataset": [
                    {
                        "seriesname": "Encuentros",
                        "color": "#BFD6B1",
                        "data": [
                            {
                                "value": matchesPerMonth[0].value,
                                "color": "#BFD6B1"
                            },
                            {
                                "value": matchesPerMonth[1].value,
                                "color": "#BFD6B1"
                            },
                            {
                                "value": matchesPerMonth[2].value,
                                "color": "#BFD6B1"
                            },
                            {
                                "value": matchesPerMonth[3].value,
                                "color": "#BFD6B1"
                            },
                            {
                                "value": matchesPerMonth[4].value,
                                "color": "#BFD6B1"
                            },
                            {
                                "value": matchesPerMonth[5].value,
                                "color": "#BFD6B1"
                            },
                            {
                                "value": matchesPerMonth[6].value,
                                "color": "#BFD6B1"
                            },
                            {
                                "value": matchesPerMonth[7].value,
                                "color": "#BFD6B1"
                            },
                            {
                                "value": matchesPerMonth[8].value,
                                "color": "#BFD6B1"
                            },
                            {
                                "value": matchesPerMonth[9].value,
                                "color": "#BFD6B1"
                            },
                            {
                                "value": matchesPerMonth[10].value,
                                "color": "#BFD6B1"
                            },
                            {
                                "value": matchesPerMonth[11].value,
                                "color": "#BFD6B1"
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

export default Grafico