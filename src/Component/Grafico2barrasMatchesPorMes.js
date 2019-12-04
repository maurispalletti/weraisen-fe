import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

let chartConfigs;

class Grafico extends React.Component {

    componentWillMount() {
        console.log(this.props.matchesPerMonth)

        const { matchesPerMonth } = this.props;

        chartConfigs = {
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
                        "data": [
                            {
                                "value": matchesPerMonth[0].value
                            },
                            {
                                "value": matchesPerMonth[1].value
                            },
                            {
                                "value": matchesPerMonth[2].value
                            },
                            {
                                "value": matchesPerMonth[3].value
                            },
                            {
                                "value": matchesPerMonth[4].value
                            },
                            {
                                "value": matchesPerMonth[5].value
                            },
                            {
                                "value": matchesPerMonth[6].value
                            },
                            {
                                "value": matchesPerMonth[7].value
                            },
                            {
                                "value": matchesPerMonth[8].value
                            },
                            {
                                "value": matchesPerMonth[9].value
                            },
                            {
                                "value": matchesPerMonth[10].value
                            },
                            {
                                "value": matchesPerMonth[11].value
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