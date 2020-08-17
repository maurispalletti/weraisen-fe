import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';


ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

let chartConfigs;

class GraficoUsersPerAge extends React.Component {
   


    UNSAFE_componentWillMount() {

        console.log(this.props.usersPerAge)
        
        const { usersPerAge } = this.props;




        chartConfigs = {
            type: 'pie2d',// The chart type
            width: '700', // Width of the chart
            height: '400', // Height of the chart
            showlegend:"1",
            showpercentvalues:"1",
            legendposition:"bottom",
            usedataplotcolorforlabels: "1",
            dataFormat: 'json', // Data type
            dataSource: {
                "chart": {
                    "caption": "Cantidad de usuarios por edad",
                    "subCaption": "",
                    "xAxisName": "Rango de edad",
                    "yAxisName": "Cantidad de usuarios",
                    "theme": "fusion",
                    "plottooltext":"<b>$percentValue</b> de usuarios entre $label años "
                },
                
                    "data": usersPerAge
                
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

export default GraficoUsersPerAge