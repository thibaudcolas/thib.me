(function(MG, $, d3) {
  "use strict";

  d3.csv("/assets/data/international-flights-nz/arrivals.csv")
    .row(function(row) {
      var ret = {};

      Object.keys(row).forEach(function(key) {
        if (key === "Date") {
          ret[key] = new Date(
            row[key].slice(0, 4) + "-" + row[key].slice(5, 7) + "-01"
          );
        } else {
          ret[key] = parseInt(row[key], 10);
        }
      });
      return ret;
    })
    .get(function(err, data) {
      var allKeys = Object.keys(data[0]).filter(function(key) {
        return ["Date", "TOTAL ALL OVERSEAS PORTS"].indexOf(key) === -1;
      });

      MG.data_graphic({
        title:
          "Departure city of international flights arriving in New Zealand",
        description: "",
        data: data,
        full_width: true,
        height: 500,
        area: false,
        aggregate_rollover: false,
        target: "#inbound",
        x_accessor: "Date",
        y_accessor: allKeys,
        markers: [],
        legend: allKeys,
        legend_target: "#inbound-legend",
      });

      MG.data_graphic({
        title: "Total",
        description: "",
        data: data,
        full_width: true,
        height: 150,
        area: false,
        aggregate_rollover: false,
        target: "#total",
        x_accessor: "Date",
        y_accessor: "TOTAL ALL OVERSEAS PORTS",
        markers: [],
      });

      var monthToMonthChange = data.map(function(d, i) {
        var ret = {};

        var lastIndex = i === 0 ? 0 : i - 1;
        var lastMonth = data[lastIndex];

        Object.keys(d).forEach(function(key) {
          var value = d[key];
          var lastValue = lastMonth[key];

          if (key === "Date") {
            ret[key] = value;
          } else {
            if (value === 0) {
              value = Math.max(lastValue, 1);
            }
            ret[key] = Math.min(lastValue / value, 2) * 100 - 100;
          }
        });

        return ret;
      });

      MG.data_graphic({
        title:
          "Departure city of international flights arriving in New Zealand – Month to month evolution",
        description: "",
        data: monthToMonthChange,
        full_width: true,
        height: 500,
        area: false,
        aggregate_rollover: false,
        target: "#inbound-rate",
        x_accessor: "Date",
        y_accessor: "TOTAL ALL OVERSEAS PORTS",
      });
    });
})(window.MG, window.jQuery, window.d3);
