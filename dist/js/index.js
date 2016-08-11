var reddleChartObj = null;
var refreshChart;

$(document).ready(function() {
  reddleChartObj = new reddleChart('Used Memory', 'Bytes', $('#dvReddleChart'), false, 5);
  reddleChartObj.load();
});

function startUpdates(ms) {
  stopUpdates();
  refreshChart = setInterval(function() { reddleChartObj.update(Math.floor((Math.random()*100) + 1), moment());}, ms);
}

function stopUpdates() {
  if(refreshChart)
    clearInterval(refreshChart);
  refreshChart = null;
}