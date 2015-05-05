(function(d3, data) {
    'use strict';

    var margin = {top: 20, right: 20, bottom: 20, left: 20};

    var props = {
        margin: margin,
        width: 480 - margin.left - margin.right,
        height: 320 - margin.top - margin.bottom
    };

    props.radius = props.height / 2 - margin.bottom;

    data.forEach(function(entry) {
        debugger;

        var svg = d3.select('#chart' + entry.id).append('svg')
            .attr('class', 'pie-chart')
            .attr('width', props.width + props.margin.left + props.margin.right)
            .attr('height', props.height + props.margin.top + props.margin.bottom)
        .append('g')
            .attr('transform', 'translate(' + props.width / 2 + ',' + props.height / 2 + ')');

        var arc = d3.svg.arc()
            .innerRadius(props.radius / 1.5)
            .outerRadius(props.radius);

        var color = d3.scale.ordinal()
            .range(["#98abc5", "#7b6888", "#ff8c00"]);

        var pie = d3.layout.pie()
            .padAngle(.02)
            .sort(null)
            .value(function(d) { return d.value; });

        svg.selectAll('path')
            .data(pie(entry.composition))
          .enter().append('path')
            .style('fill', function(d, i) { return color(d.cssClass); })
            .attr('d', arc);

    });

})(window.d3, window.data);
