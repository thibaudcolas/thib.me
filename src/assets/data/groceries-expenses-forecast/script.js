(function(d3) {
  "use strict";

  var width = 1200,
    height = 250,
    cellSizeInner = 17,
    cellSize = 20;

  var day = d3.time.format("%w"),
    week = d3.time.format("%U"),
    format = d3.time.format("%Y-%m-%d");

  var data = {};
  var input = {
    budgetPerDay: 0,
    unit: "",
    raw: {},
  };

  var range = [2015, 2016];

  var monthsScale = d3.time
    .scale()
    .domain([new Date(range[0], 0, 1), new Date(range[0], 11, 31)])
    .range([0, cellSize * 53]);

  var svg = d3
    .select("#viz")
    .selectAll("svg")
    .data(d3.range(range[0], range[1]))
    .enter()
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("class", "RdYlGn")
    .append("g")
    .attr(
      "transform",
      "translate(" + (width - cellSize * 53) / 2 + "," + 40 + ")"
    );

  svg
    .append("text")
    .attr("transform", "translate(-20," + cellSize * 3.5 + ") rotate(-90)")
    .style("text-anchor", "middle")
    .attr("class", "label")
    .text(function(d) {
      return d;
    });

  var rect = svg
    .selectAll(".day")
    .data(function(d) {
      return d3.time.days(new Date(d, 0, 1), new Date(d + 1, 0, 1));
    })
    .enter()
    .append("rect")
    .attr("class", "day")
    .attr("width", cellSizeInner)
    .attr("height", cellSizeInner)
    .attr("x", function(d) {
      return week(d) * cellSize;
    })
    .attr("y", function(d) {
      return day(d) * cellSize;
    })
    .datum(format);

  rect.append("title").text(function(d) {
    return d;
  });

  var months = svg
    .selectAll(".month")
    .data(function(d) {
      return d3.time.months(new Date(d, 0, 1), new Date(d + 1, 0, 1));
    })
    .enter()
    .append("path")
    .attr("class", "month")
    .attr("d", function monthPath(t0) {
      var margin1 = 1,
        margin2 = 2,
        margin3 = 3,
        t1 = new Date(t0.getFullYear(), t0.getMonth() + 1, 0),
        d0 = +day(t0),
        w0 = +week(t0),
        d1 = +day(t1),
        w1 = +week(t1);

      return (
        "M" +
        ((w0 + 1) * cellSize - (w0 === 0 ? margin3 : 0)) +
        "," +
        (d0 * cellSize - (d0 === 0 ? margin2 : 0)) +
        "H" +
        (w0 * cellSize - (w0 === 0 ? margin3 : 0)) +
        "V" +
        (7 * cellSize + 0) +
        "H" +
        (w1 * cellSize - (w1 === 52 ? margin1 : 0)) +
        "V" +
        ((d1 + 1) * cellSize - 0) +
        "H" +
        ((w1 + 1) * cellSize - (w1 === 52 ? margin1 : 0)) +
        "V" +
        (0 - margin2) +
        "H" +
        ((w0 + 1) * cellSize - (w0 === 0 ? margin3 : 0)) +
        "Z"
      );
    });

  var xAxis = d3.svg
    .axis()
    .scale(monthsScale)
    .orient("bottom")
    .ticks(d3.time.months)
    .tickSize(16, 0)
    .tickFormat(d3.time.format("%b"));

  svg
    .append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(20, -40)")
    .call(xAxis)
    .selectAll(".tick text")
    .style("text-anchor", "start");

  d3.json(
    "/assets/data/groceries-expenses-forecast/meal-expenses.json",
    function(error, json) {
      input.raw = json;
      input.unit = json.unit;
      input.mealPerDay = json.mealPerDay;
      input.singleMealBudget = json.singleMealBudget;
      input.budgetPerDay = input.mealPerDay * input.singleMealBudget;

      // Parse raw input expenses data.
      d3.map(input.raw.expenses).forEach(function(date, amount) {
        var start = format.parse(date);
        console.log(amount / input.budgetPerDay);
        // TODO Replace this by properly accounting for remainder.
        var end = d3.time
          .format("%j")
          .parse(
            "" +
              (d3.time.dayOfYear(start) +
                1 +
                Math.floor(amount / input.budgetPerDay))
          );
        end.setFullYear(start.getFullYear());

        d3.time.days(start, end).forEach(function(d) {
          d = format(d);
          data[d] = (data[d] || 0) + input.budgetPerDay;
        });
      });

      var color = d3.scale
        .quantize()
        .domain([0, input.budgetPerDay * 4])
        .range(
          d3.range(11).map(function(d) {
            return "q" + d + "-11";
          })
        );

      rect
        .filter(function(d) {
          return d in data;
        })
        .attr("class", function(d) {
          var isToday = d === format(new Date());
          return "day " + color(data[d]) + (isToday ? " today" : "");
        })
        .select("title")
        .text(function(d) {
          return d + ": " + input.unit + data[d];
        });
    }
  );
})(window.d3);
