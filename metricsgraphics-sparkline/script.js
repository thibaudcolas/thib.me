(function(MG) {
    'use strict';

    var data2 = [
        { year: new Date('1991-01-01'), arrivals: 50578, departures: 44181},
        { year: new Date('1992-01-01'), arrivals: 48144, departures: 43504},
        { year: new Date('1993-01-01'), arrivals: 55081, departures: 41096},
        { year: new Date('1994-01-01'), arrivals: 64382, departures: 44525},
        { year: new Date('1995-01-01'), arrivals: 77563, departures: 49077},
        { year: new Date('1996-01-01'), arrivals: 79005, departures: 54212},
        { year: new Date('1997-01-01'), arrivals: 67636, departures: 60012},
        { year: new Date('1998-01-01'), arrivals: 58220, departures: 64485},
        { year: new Date('1999-01-01'), arrivals: 59743, departures: 68772},
        { year: new Date('2000-01-01'), arrivals: 62994, departures: 74306},
        { year: new Date('2001-01-01'), arrivals: 81094, departures: 71368},
        { year: new Date('2002-01-01'), arrivals: 95951, departures: 57753},
        { year: new Date('2003-01-01'), arrivals: 92660, departures: 57754},
        { year: new Date('2004-01-01'), arrivals: 80479, departures: 65371},
        { year: new Date('2005-01-01'), arrivals: 78963, departures: 71992},
        { year: new Date('2006-01-01'), arrivals: 82732, departures: 68123},
        { year: new Date('2007-01-01'), arrivals: 82572, departures: 77081},
        { year: new Date('2008-01-01'), arrivals: 87463, departures: 83649},
        { year: new Date('2009-01-01'), arrivals: 86410, departures: 65157},
        { year: new Date('2010-01-01'), arrivals: 82469, departures: 72018},
        { year: new Date('2011-01-01'), arrivals: 84187, departures: 86042},
        { year: new Date('2012-01-01'), arrivals: 85255, departures: 86420},
        { year: new Date('2013-01-01'), arrivals: 93965, departures: 71497},
        { year: new Date('2014-01-01'), arrivals: 109317, departures: 58395}
    ];

    MG.data_graphic({
        title: "Migrant arrivals and departures",
        description: "",
        data: data2,
        full_width: true,
        height: 150,
        area: false,
        y_axis: false,
        x_axis: false,
        target: '#chart2',
        x_accessor: 'year',
        y_accessor: ['arrivals', 'departures'],
        markers: [],
        legend: ['Arrivals', 'Departures'],
        legend_target: '#legend2'
    });

    var data1 = [
        { year: new Date('1991-01-01'), value: 9152},
        { year: new Date('1992-01-01'), value: 9114},
        { year: new Date('1993-01-01'), value: 9193},
        { year: new Date('1994-01-01'), value: 9213},
        { year: new Date('1995-01-01'), value: 9574},
        { year: new Date('1996-01-01'), value: 10009},
        { year: new Date('1997-01-01'), value: 9754},
        { year: new Date('1998-01-01'), value: 10067},
        { year: new Date('1999-01-01'), value: 9931},
        { year: new Date('2000-01-01'), value: 9699},
        { year: new Date('2001-01-01'), value: 9683},
        { year: new Date('2002-01-01'), value: 10292},
        { year: new Date('2003-01-01'), value: 10491},
        { year: new Date('2004-01-01'), value: 10609},
        { year: new Date('2005-01-01'), value: 9972},
        { year: new Date('2006-01-01'), value: 10065},
        { year: new Date('2007-01-01'), value: 9650},
        { year: new Date('2008-01-01'), value: 9713},
        { year: new Date('2009-01-01'), value: 8737},
        { year: new Date('2010-01-01'), value: 8874},
        { year: new Date('2011-01-01'), value: 8551},
        { year: new Date('2012-01-01'), value: 8785},
        { year: new Date('2013-01-01'), value: 8279},
        { year: new Date('2014-01-01'), value: 8171}
    ];

    MG.data_graphic({
        title: "Divorces",
        description: "Total number of divorces, yearly",
        data: data1,
        full_width: true,
        height: 150,
        area: false,
        y_axis: false,
        x_axis: false,
        target: '#chart1',
        x_accessor: 'year',
        y_accessor: 'value',
        markers: []
    });

})(window.MG);
