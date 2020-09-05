import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

let chartConfigs2019;
let chartConfigs2020;
let chartConfigs2021;


const years = [
    {
        value: "2019",
        description: '2019'
    },
    {
        value: "2020",
        description: '2020'
    },
]

class GraficoNewUserPerMonth extends React.Component {

    state = {
        option2019: true,
        option2020: false,
        option2021: false,
    }


    async componentDidMount() {
        console.log("***" + this.props.usersCreatedPerMonth)
        const { usersCreatedPerMonth } = this.props;

        console.log("2019 " + this.state.option2019)

        chartConfigs2019 = {
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
        chartConfigs2020 = {
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
                                "value": usersCreatedPerMonth[24].value,
                                "color": "#9CD6AE"
                            },
                            {
                                "value": usersCreatedPerMonth[26].value,
                                "color": "#9CD6AE"
                            },
                            {
                                "value": usersCreatedPerMonth[28].value,
                                "color": "#9CD6AE"
                            },
                            {
                                "value": usersCreatedPerMonth[30].value,
                                "color": "#9CD6AE"
                            },
                            {
                                "value": usersCreatedPerMonth[32].value,
                                "color": "#9CD6AE"
                            },
                            {
                                "value": usersCreatedPerMonth[34].value,
                                "color": "#9CD6AE"
                            },
                            {
                                "value": usersCreatedPerMonth[36].value,
                                "color": "#9CD6AE"
                            },
                            {
                                "value": usersCreatedPerMonth[38].value,
                                "color": "#9CD6AE"
                            },
                            {
                                "value": usersCreatedPerMonth[40].value,
                                "color": "#9CD6AE"
                            },
                            {
                                "value": usersCreatedPerMonth[42].value,
                                "color": "#9CD6AE"
                            },
                            {
                                "value": usersCreatedPerMonth[44].value,
                                "color": "#9CD6AE"
                            },
                            {
                                "value": usersCreatedPerMonth[46].value,
                                "color": "#9CD6AE"
                            }
                        ]

                    },
                    {
                        "seriesname": "Guías",
                        "color": "#F9AA68",
                        "data": [
                            {
                                "value": usersCreatedPerMonth[25].value,
                                "color": "#F9AA68"
                            },
                            {
                                "value": usersCreatedPerMonth[27].value,
                                "color": "#F9AA68"
                            },
                            {
                                "value": usersCreatedPerMonth[29].value,
                                "color": "#F9AA68"
                            },
                            {
                                "value": usersCreatedPerMonth[31].value,
                                "color": "#F9AA68"
                            },
                            {
                                "value": usersCreatedPerMonth[33].value,
                                "color": "#F9AA68"
                            },
                            {
                                "value": usersCreatedPerMonth[35].value,
                                "color": "#F9AA68"
                            },
                            {
                                "value": usersCreatedPerMonth[37].value,
                                "color": "#F9AA68"
                            },
                            {
                                "value": usersCreatedPerMonth[39].value,
                                "color": "#F9AA68"
                            },
                            {
                                "value": usersCreatedPerMonth[41].value,
                                "color": "#F9AA68"
                            },
                            {
                                "value": usersCreatedPerMonth[43].value,
                                "color": "#F9AA68"
                            },
                            {
                                "value": usersCreatedPerMonth[45].value,
                                "color": "#F9AA68"
                            },
                            {
                                "value": usersCreatedPerMonth[47].value,
                                "color": "#F9AA68"
                            },

                        ]

                    }

                ]
            }
        };
        chartConfigs2021 = {
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
                                "value": usersCreatedPerMonth[48].value,
                                "color": "#9CD6AE"
                            },
                            {
                                "value": usersCreatedPerMonth[50].value,
                                "color": "#9CD6AE"
                            },
                            {
                                "value": usersCreatedPerMonth[52].value,
                                "color": "#9CD6AE"
                            },
                            {
                                "value": usersCreatedPerMonth[54].value,
                                "color": "#9CD6AE"
                            },
                            {
                                "value": usersCreatedPerMonth[56].value,
                                "color": "#9CD6AE"
                            },
                            {
                                "value": usersCreatedPerMonth[58].value,
                                "color": "#9CD6AE"
                            },
                            {
                                "value": usersCreatedPerMonth[60].value,
                                "color": "#9CD6AE"
                            },
                            {
                                "value": usersCreatedPerMonth[62].value,
                                "color": "#9CD6AE"
                            },
                            {
                                "value": usersCreatedPerMonth[64].value,
                                "color": "#9CD6AE"
                            },
                            {
                                "value": usersCreatedPerMonth[66].value,
                                "color": "#9CD6AE"
                            },
                            {
                                "value": usersCreatedPerMonth[68].value,
                                "color": "#9CD6AE"
                            },
                            {
                                "value": usersCreatedPerMonth[70].value,
                                "color": "#9CD6AE"
                            }
                        ]

                    },
                    {
                        "seriesname": "Guías",
                        "color": "#F9AA68",
                        "data": [
                            {
                                "value": usersCreatedPerMonth[49].value,
                                "color": "#F9AA68"
                            },
                            {
                                "value": usersCreatedPerMonth[51].value,
                                "color": "#F9AA68"
                            },
                            {
                                "value": usersCreatedPerMonth[53].value,
                                "color": "#F9AA68"
                            },
                            {
                                "value": usersCreatedPerMonth[55].value,
                                "color": "#F9AA68"
                            },
                            {
                                "value": usersCreatedPerMonth[57].value,
                                "color": "#F9AA68"
                            },
                            {
                                "value": usersCreatedPerMonth[59].value,
                                "color": "#F9AA68"
                            },
                            {
                                "value": usersCreatedPerMonth[61].value,
                                "color": "#F9AA68"
                            },
                            {
                                "value": usersCreatedPerMonth[63].value,
                                "color": "#F9AA68"
                            },
                            {
                                "value": usersCreatedPerMonth[65].value,
                                "color": "#F9AA68"
                            },
                            {
                                "value": usersCreatedPerMonth[67].value,
                                "color": "#F9AA68"
                            },
                            {
                                "value": usersCreatedPerMonth[69].value,
                                "color": "#F9AA68"
                            },
                            {
                                "value": usersCreatedPerMonth[71].value,
                                "color": "#F9AA68"
                            },

                        ]

                    }

                ]
            }
        };

    }

    render() {
        if (this.state.option2019) {
            return (

                <div style={{ alignItems: "center", padding: "auto" }}>
                    <div className="container-fluid" style={{ boxSizing: "border-box" }}>
                        <div className="SeccionGrafico" >
                            <ReactFC style={{ float: "left" }} {...chartConfigs2019} />
                        </div>
                        <div className="SeccionFiltros">
                        <div class="dropdown">
                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Seleccioná el año
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item" onClick={() => this.setState({ option2019: true, option2020: false})}>2019</a>
                                        <a class="dropdown-item" onClick={() => this.setState({ option2020: true, option2019:false})}>2020</a>
                                        <a class="dropdown-item" onClick={() => this.setState({ option2021: true})}>2021</a>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>

            );
        } else {
            if (this.state.option2020) {
                return (
                    <div style={{ alignItems: "center", padding: "auto" }}>
                        <div className="container-fluid" style={{ boxSizing: "border-box" }}>
                            <div className="SeccionGrafico" >
                                <ReactFC style={{ float: "left" }} {...chartConfigs2020} />
                            </div>
                            <div className="SeccionFiltros">
                                <div class="dropdown">
                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Seleccioná el año
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item" onClick={() => this.setState({ option2019: true, option2020: false})}>2019</a>
                                        <a class="dropdown-item" onClick={() => this.setState({ option2020: true, option2019:false})}>2020</a>
                                        <a class="dropdown-item" onClick={() => this.setState({ option2021: true})}>2021</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }
        }
    }

}

export default GraficoNewUserPerMonth