(function (d3) {
  'use strict';

  var width = 960,
      height = 136,
      cellSize = 17;

  d3.json('meal-expenses-data.json', function(error, json) {
    console.log(json);
  });

})(window.d3);
