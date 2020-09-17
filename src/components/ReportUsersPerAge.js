import React from 'react';

import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';


ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

let chartConfigs1;
let chartConfigs2;


class GraficoUsersPerAge extends React.Component {

    state = {
        rbGenero: true,
        loading:true,
    }
    async componentDidMount() {

        this.renderGraficos();

    }
    renderGraficos = () => {
        console.log(this.props.usersPerAge)

        const { usersPerAge } = this.props;

this.setState({loading:false})

        chartConfigs1 = {
            type: 'stackedcolumn2d',// The chart type
            width: '85%', // Width of the chart
            height: '50%', // Height of the chart
            showlegend: "1",
            showpercentvalues: "1",
            legendposition: "bottom",
            usedataplotcolorforlabels: "1",
            dataFormat: 'json', // Data type
            drawcrossline: "1",
            dataSource: {
                "chart": {
                    "caption": "Porcentaje de usuarios por edad por género",
                    "subCaption": "",
                    "xAxisName": "Rango de edad",
                    "yAxisName": "Cantidad de usuarios",
                    "theme": "fusion",
                    "plottooltext": "<b>$percentValue</b> de usuarios $seriesname entre $label años ",
                    "drawcrossline": "1",
                }, "categories": [
                    {
                        "category": [
                            {
                                "label": usersPerAge[0].label
                            },
                            {
                                "label": usersPerAge[3].label
                            },
                            {
                                "label": usersPerAge[6].label
                            },
                            {
                                "label": usersPerAge[9].label
                            },
                            {
                                "label": usersPerAge[12].label
                            },
                        ]
                    }
                ],
                "dataset": [
                    {
                        "seriesname": "Femeninos",
                        "color": "#9CD6AE",
                        "data": [

                            {
                                "value": usersPerAge[0].value,
                                "color": "#9CD6AE"
                            },
                            {
                                "value": usersPerAge[3].value,
                                "color": "#9CD6AE"
                            },
                            {
                                "value": usersPerAge[6].value,
                                "color": "#9CD6AE"
                            },
                            {
                                "value": usersPerAge[9].value,
                                "color": "#9CD6AE"
                            },
                            {
                                "value": usersPerAge[12].value,
                                "color": "#9CD6AE"
                            },
                        ]

                    },
                    {
                        "seriesname": "Masculinos",
                        "color": "#F9AA68",
                        "data": [



                            {
                                "value": usersPerAge[1].value,
                                "color": "#F9AA68"
                            },
                            {
                                "value": usersPerAge[4].value,
                                "color": "#F9AA68"
                            },
                            {
                                "value": usersPerAge[7].value,
                                "color": "#F9AA68"
                            },
                            {
                                "value": usersPerAge[10].value,
                                "color": "#F9AA68"
                            },
                            {
                                "value": usersPerAge[13].value,
                                "color": "#F9AA68"
                            },

                        ]

                    },
                    {
                        "seriesname": "Otros",
                        "color": "#EA4E41",
                        "data": [
                            {
                                "value": usersPerAge[2].value,
                                "color": "#EA4E41"
                            },
                            {
                                "value": usersPerAge[5].value,
                                "color": "#EA4E41"
                            },
                            {
                                "value": usersPerAge[8].value,
                                "color": "#EA4E41"
                            },
                            {
                                "value": usersPerAge[11].value,
                                "color": "#EA4E41"
                            },
                            {
                                "value": usersPerAge[14].value,
                                "color": "#EA4E41"
                            },

                        ]

                    }
                ]

            }
        };

        chartConfigs2 = {
            type: 'stackedcolumn2d',// The chart type
            width: '85%', // Width of the chart
            height: '50%', // Height of the chart
            showlegend: "1",
            showpercentvalues: "1",
            legendposition: "bottom",
            usedataplotcolorforlabels: "1",
            dataFormat: 'json', // Data type
            drawcrossline: "1",
            dataSource: {
                "chart": {
                    "caption": "Porcentaje de usuarios por edad por tipo de usuario",
                    "subCaption": "",
                    "xAxisName": "Rango de edad",
                    "yAxisName": "Cantidad de usuarios",
                    "theme": "fusion",
                    "plottooltext": "<b>$percentValue</b> de usuarios $seriesname entre $label años ",
                    "drawcrossline": "1",
                }, "categories": [
                    {
                        "category": [
                            {
                                "label": usersPerAge[0].label
                            },
                            {
                                "label": usersPerAge[3].label
                            },
                            {
                                "label": usersPerAge[6].label
                            },
                            {
                                "label": usersPerAge[9].label
                            },
                            {
                                "label": usersPerAge[12].label
                            },
                        ]
                    }
                ],
                "dataset": [
                    {
                        "seriesname": "Guias",
                        "color": "F9AA68",
                        "data": [

                            {
                                "value": usersPerAge[15].value,
                                "color": "#F9AA68"
                            },
                            {
                                "value": usersPerAge[17].value,
                                "color": "#F9AA68"
                            },
                            {
                                "value": usersPerAge[19].value,
                                "color": "#F9AA68"
                            },
                            {
                                "value": usersPerAge[21].value,
                                "color": "#F9AA68"
                            },
                            {
                                "value": usersPerAge[23].value,
                                "color": "#F9AA68"
                            },
                        ]

                    },
                    {
                        "seriesname": "Turistas",
                        "color": "#9CD6AE",
                        "data": [



                            {
                                "value": usersPerAge[16].value,
                                "color": "#9CD6AE"
                            },
                            {
                                "value": usersPerAge[18].value,
                                "color": "#9CD6AE"
                            },
                            {
                                "value": usersPerAge[20].value,
                                "color": "#9CD6AE"
                            },
                            {
                                "value": usersPerAge[22].value,
                                "color": "#9CD6AE"
                            },
                            {
                                "value": usersPerAge[24].value,
                                "color": "#9CD6AE"
                            },

                        ]

                    },
                ]

            }
        };
    }
  


    render() {
        if (this.state.loading) {
			return(
				<div style={{ alignItems: "center", padding: "auto" }}>
			<div className="SeccionGrafico">
				Cargando gráfico...
			</div>
			</div>
			)}else{

        return (
            <div class="container-fluid">
                {this.state.rbGenero && <ReactFC style={{ float: "left" }}{...chartConfigs1} />}
                {!this.state.rbGenero && <ReactFC style={{ float: "left" }}{...chartConfigs2} />}
                <div className="SeccionFiltros">
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Seleccioná la opción
                                    </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" onClick={() => this.setState({ rbGenero: true })}>Por género</a>
                            <a class="dropdown-item" onClick={() => this.setState({ rbGenero :false })}>Por modo guía/turista</a>

                        </div>
                    </div>
                </div>

            </div>
        );}

    }

}

export default GraficoUsersPerAge