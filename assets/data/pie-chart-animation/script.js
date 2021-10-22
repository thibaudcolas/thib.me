(function(d3, data) {
  "use strict";

  var margin = { top: 20, right: 20, bottom: 20, left: 20 };

  var props = {
    margin: margin,
    width: 480 - margin.left - margin.right,
    height: 320 - margin.top - margin.bottom,
  };

  var outerRadius = props.height / 2 - 20,
    innerRadius = outerRadius / 2,
    cornerRadius = 10;

  data.forEach(function(entry) {
    var svg = d3
      .select("#chart" + entry.id)
      .append("svg")
      .attr("class", "pie-chart")
      .attr("width", props.width + props.margin.left + props.margin.right)
      .attr("height", props.height + props.margin.top + props.margin.bottom)
      .append("g")
      .attr(
        "transform",
        "translate(" + props.width / 2 + "," + props.height / 2 + ")"
      );

    var arc = d3.svg
      .arc()
      .padRadius(outerRadius)
      .innerRadius(innerRadius);

    var color = d3.scale.ordinal().range(["#98abc5", "#7b6888", "#ff8c00"]);

    var pie = d3.layout
      .pie()
      .padAngle(
        d3.max(entry.composition, function(d) {
          return d.value;
        }) === 100
          ? 0
          : 0.02
      )
      .sort(null)
      .value(function(d) {
        return d.value;
      });

    svg
      .selectAll("path")
      .data(pie(entry.composition))
      .enter()
      .append("path")
      .each(function(d) {
        d.outerRadius = outerRadius - 20;
      })
      .style("fill", function(d, i) {
        return color(i);
      })
      .attr("d", arc)
      .on("mouseover", arcTween(outerRadius, 0, arc))
      .on("mouseout", arcTween(outerRadius - 20, 150, arc));
  });

  function arcTween(outerRadius, delay, arc) {
    return function() {
      d3.select(this)
        .transition()
        .delay(delay)
        .attrTween("d", function(d) {
          var i = d3.interpolate(d.outerRadius, outerRadius);
          return function(t) {
            d.outerRadius = i(t);
            return arc(d);
          };
        });
    };
  }
})(window.d3, window.data);
