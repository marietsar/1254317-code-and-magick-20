'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BORDER_GAP = 35;
var STATISTIC_GAP = 50;
var TEXT_HEIGHT = 10;
var GREETING_HEIGHT = 50;
var BAR_WIDTH = 40;
var barHeight = CLOUD_HEIGHT - GAP - TEXT_HEIGHT * 4 - GREETING_HEIGHT - BORDER_GAP;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 120, 30);
  ctx.fillText('Список результатов:', 120, 50);
  var maxTime = getMaxElement(times);
  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + BORDER_GAP + (STATISTIC_GAP + BAR_WIDTH) * i, CLOUD_Y + (CLOUD_HEIGHT - BORDER_GAP));
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var lightBlue = Math.round(Math.random() * 100);
      var colorBlue = 'hsl(240, ' + lightBlue + '%, 50%)';
      ctx.fillStyle = colorBlue;
    }
    ctx.fillRect(CLOUD_X + BORDER_GAP + (STATISTIC_GAP + BAR_WIDTH) * i, CLOUD_Y + (CLOUD_HEIGHT - BORDER_GAP - TEXT_HEIGHT), BAR_WIDTH, (barHeight * times[i]) / maxTime * -1);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), CLOUD_X + BORDER_GAP + (STATISTIC_GAP + BAR_WIDTH) * i, CLOUD_Y + (CLOUD_HEIGHT - BORDER_GAP - (barHeight * times[i]) / maxTime) - BORDER_GAP);
  }
};
