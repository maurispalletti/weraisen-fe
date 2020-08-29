import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

let chartConfigs;

class GraficoCategoriesMostSetelcted extends React.Component {

    UNSAFE_componentWillMount() {

        console.log("***" + this.props.categoriesMostSelected)
        const { categoriesMostSelected } = this.props;



        chartConfigs = {
            type: 'mscolumn2d',// The chart type
            width: '85%', // Width of the chart
			height: '50%', // Height of the chart
            dataFormat: 'json', // Data type
            dataSource: {
                "chart": {
                    "caption": "Cantidad de guías por categoría",
                    "subCaption": "",
                    "xAxisName": "Categorías",
                    "yAxisName": "Cantidad de guías",
                    "theme": "fusion",


                },
                "categories": [
                    {
                        "category": [
                            {
                                "label": categoriesMostSelected[0].category
                            },
                            {
                                "label": categoriesMostSelected[1].category
                            },
                            {
                                "label": categoriesMostSelected[2].category
                            },
                            {
                                "label": categoriesMostSelected[3].category
                            },
                            {
                                "label": categoriesMostSelected[4].category
                            },
                            {
                                "label": categoriesMostSelected[5].category
                            }
                        ]
                    }
                ],
                "dataset": [
                    {
                        "seriesname": "Cantidad de guías por categoría",
                        "color": "#9CD6AE",
                        "data": [
                            {
                                "value": categoriesMostSelected[0].value,
                                "color": "#9CD6AE"
                            },
                            {
                                "value": categoriesMostSelected[1].value,
                                "color": "#9CD6AE"
                            },
                            {
                                "value": categoriesMostSelected[2].value,
                                "color": "#9CD6AE"
                            },
                            {
                                "value": categoriesMostSelected[3].value,
                                "color": "#9CD6AE"
                            },
                            {
                                "value": categoriesMostSelected[4].value,
                                "color": "#9CD6AE"
                            },
                            {
                                "value": categoriesMostSelected[5].value,
                                "color": "#9CD6AE"
                            }


                        ]

                    },

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

export default GraficoCategoriesMostSetelcted