import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

let chartConfigs;

class GraficoReportedUsersPerReason extends React.Component{

UNSAFE_componentWillMount(){

    console.log(this.props.usersReportedPerReason)
    const {usersReportedPerReason} = this.props;



const chartConfigs = {
    type: 'mscolumn2d',// The chart type
    width: '700', // Width of the chart
    height: '400', // Height of the chart
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
                        "label": usersReportedPerReason[0].reason
                    },
                    {
                        "label": usersReportedPerReason[1].reason
                    },
                    {
                        "label": usersReportedPerReason[2].reason
                    },
                    {
                        "label": usersReportedPerReason[3].reason
                    },
                    {
                        "label": usersReportedPerReason[4].reason
                    },
                                       
                    
                    
                ]
            }
        ],
        "dataset": [
            {
               
                "color": "#BFD6B1",
                "data": [
                    {
                        "value": usersReportedPerReason[0].value,
                        "color": "#BFD6B1"
                    },
                    {
                        "value": usersReportedPerReason[1].value,
                        "color": "#BFD6B1"
                    },
                    {
                        "value": usersReportedPerReason[2].value,
                        "color": "#BFD6B1"
                    },
                    {
                        "value":usersReportedPerReason[3].value,
                        "color": "#BFD6B1"
                    },
                    {
                        "value": usersReportedPerReason[4].value,
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
        {...chartConfigs}/>
     );
  }
}

export default GraficoReportedUsersPerReason 