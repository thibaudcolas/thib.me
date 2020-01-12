---
layout: post
title: Area chart interpolation
date: 2015-04-29 18:40:02 +1200
comments: true
categories: [Dataviz, D3, Experiments]
redirect_from:
  - /viz/area-chart-interpolation
---

Data interpolation makes a big difference to how charts renders. Here are all of the built-in interpolations of D3.

<!-- more -->

<style>
.area {
    fill: tomato;
    stroke-width: 0;
}

.viz svg {
    background: hsl(181, 100%, 94%);
}

.line {
    stroke: crimson;
    stroke-width: 2px;
}
</style>

<div id="linear" class="viz"></div>

**linear** - piecewise linear segments, as in a polyline.

---

<div id="linear-closed" class="viz"></div>

**linear-closed** - close the linear segments to form a polygon.

---

<div id="step" class="viz"></div>

**step** - alternate between horizontal and vertical segments, as in a step function.

---

<div id="step-before" class="viz"></div>

**step-before** - alternate between vertical and horizontal segments, as in a step function.

---

<div id="step-after" class="viz"></div>

**step-after** - alternate between horizontal and vertical segments, as in a step function.

---

<div id="basis" class="viz"></div>

**basis** - a B-spline, with control point duplication on the ends.

---

<div id="basis-open" class="viz"></div>

**basis-open** - an open B-spline; may not intersect the start or end.

---

<div id="basis-closed" class="viz"></div>

**basis-closed** - a closed B-spline, as in a loop.

---

<div id="bundle" class="viz"></div>

**bundle** - equivalent to basis, except the tension parameter is used to straighten the spline.

---

<div id="cardinal" class="viz"></div>

**cardinal** - a Cardinal spline, with control point duplication on the ends.

---

<div id="cardinal-open" class="viz"></div>

**cardinal-open** - an open Cardinal spline; may not intersect the start or end, but will intersect other control points.

---

<div id="cardinal-closed" class="viz"></div>

**cardinal-closed** - a closed Cardinal spline, as in a loop.

---

<div id="monotone" class="viz"></div>

**monotone** - cubic interpolation that preserves monotonicity in y.

<script src="/assets/data/d3.min.js"></script>

<script src="/assets/data/area-chart-interpolation/script.js"></script>
