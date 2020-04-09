var chartColors = {
	red: 'rgb(255, 99, 132)',
	blue: 'rgb(54, 162, 235)'
};

var color = Chart.helpers.color;

Chart.defaults.multicolorLine = Chart.defaults.line;
Chart.controllers.multicolorLine = Chart.controllers.line.extend({
  draw: function(ease) {
    var
      startIndex = 0,
      meta = this.getMeta(),
      ctx = this.chart.ctx;
      points = meta.data || [],
      colors = this.getDataset().colors,
      spanGaps = this.getDataset().spanGaps,
      area = this.chart.chartArea,
      originalDatasets = meta.dataset._children
        .filter(function(data) {
          return !isNaN(data._view.y);
        });

    function _setColor(newColor, meta) {
      meta.dataset._view.borderColor = newColor;
    }

    function _setBorderColor(newColor, point) {
      point._model.borderColor = newColor;
    }

    if (!colors) {
      Chart.controllers.line.prototype.draw.call(this, ease);
      return;
    }
    
    // Últimos 5 de cores diferentes
    

    if(!spanGaps) {
      _setColor(colors[0], meta);
      meta.dataset._children = originalDatasets.slice((points.length-5), points.length);
      meta.dataset.draw();
      meta.dataset._children = originalDatasets;
      for(var i = (points.length-5); i < points.length; i++) {
        _setBorderColor(colors[1], points[i]);
        points[i].draw(area);
      }
    }
    else {
      _setColor(colors[0], meta);
      meta.dataset._children = originalDatasets.slice(0, (points.length-5));
      meta.dataset.draw();
      meta.dataset._children = originalDatasets;
      _setColor(colors[1], meta);
      meta.dataset._children = originalDatasets.slice((points.length-6), points.length);
      meta.dataset.draw();
      meta.dataset._children = originalDatasets;
      for(var i = 0; i < points.length; i++) {
        if (i <= (points.length-6)) _setBorderColor(colors[0], points[i]);
        else _setBorderColor(colors[1], points[i]);
        points[i].draw(area);
      }
    }
 
  }
});


var chart = {
  type: 'multicolorLine',
  data: {
    datasets: [{
      type: 'multicolorLine',
      colors: ['rgb(157, 159, 166)','rgb(0, 123, 255)'],
      lineTension: 0,
      spanGaps: true,
      backgroundColor: 'rgb(157, 159, 166, .15)',
      pointBackgroundColor: 'white',
      pointRadius: 4  
    },
    {
      type: 'multicolorLine',
      backgroundColor: 'transparent',
      lineTension: 0,
      colors: ['rgb(0, 80, 166)', 'rgb(0, 80, 166)'],
      spanGaps: false,
    },
    {
      type: 'multicolorLine',
      backgroundColor: 'transparent',
      lineTension: 0,
      colors: ['rgb(85, 161, 242)', 'rgb(85, 161, 242)'],
      spanGaps: false,
    }
    ]
	},
  plugins: [ChartDataSource],
	options: {
	  title: {
			display: true,
			text: 'Número de casos notificados em escala logarítimica'
    },
    scales: {
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Número de Casos',
                },
                type: 'logarithmic',
                position: 'left',
                ticks: {
                    min: 0,
                    max: 15000,
                    callback: function (value, index, values) {
                        if (value === 1000000) return "1M";
                        if (value === 100000) return "100K";
                        if (value === 10000) return "10K";
                        if (value === 1000) return "1K";
                        if (value === 100) return "100";
                        if (value === 10) return "10";
                        if (value === 0) return "0";
                        return null;
                    }
                }
            }]
    },
    legend :{
            display: false,
            position: 'top',
            usePointStyle: true
    },
    spanGaps: true,
		plugins: {
			datasource: {
				type: 'csv',
				url: 'https://raw.githubusercontent.com/badain/badain.github.io/master/data.csv',
				delimiter: ',',
				rowMapping: 'index',
				datasetLabels: true, //PRIMEIRA LINHA  (eixo x)
        indexLabels: true,   //PRIMEIRA COLUNA (eixo y)
			}
		}
	}
};

window.onload = function() {
	var ctx = document.getElementById('myChart').getContext('2d');
    window.myChart = new Chart(ctx, chart);
};