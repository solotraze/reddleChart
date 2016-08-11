/*
var backgroundColor = [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ];
var borderColor = [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ];
*/
var optionsLine =  {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        type: "time",
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Timeline'
        },
        time: {
          unit: 'second',
          unitStepSize: 60,
          //min: '2016-08-10T02:10:15.000Z',
          //max: '2016-08-10T02:10:30.000Z'
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'value'
        },
        ticks: {
          beginAtZero:true
        }
      }]
    }
};

var dataDummy = {
    datasets: [
        {
            label: "My First dataset",
            
            data: [{x:moment('2016-08-10T02:10:10.000Z').format(),y:44},
                   {x:moment('2016-08-10T02:10:12.370Z').format(),y:382},
                   {x:moment('2016-08-10T02:10:14.000Z').format(),y:300},
                   {x:moment('2016-08-10T02:10:15.000Z').format(),y:44},
                   {x:moment('2016-08-10T02:10:16.370Z').format(),y:382},
                   {x:moment('2016-08-10T02:10:20.000Z').format(),y:193},
                   {x:moment('2016-08-10T02:10:21.370Z').format(),y:382},
                   {x:moment('2016-08-10T02:10:25.000Z').format(),y:300},
                   {x:moment('2016-08-10T02:10:30.000Z').format(),y:44},
                   {x:moment('2016-08-10T02:10:32.370Z').format(),y:382},
                   {x:moment('2016-08-10T02:10:40.000Z').format(),y:193},
                  ],
            fill: false,
            lineTension: 0,//0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(180,63,63,1)",//"rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 4,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            spanGaps: false,
        }
    ]
};

var reddleChart = function (_ctx, _width, _height, responsive) {
  this.ctx = _ctx;
  this.width = _width;
  this.height = _height;
};

reddleChart.prototype.load = function() {
    // If fixed size canvas is needed, resize it everytime to prevent distortion from ChartJS (http://stackoverflow.com/questions/19847582/chart-js-canvas-resize)
    this.ctx.width = this.width;
    this.ctx.height = this.height;
    
    var myChart = new Chart(this.ctx, {
        type: 'line',
        data: dataDummy,
        options: optionsLine
    });
};