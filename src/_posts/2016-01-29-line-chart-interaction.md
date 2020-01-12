---
layout: post
title: Line chart interaction overlay
date: 2016-01-29 18:40:02 +1200
comments: true
categories: [Dataviz, D3, Experiments]
redirect_from:
  - /viz/line-chart-interaction
---

Here is a quick example of allowing interaction with specific lines in a D3 chart. The lines take up very little space, so we render a transparent interactive overlay on top on which the event handlers are bound.

<!-- more -->

<style>
    #chart svg {
        background: azure;
    }

    .line {
        fill: none;
        stroke: blue;
    }

    .interact {
        fill: none;
        stroke: rgba(0, 0, 0, 0.1);
        stroke-width: 40px;
        stroke-linecap: round;
    }

    .domain,
    .tick line {
        fill: none;
        stroke: grey;
    }
</style>

<div id="chart"></div>

<script src="/assets/data/d3.min.js"></script>

<script src="/assets/data/line-chart-interaction/data.js"></script>

<script src="/assets/data/line-chart-interaction/script.js"></script>
