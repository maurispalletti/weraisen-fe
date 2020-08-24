import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';


ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

let chartConfigs;

class GraficomatchesPerStatus extends React.Component {
   


    UNSAFE_componentWillMount() {

        console.log(this.props.matchesPerStatus)
        
        const { matchesPerStatus } = this.props;




        chartConfigs = {
            type: 'pie2d',// The chart type
            width: '100%', // Width of the chart
            height: '50%', // Height of the chart
            showlegend:"1",
            showpercentvalues:"1",
            legendposition:"bottom",
            usedataplotcolorforlabels: "1",
            dataFormat: 'json', // Data type
            dataSource: {
                "chart": {
                    "caption": "Porcentaje de encuentros por su estado",
                    "subCaption": "",
                    "xAxisName": "Estado",
                    "yAxisName": "Cantidad de encuentros",
                    "theme": "fusion",
                    "plottooltext":"<b>$percentValue</b> de encuentros $label  "
                },
                
                    "data": matchesPerStatus
                
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

export default GraficomatchesPerStatus