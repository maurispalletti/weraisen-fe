import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

let chartConfigs;

class GraficoReportedUsersPerReason extends React.Component {

    UNSAFE_componentWillMount() {

        console.log("***" + this.props.usersReportedPerReason)

        const { usersReportedPerReason } = this.props;



        chartConfigs = {
            type: 'mscolumn2d',// The chart type
            width: '85%', // Width of the chart
			height: '50%', // Height of the chart
            dataFormat: 'json', // Data type
            dataSource: {
                "chart": {
                    "caption": "Cantidad de usuarios denunciados por motivo",
                    "subCaption": "",
                    "xAxisName": "Motivos",
                    "yAxisName": "Cantidad de denuncias",
                    "theme": "fusion"
                },
                "categories": [
                    {
                        "category": [
                            {
                                "label": usersReportedPerReason[0].category
                            },
                            {
                                "label": usersReportedPerReason[1].category
                            },
                            {
                                "label": usersReportedPerReason[2].category
                            },
                            {
                                "label": usersReportedPerReason[3].category
                            },

                            {
                                "label": usersReportedPerReason[4].category
                            },


                        ]
                    }
                ],
                "dataset": [
                    {
                        "seriesname": "Cantidad de usuarios denunciados por motivo de denuncia",
                        "color": "#9CD6AE",
                        "data": [
                            {
                                "value": usersReportedPerReason[0].value,
                                "color": "#9CD6AE"
                            },
                            {
                                "value": usersReportedPerReason[1].value,
                                "color": "#9CD6AE"
                            },
                            {
                                "value": usersReportedPerReason[2].value,
                                "color": "#9CD6AE"
                            },
                            {
                                "value": usersReportedPerReason[3].value,
                                "color": "#9CD6AE"
                            },
                            {
                                "value": usersReportedPerReason[4].value,
                                "color": "#9CD6AE"
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

export default GraficoReportedUsersPerReason 