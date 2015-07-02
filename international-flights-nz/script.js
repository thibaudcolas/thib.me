(function(MG, $, d3) {
    'use strict';

    d3.csv('arrivals.csv')
        .row(function(row) {
            var ret = {};

            Object.keys(row).forEach(function(key) {
                if (key === 'Date') {
                    ret[key] = new Date(row[key].slice(0, 4) + '-' + row[key].slice(5, 7) + '-01');
                }
                else {
                    ret[key] = parseInt(row[key], 10);
                }
            });
            return ret;
        })
        .get(function(err, data) {


            var allKeys = Object.keys(data[0]).filter(function(key) {
                return ['Date', 'TOTAL ALL OVERSEAS PORTS'].indexOf(key) === -1;
            });

            MG.data_graphic({
                title: "Departure city of international flights arriving in New Zealand",
                description: "",
                data: data,
                full_width: true,
                height: 500,
                area: false,
                aggregate_rollover: false,
                target: '#inbound',
                x_accessor: 'Date',
                y_accessor: allKeys,
                markers: [],
                legend: allKeys,
                legend_target: '#inbound-legend'
            });

            MG.data_graphic({
                title: "Total",
                description: "",
                data: data,
                full_width: true,
                height: 150,
                area: false,
                aggregate_rollover: false,
                target: '#total',
                x_accessor: 'Date',
                y_accessor: 'TOTAL ALL OVERSEAS PORTS',
                markers: []
            });
        });

})(window.MG, window.jQuery, window.d3);
