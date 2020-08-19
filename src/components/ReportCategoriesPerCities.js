import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

let chartConfigs;
let ciudades = ["Cordoba", "Buenos Aires"];
class GraficoCategoriesPerCities extends React.Component {

	UNSAFE_componentWillMount() {
		let noche = []
		let shopping = []
		let cultura = []
		let deportes = []
		let aventura = []
		let gastronomia = []

		console.log(this.props.categoriesPerCities)

		const { categoriesPerCities } = this.props;
		//arraySeriesname.push({ seriesname: categoriesPerCities.resultsS })

		const arrayLabels = []
		const arraySeriesname = []
		for (let index = 0; index < categoriesPerCities.length; index++) {
			const category = categoriesPerCities[index];


			arrayLabels.push({ label: category.label })

		}
		aventura = categoriesPerCities[0].resultsS;
		deportes = categoriesPerCities[1].resultsS;
		noche = categoriesPerCities[2].resultsS;
		shopping = categoriesPerCities[3].resultsS;
		gastronomia = categoriesPerCities[4].resultsS;
		cultura = categoriesPerCities[5].resultsS;

console.log(aventura)


		chartConfigs = {
			type: 'stackedcolumn2d',// The chart type
			width: '700', // Width of the chart
			height: '400', // Height of the chart
			showlegend: "1",
			showpercentvalues: "1",
			legendposition: "bottom",
			usedataplotcolorforlabels: "1",
			dataFormat: 'json', // Data type
			drawcrossline: "1",
			dataSource: {
				"chart": {
					"caption": "Porcentaje de usuarios por ciudad según la categoria elegida",
					"subCaption": "",
					"xAxisName": "Categorías",
					"yAxisName": "Número de usuarios",
					"theme": "fusion",
					"plottooltext": "El <b>$percentValue</b> de usuarios que eligen $label, son de $seriesName",
					"drawcrossline": "1",
				},
				"categories": [
					{
						"category": [
							{
								"label": arrayLabels[0].label
							},
							{
								"label": arrayLabels[1].label
							},
							{
								"label": arrayLabels[2].label
							},
							{
								"label": arrayLabels[3].label
							},
							{
								"label": arrayLabels[4].label
							},
							{
								"label": arrayLabels[5].label
							}
						]
					}
				],
				"dataset": [
					{
					"seriesname":"Buenos Aires",
					"color":"F9AA68",
					"data":[
						
							
						
						{ 
							"value":  aventura[0].value,
							"color": "#F9AA68"
						},
						{
							"value":  deportes[0].value,
							"color": "#F9AA68"
						},
						{
							"value": noche[0].value,
							"color": "#F9AA68"
						},
						{
							"value": shopping[0].value,
							"color": "#F9AA68"
						},
						{
							"value": gastronomia[0].value,
							"color": "#F9AA68"
						},
						{
							"value": cultura[0].value,
							"color": "#F9AA68"
						},
						

					]

				},
				{
					"seriesname":"Cordoba",
					"color":"#9CD6AE",
					"data":[
						
							
						
						{ 
							"value":  aventura[1].value,
							"color": "#9CD6AE"
						},
						{
							"value":  deportes[1].value,
							"color": "#9CD6AE"
						},
						{
							"value": noche[1].value,
							"color": "#9CD6AE"
						},
						{
							"value": shopping[1].value,
							"color": "#9CD6AE"
						},
						{
							"value": gastronomia[1].value,
							"color": "#9CD6AE"
						},
						{
							"value": cultura[1].value,
							"color": "#9CD6AE"
						},
						

					]

				},
				{
					"seriesname":"La Plata",
					"color":"#EA4E41",
					"data":[
						
							
						
						{ 
							"value":  aventura[2].value,
							"color": "#EA4E41"
						},
						{
							"value":  deportes[2].value,
							"color": "#EA4E41"
						},
						{
							"value": noche[2].value,
							"color": "#EA4E41"
						},
						{
							"value": shopping[2].value,
							"color": "#EA4E41"
						},
						{
							"value": gastronomia[2].value,
							"color": "#EA4E41"
						},
						{
							"value": cultura[2].value,
							"color": "#EA4E41"
						},
						

					]

				},
				{
					"seriesname":"Mar del Plata",
					"color":"#aaaaaa",
					"data":[
						
							
						
						{ 
							"value":  aventura[3].value,
							"color": "#aaaaaa"
						},
						{
							"value":  deportes[3].value,
							"color": "#aaaaaa"
						},
						{
							"value": noche[3].value,
							"color": "#aaaaaa"
						},
						{
							"value": shopping[3].value,
							"color": "#aaaaaa"
						},
						{
							"value": gastronomia[3].value,
							"color": "#aaaaaa"
						},
						{
							"value": cultura[3].value,
							"color": "#aaaaaa"
						},
						

					]

				},
				{
					"seriesname":"Neuquen",
					"color":"#F7913C",
					"data":[
						
							
						
						{ 
							"value":  aventura[4].value,
							"color": "#F7913C"
						},
						{
							"value":  deportes[4].value,
							"color": "#F7913C"
						},
						{
							"value": noche[4].value,
							"color": "#F7913C"
						},
						{
							"value": shopping[4].value,
							"color": "#F7913C"
						},
						{
							"value": gastronomia[4].value,
							"color": "#F7913C"
						},
						{
							"value": cultura[4].value,
							"color": "#F7913C"
						},
						

					]

				},{
				"seriesname":"Rosario",
					"color":"#7DCA96",
					"data":[
				{ 
					"value":  aventura[5].value,
					"color": "#7DCA96"
				},
				{
					"value":  deportes[5].value,
					"color": "#7DCA96"
				},
				{
					"value": noche[5].value,
					"color": "#7DCA96"
				},
				{
					"value": shopping[5].value,
					"color": "#7DCA96"
				},
				{
					"value": gastronomia[5].value,
					"color": "#7DCA96"
				},
				{
					"value": cultura[5].value,
					"color": "#7DCA96"
				},

				]
			},{
				"seriesname":"Mendoza",
					"color":"#883128",
					"data":[
				{ 
					"value":  aventura[6].value,
					"color": "#883128"
				},
				{
					"value":  deportes[6].value,
					"color": "#883128"
				},
				{
					"value": noche[6].value,
					"color": "#883128"
				},
				{
					"value": shopping[6].value,
					"color": "#883128"
				},
				{
					"value": gastronomia[6].value,
					"color": "#883128"
				},
				{
					"value": cultura[6].value,
					"color": "#883128"
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

export default GraficoCategoriesPerCities