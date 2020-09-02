import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

let chartConfigs;

class GraficoCategoryPerGender extends React.Component {

    UNSAFE_componentWillMount() {

        console.log("***" + this.props.categoriesPerGender)
        const { categoriesPerGender } = this.props;



        chartConfigs = {
            type: 'mscolumn2d',// The chart type
            width: '85%', // Width of the chart
			height: '50%', // Height of the chart
            dataFormat: 'json', // Data type
            dataSource: {
                "chart": {
                    "caption": "Categorías elegidas por género",
                    "subCaption": "",
                    "xAxisName": "Categorías",
                    "yAxisName": "Cantidad de usuarios",
                    "theme": "fusion",
                },
                "categories": [
                    {
                        "category": [
                            {
                                "label": categoriesPerGender[0].category
                            },
                            {
                                "label": categoriesPerGender[3].category
                            },
                            {
                                "label": categoriesPerGender[6].category
                            },
                            {
                                "label": categoriesPerGender[9].category
                            },
                            {
                                "label": categoriesPerGender[12].category
                            },
                            {
                                "label": categoriesPerGender[15].category
                            }
                        ]
                    }
                ],
                "dataset":  [ 
                    { 
                        "seriesname":"Femenino",
                        "color": "#9CD6AE",
                        "data": [
                            {
                                "value":  categoriesPerGender[0].value,
                                "color": "#9CD6AE"
                            },
                            {
                                "value": categoriesPerGender[3].value,
                                "color": "#9CD6AE"
                            },
                            {
                                "value": categoriesPerGender[6].value,
                                "color": "#9CD6AE"
                            },
                            {
                                "value": categoriesPerGender[9].value,
                                "color": "#9CD6AE"
                            },
                            {
                                "value": categoriesPerGender[12].value,
                                "color": "#9CD6AE"
                            },
                            {
                                "value": categoriesPerGender[15].value,
                                "color": "#9CD6AE"
                            }


                        ]
                    
                    },
                    {
                        "seriesname":"Masculino",
                        "color": "#F9AA68",
                        "data":  [
                            {
                                "value": categoriesPerGender[1].value,
                                "color": "#F9AA68"
                            },
                            {
                                "value": categoriesPerGender[4].value,
                                "color": "#F9AA68"
                            },
                            {
                                "value": categoriesPerGender[7].value,
                                "color": "#F9AA68"
                            },
                            {
                                "value": categoriesPerGender[10].value,
                                "color": "#F9AA68"
                            },
                            {
                                "value": categoriesPerGender[13].value,
                                "color": "#F9AA68"
                            },
                            {
                                "value": categoriesPerGender[16].value,
                                "color": "#F9AA68"
                            }


                        ]
                    },
                    {
                        "seriesname":"Otro",
                        "color": "#EA4E41",
                        "data": [
                            {
                                "value": categoriesPerGender[2].value,
                                "color": "#EA4E41"
                            },
                            {
                                "value": categoriesPerGender[5].value,
                                "color": "#EA4E41"
                            },
                            {
                                "value": categoriesPerGender[8].value,
                                "color": "#EA4E41"
                            },
                            {
                                "value": categoriesPerGender[11].value,
                                "color": "#EA4E41"
                            },
                            {
                                "value": categoriesPerGender[14].value,
                                "color": "#EA4E41"
                            },
                            {
                                "value": categoriesPerGender[17].value,
                                "color": "#EA4E41"
                            }


                        ]
                    },
                ]
            }

        };

    }
    render() {
        return (
            
            <ReactFC style={{float:"left"}}
                {...chartConfigs} />

                  );
    }
}

export default GraficoCategoryPerGender