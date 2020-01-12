(function(d3, stubData) {
  "use strict";

  var margin = { top: 20, right: 20, bottom: 30, left: 80 },
    width = 680 - margin.left - margin.right,
    height = 230 - margin.top - margin.bottom;

  var retirementOffset = 0;
  var contributionOffset = 0;
  var data = stubData(retirementOffset, contributionOffset);

  d3.select("#later").on("click", function() {
    retirementOffset += 3;
    var data = stubData(retirementOffset, contributionOffset);

    data.forEach(function(entry, index) {
      renderChart(entry, index, retirementOffset, contributionOffset);
    });
  });

  d3.select("#sooner").on("click", function() {
    retirementOffset -= 3;
    var data = stubData(retirementOffset, contributionOffset);

    data.forEach(function(entry, index) {
      renderChart(entry, index, retirementOffset, contributionOffset);
    });
  });

  d3.select("#more").on("click", function() {
    contributionOffset += 3;
    var data = stubData(retirementOffset, contributionOffset);

    data.forEach(function(entry, index) {
      renderChart(entry, index, retirementOffset, contributionOffset);
    });
  });

  d3.select("#less").on("click", function() {
    contributionOffset -= 3;
    var data = stubData(retirementOffset, contributionOffset);

    data.forEach(function(entry, index) {
      renderChart(entry, index, retirementOffset, contributionOffset);
    });
  });

  function renderChart(entry, index, retirementOffset, contributionOffset) {
    var lineData = entry.computed.Savings;

    var x = d3.scale
      .linear()
      .range([0, width])
      .domain(
        d3.extent(lineData, function(d) {
          return d.age;
        })
      );

    var y = d3.scale
      .linear()
      .range([height, 0])
      .domain([
        0,
        d3.max(lineData, function(d) {
          return d.savings;
        }),
      ]);

    var xAxis = d3.svg
      .axis()
      .scale(x)
      .orient("bottom");

    var yAxis = d3.svg
      .axis()
      .scale(y)
      .orient("left");

    var lineFunction = d3.svg
      .line()
      .x(function(d) {
        return x(d.age);
      })
      .y(function(d) {
        return y(d.savings);
      });

    var gigaTickFunction = d3.svg
      .line()
      .x(function(d) {
        return x(entry.RetirementAge + retirementOffset - 1);
      })
      .y(function(d) {
        if (d.age < entry.RetirementAge + retirementOffset) {
          return y(d.savings);
        }
      });

    var interpolation = d3.svg
      .area()
      .interpolate("linear")
      .x(function(d) {
        return x(d.age);
      })
      .y0(height)
      .y1(function(d) {
        return y(d.savings);
      });

    //d3.select("#entry" + index + ' svg').remove();

    if (d3.select("#entry" + index + " svg") < 1) {
      var svg = d3
        .select("#entry" + index)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    } else {
      var svg = d3.select("#entry" + index + " svg");
    }

    if (svg.selectAll(".area")[0].length < 1) {
      svg
        .append("path")
        .attr("class", "area")
        .attr("d", interpolation(lineData));
    } else {
      svg
        .selectAll(".area")
        .transition()
        .duration(500)
        .attr("d", interpolation(lineData));
    }

    if (svg.selectAll(".line.savings")[0].length < 1) {
      svg
        .append("path")
        .attr("class", "line savings")
        .attr("d", lineFunction(lineData))
        .attr("fill", "none");
    } else {
      svg
        .selectAll(".line.savings")
        .transition()
        .duration(500)
        .attr("d", lineFunction(lineData));
    }

    if (svg.selectAll(".line.gigatick")[0].length < 1) {
      svg
        .append("g")
        .attr("class", "line gigatick")
        .attr("d", gigaTickFunction(lineData))
        .attr("fill", "none");
    } else {
      svg
        .selectAll(".line.gigatick")
        .transition()
        .duration(500)
        .attr("d", gigaTickFunction(lineData));
    }

    if (svg.selectAll(".x.axis")[0].length < 1) {
      svg
        .append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);
    } else {
      svg
        .selectAll(".x.axis")
        .transition()
        .duration(500)
        .call(xAxis);
    }

    if (svg.selectAll(".y.axis")[0].length < 1) {
      svg
        .append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Savings ($)");
    } else {
      svg
        .selectAll(".y.axis")
        .transition()
        .duration(500)
        .call(yAxis);
    }
  }

  data.forEach(function(entry, index) {
    renderChart(entry, index, retirementOffset, contributionOffset);
  });
})(window.d3, stubData);

function stubData(retirementOffset, contributionOffset) {
  var raw = window.rawData;

  var lineData = raw.map(function(entry, index) {
    var savings = [];

    entry.computed.YearlyContribution =
      (entry.GrossIncome / 100) *
      Math.max(0, entry.ContributionRate + contributionOffset);

    for (
      var i = 0;
      i < entry.computed.DurationUntilRetirement + retirementOffset;
      i++
    ) {
      savings.push({
        age: entry.computed.UserAge + i,
        savings: futureValue(
          entry.AccountBalance + entry.computed.YearlyContribution * (i + 1),
          1,
          entry.RateOfReturn,
          i + 1
        ),
      });
    }

    var savingsSum = savings[savings.length - 1]
      ? savings[savings.length - 1].savings
      : entry.AccountBalance;
    var yearSavings;
    var annuity = savingsSum / entry.RetirementDuration;
    var desiredAnnuity = entry.AnnualIncomeGoal;

    for (var j = 0; j < entry.RetirementDuration; j++) {
      yearSavings = savings[i + j - 1] ? savings[i + j - 1].savings : 0;
      savings.push({
        age: entry.computed.UserAge + i + j,
        savings: Math.max(
          0,
          futureValue(yearSavings - desiredAnnuity, 1, entry.RateOfReturn, 1)
        ),
      });
    }

    entry.computed.Savings = savings;

    return entry;
  });

  return lineData;
}

// https://helloacm.com/common-javascript-functions-for-financial-calculations/
/************************************************
 *                Future Value                  *
 * fv = pv * (1 + (rate / freq))^periods        *
 * fv = Future Value                            *
 * pv = Present Value                           *
 * rate = interest rate (expressed as %)        *
 * freq = compounding frequency                 *
 * periods = number of periods until maturity   *
 ************************************************/
function futureValue(pv, freq, rate, periods) {
  return pv * Math.pow(1 + rate / 100 / freq, periods);
}
