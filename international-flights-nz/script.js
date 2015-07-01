(function(MG) {
    'use strict';

    d3.csv('arrivals.csv')
        .row(function(row) {
            var ret = {};

            Object.keys(row).forEach(function(key) {
                if (key === 'Date') {
                    ret[key] = new Date(row[key].slice(0, 4) + '-' + row[key].slice(5, 7) + '-01');
                }
                else if (key.toLowerCase().indexOf('total') === -1) {
                    ret[key] = parseInt(row[key], 10);
                }
            });
            return ret;
        })
        .get(function(err, data) {

            var keys = Object.keys(data[0]).filter(function(key) {
                return key !== 'Date' && key.toLowerCase().indexOf('total') === -1;
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
                y_accessor: keys,
                markers: [],
                legend: keys,
                legend_target: '#inbound-legend'
            });
        });

})(window.MG);
