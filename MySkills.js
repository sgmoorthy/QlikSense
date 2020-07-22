define([],
	function () {
		return {
			initialProperties: {
				qHyperCubeDef: {
					qInitialDataFetch: [{
						qWidth: 2,
						qHeight: 5000
					}]
				}
			},
			definition: {
				type: "items",
				component: "accordion",
				items: {
					dimensions: {
						uses: "dimensions",
						min: 1,
						max: 1
					},
					measures: {
						uses: "measures",
						min: 1,
						max: 1
					}
				}
			},
			paint: function ($element, layout) {
				//console.log(layout);	

				var hypercube = layout.qHyperCube;
				console.log(hypercube);

				//1 - Debugger (> F12) - to test hypercube.qDataPages[0].qMatrix
				//debugger

				//2 - create html empty string
				var html = "";

				//2 - Render the value 
				//render the values
				hypercube.qDataPages[0].qMatrix.forEach(function (qData) {
					//console.log(data[0].qText);
					html += '<p>' + qData[0].qText + ': ' + qData[1].qText + '</p>'
				});
				
				//3- Plot the var html
				$element.html(html);

			}
		};
	});