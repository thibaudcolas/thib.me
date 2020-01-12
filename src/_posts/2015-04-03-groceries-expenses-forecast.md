---
layout: post
title: Groceries expenses forecast
date: 2015-04-03 16:39:07 +1300
comments: true
categories: [Dataviz, D3, Personal]
redirect_from:
  - /viz/meal-expenses
---

Here is a small D3 calendar/heatmap visualisation I tried to do to understand how many days’ worth of food would our groceries shopping cover.

<!-- more -->

Input data is each food-related expense, and daily food budget (budget per meal \* number of meals). Expenses are then spread on the days they (should) cover, according to the daily food budget. If multiple expenses cover the same day, the day's food expense increases above the daily food budget threshold.

Related:

- [http://finance.uw.edu/travel/meals](http://finance.uw.edu/travel/meals)
- [https://bl.ocks.org/mbostock/4063318](https://bl.ocks.org/mbostock/4063318)
- [https://github.com/wa0x6e/cal-heatmap](https://github.com/wa0x6e/cal-heatmap)

<style>
    body {
      shape-rendering: crispEdges;
    }

    .day {
      fill: rgba(0, 0, 0, 0.03);
    }

    .day.today, .day:hover {
      stroke: #333;
    }

    .month {
      fill: none;
      stroke: #333;
    }

    .label {
      font-size: 2em;
    }

    /* Read Yellow Green */
    .RdYlGn .q0-11{fill:rgba(0,104,55, 0.8);}
    .RdYlGn .q1-11{fill:rgba(26,152,80, 0.8);}
    .RdYlGn .q2-11{fill:rgba(102,189,99, 0.8);}
    .RdYlGn .q3-11{fill:rgba(166,217,106, 0.8);}
    .RdYlGn .q4-11{fill:rgba(217,239,139, 0.8);}
    .RdYlGn .q5-11{fill:rgba(255,255,191, 0.8);}
    .RdYlGn .q6-11{fill:rgba(254,224,139, 0.8);}
    .RdYlGn .q7-11{fill:rgba(253,174,97, 0.8);}
    .RdYlGn .q8-11{fill:rgba(244,109,67, 0.8);}
    .RdYlGn .q9-11{fill:rgba(215,48,39, 0.8);}
    .RdYlGn .q10-11{fill:rgba(165,0,38, 0.8);}
</style>

<div id="viz"></div>

<script src="/assets/data/d3.min.js"></script>

<script src="/assets/data/groceries-expenses-forecast/script.js"></script>
