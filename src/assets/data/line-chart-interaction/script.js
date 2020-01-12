(function(d3, data) {
  "use strict";

  var parseDate = d3.time.format("%b-%y").parse;

  data.forEach(function(d) {
    d.date = parseDate(d.date);
  });

  var margin = { top: 20, right: 20, bottom: 20, left: 50 };

  var props = {
    margin: margin,
    width: 768 - margin.left - margin.right,
    height: 480 - margin.top - margin.bottom,
  };

  var x = d3.time
    .scale()
    .range([0, props.width])
    .domain(
      d3.extent(data, function(d) {
        return d.date;
      })
    );

  var y = d3.scale
    .linear()
    .range([props.height, 0])
    .domain(
      d3.extent(data, function(d) {
        return d.value;
      })
    );

  var xAxis = d3.svg
    .axis()
    .scale(x)
    .orient("bottom")
    .tickValues(
      data.map(function(d) {
        return d.date;
      })
    )
    .tickFormat(d3.time.format("%b-%y"))
    .outerTickSize(0);

  var yAxis = d3.svg
    .axis()
    .scale(y)
    .orient("left")
    .outerTickSize(0);

  var line = d3.svg
    .line()
    .x(function(d) {
      return x(d.date);
    })
    .y(function(d) {
      return y(d.value);
    });

  var svg = d3
    .select("#chart")
    .append("svg")
    .attr("width", props.width + margin.left + margin.right)
    .attr("height", props.height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  svg
    .append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + props.height + ")")
    .call(xAxis);

  svg
    .append("g")
    .attr("class", "y axis")
    .call(yAxis);

  svg
    .append("g")
    .attr("class", "grid")
    .attr("transform", "translate(0," + props.height + ")")
    .call(xAxis.tickSize(-props.height, 0, 0).tickFormat(""));

  svg
    .append("path")
    .datum(data)
    .attr("class", "line")
    .attr("d", line);

  svg
    .append("path")
    .datum(data)
    .attr("class", "interact")
    .attr("d", line)
    .on("click", function(d) {
      console.log("click");
    });
})(window.d3, window.data);
