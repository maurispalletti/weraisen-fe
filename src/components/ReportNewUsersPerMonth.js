import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';


ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

let chartConfigs;



class GraficoNewUserPerMonth extends React.Component {


    UNSAFE_componentWillMount() {
        console.log("***" + this.props.usersCreatedPerMonth)
        const { usersCreatedPerMonth } = this.props;


        chartConfigs = {
            type: 'mscolumn2d',// The chart type
            width: '85%', // Width of the chart
            height: '85%', // Height of the chart
            dataFormat: 'json', // Data type
            dataSource: {
                "chart": {
                    "caption": "Cantidad de usuarios creados por mes",
                    "subCaption": "",
                    "xAxisName": "Meses",
                    "yAxisName": "Cantidad de usuarios",
                    "theme": "fusion"
                },
                "categories": [
                    {
                        "category": [
                            {
                                "label": usersCreatedPerMonth[0].category
                            },
                            {
                                "label": usersCreatedPerMonth[2].category
                            },
                            {
                                "label": usersCreatedPerMonth[4].category
                            },
                           {
                                "label": usersCreatedPerMonth[6].category
                            },
                            {
                                "label": usersCreatedPerMonth[8].category
                            },
                            {
                                "label": usersCreatedPerMonth[10].category
                            },
                            {
                                "label": usersCreatedPerMonth[12].category
                            },
                            {
                                "label": usersCreatedPerMonth[14].category
                            },
                            {
                                "label": usersCreatedPerMonth[16].category
                            },
                            {
                                "label": usersCreatedPerMonth[18].category
                            },
                            {
                                "label": usersCreatedPerMonth[20].category
                            },
                            {
                                "label": usersCreatedPerMonth[22].category
                            }
                        ]

                    }
                ],
                "dataset": [
                    {
                        "seriesname": "Turistas",
                        "color": "#9CD6AE",
                        "data": [
                            {
                                "value": usersCreatedPerMonth[0].value,
                                "color": "#9CD6AE"
                            },
                            {
                                "value": usersCreatedPerMonth[2].value,
                                "color": "#9CD6AE"
                            },
                            {
                                "value": usersCreatedPerMonth[4].value,
                                "color": "#9CD6AE"
                            },
                            {
                                "value": usersCreatedPerMonth[6].value,
                                "color": "#9CD6AE"
                            },
                            {
                                "value": usersCreatedPerMonth[8].value,
                                "color": "#9CD6AE"
                            },
                            {
                                "value": usersCreatedPerMonth[10].value,
                                "color": "#9CD6AE"
                            },
                            {
                                "value": usersCreatedPerMonth[12].value,
                                "color": "#9CD6AE"
                            },
                            {
                                "value": usersCreatedPerMonth[14].value,
                                "color": "#9CD6AE"
                            },
                            {
                                "value": usersCreatedPerMonth[16].value,
                                "color": "#9CD6AE"
                            },
                            {
                                "value": usersCreatedPerMonth[18].value,
                                "color": "#9CD6AE"
                            },
                            {
                                "value": usersCreatedPerMonth[20].value,
                                "color": "#9CD6AE"
                            },
                            {
                                "value": usersCreatedPerMonth[22].value,
                                "color": "#9CD6AE"
                            }
                        ]

                    },
                    {
                        "seriesname": "Guías",
                        "color": "#F9AA68",
                        "data": [
                            {
                                "value": usersCreatedPerMonth[1].value,
                                "color": "#F9AA68"
                            },
                            {
                                "value": usersCreatedPerMonth[3].value,
                                "color": "#F9AA68"
                            },
                            {
                                "value": usersCreatedPerMonth[5].value,
                                "color": "#F9AA68"
                            },
                           {
                                "value": usersCreatedPerMonth[7].value,
                                "color": "#F9AA68"
                            },
                            {
                                "value": usersCreatedPerMonth[9].value,
                                "color": "#F9AA68"
                            },
                            {
                                "value": usersCreatedPerMonth[11].value,
                                "color": "#F9AA68"
                            },
                            {
                                "value": usersCreatedPerMonth[13].value,
                                "color": "#F9AA68"
                            },
                            {
                                "value": usersCreatedPerMonth[15].value,
                                "color": "#F9AA68"
                            },
                            {
                                "value": usersCreatedPerMonth[17].value,
                                "color": "#F9AA68"
                            },
                            {
                                "value": usersCreatedPerMonth[19].value,
                                "color": "#F9AA68"
                            },
                            {
                                "value": usersCreatedPerMonth[21].value,
                                "color": "#F9AA68"
                            },
                            {
                                "value": usersCreatedPerMonth[23].value,
                                "color": "#F9AA68"
                            },

                        ]

                    }

                ]
            }
        };

    }


    render() {
        return (
            <ReactFC style={{ float: "left" }}
                {...chartConfigs} />
        );
    }

}

export default GraficoNewUserPerMonth