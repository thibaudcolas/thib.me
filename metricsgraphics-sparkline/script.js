(function(MG) {
    'use strict';

    var data = [
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
        data: data,
        width: 650,
        height: 150,
        area: false,
        y_axis: false,
        x_axis: false,
        target: '#chart',
        x_accessor: 'year',
        y_accessor: 'value',
        markers: [
            {'year': 1964, 'label': '"The Creeping Terror" released'}
        ]
    });

})(window.MG);
