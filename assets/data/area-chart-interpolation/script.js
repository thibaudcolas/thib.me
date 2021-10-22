(function(d3) {
  "use strict";

  var lineData = [
    { x: 0, y: 250 },
    { x: 40, y: 170 },
    { x: 80, y: 140 },
    { x: 120, y: 220 },
    { x: 160, y: 220 },
    { x: 200, y: 190 },
    { x: 240, y: 170 },
    { x: 280, y: 140 },
    { x: 320, y: 200 },
    { x: 360, y: 180 },
    { x: 400, y: 190 },
    { x: 440, y: 210 },
    { x: 480, y: 170 },
    { x: 500, y: 200 },
  ];

  var lineFunction = d3.svg
    .line()
    .x(function(d) {
      return d.x;
    })
    .y(function(d) {
      return d.y;
    });

  var x = d3.scale
    .linear()
    .range([0, 500])
    .domain(
      d3.extent(lineData, function(d) {
        return d.x;
      })
    );

  var y = d3.scale
    .linear()
    .range([0, 230])
    .domain([
      0,
      d3.max(lineData, function(d) {
        return d.y;
      }),
    ]);

  var interpolations = {
    linear: d3.svg
      .area()
      .interpolate("linear")
      .x(function(d) {
        return x(d.x);
      })
      .y0(230)
      .y1(function(d) {
        return y(d.y);
      }),
    "linear-closed": d3.svg
      .area()
      .interpolate("linear-closed")
      .x(function(d) {
        return x(d.x);
      })
      .y0(230)
      .y1(function(d) {
        return y(d.y);
      }),
    step: d3.svg
      .area()
      .interpolate("step")
      .x(function(d) {
        return x(d.x);
      })
      .y0(230)
      .y1(function(d) {
        return y(d.y);
      }),
    "step-before": d3.svg
      .area()
      .interpolate("step-before")
      .x(function(d) {
        return x(d.x);
      })
      .y0(230)
      .y1(function(d) {
        return y(d.y);
      }),
    "step-after": d3.svg
      .area()
      .interpolate("step-after")
      .x(function(d) {
        return x(d.x);
      })
      .y0(230)
      .y1(function(d) {
        return y(d.y);
      }),
    basis: d3.svg
      .area()
      .interpolate("basis")
      .x(function(d) {
        return x(d.x);
      })
      .y0(230)
      .y1(function(d) {
        return y(d.y);
      }),
    "basis-open": d3.svg
      .area()
      .interpolate("basis-open")
      .x(function(d) {
        return x(d.x);
      })
      .y0(230)
      .y1(function(d) {
        return y(d.y);
      }),
    "basis-closed": d3.svg
      .area()
      .interpolate("basis-closed")
      .x(function(d) {
        return x(d.x);
      })
      .y0(230)
      .y1(function(d) {
        return y(d.y);
      }),
    bundle: d3.svg
      .area()
      .interpolate("bundle")
      .x(function(d) {
        return x(d.x);
      })
      .y0(230)
      .y1(function(d) {
        return y(d.y);
      }),
    cardinal: d3.svg
      .area()
      .interpolate("cardinal")
      .x(function(d) {
        return x(d.x);
      })
      .y0(230)
      .y1(function(d) {
        return y(d.y);
      }),
    "cardinal-open": d3.svg
      .area()
      .interpolate("cardinal-open")
      .x(function(d) {
        return x(d.x);
      })
      .y0(230)
      .y1(function(d) {
        return y(d.y);
      }),
    "cardinal-closed": d3.svg
      .area()
      .interpolate("cardinal-closed")
      .x(function(d) {
        return x(d.x);
      })
      .y0(230)
      .y1(function(d) {
        return y(d.y);
      }),
    monotone: d3.svg
      .area()
      .interpolate("monotone")
      .x(function(d) {
        return x(d.x);
      })
      .y0(230)
      .y1(function(d) {
        return y(d.y);
      }),
  };

  Object.keys(interpolations).forEach(function(id) {
    var svg = d3
      .select("#" + id)
      .append("svg")
      .attr("width", 500)
      .attr("height", 230);

    svg
      .append("path")
      .attr("class", "area")
      .attr("d", interpolations[id](lineData));

    var linegraph = svg
      .append("path")
      .attr("class", "line")
      .attr("d", lineFunction(lineData))
      .attr("fill", "none");
  });
})(window.d3);
