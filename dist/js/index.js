var reddleChartObj = null;

$(document).ready(function() {
  reddleChartObj = new reddleChart('Used Memory', 'Bytes', $('#dvReddleChart'), 700, 600, false, 5);
  reddleChartObj.load();
});