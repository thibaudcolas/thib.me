---
layout: post
title: Area chart interaction
date: 2015-05-03 13:40:02 +1200
comments: true
categories: [Dataviz, D3, Experiments]
redirect_from:
  - /viz/area-chart-interaction
---

Here's an experiment, with an area chart that changes its shape based on a financial calculation.

<!-- more -->

<style>
.area {
  fill: steelblue;
    stroke-width: 0;
}

.area-reality {
  fill: crimson;
}

.viz svg {
    background: azure;
}

.line {
  stroke: black;
  stroke-width: 2px;
}

.axis path,
.axis line {
  fill: none;
  stroke: #000;
  shape-rendering: crispEdges;
}

</style>

<div id="update">
    <h4>Contribution rate</h4>
    <div>
        <button id="less">Contribute less</button>
        <button id="more">Contribute more</button>
    </div>
    <h4>Retirement age</h4>
    <button id="sooner">Retire sooner</button>
    <button id="later">Retire later</button>
</div>

<div id="entry0" class="viz"></div>
<div id="entry1" class="viz"></div>
<div id="entry2" class="viz"></div>
<div id="entry3" class="viz"></div>
<div id="entry4" class="viz"></div>
<div id="entry5" class="viz"></div>
<div id="entry6" class="viz"></div>
<div id="entry7" class="viz"></div>
<div id="entry8" class="viz"></div>
<div id="entry9" class="viz"></div>
<div id="entry10" class="viz"></div>
<div id="entry11" class="viz"></div>
<div id="entry12" class="viz"></div>
<div id="entry13" class="viz"></div>
<div id="entry14" class="viz"></div>
<div id="entry15" class="viz"></div>
<div id="entry16" class="viz"></div>
<div id="entry17" class="viz"></div>
<div id="entry18" class="viz"></div>
<div id="entry19" class="viz"></div>
<div id="entry20" class="viz"></div>
<div id="entry21" class="viz"></div>
<div id="entry22" class="viz"></div>
<div id="entry23" class="viz"></div>
<div id="entry24" class="viz"></div>
<div id="entry25" class="viz"></div>
<div id="entry26" class="viz"></div>
<div id="entry27" class="viz"></div>
<div id="entry28" class="viz"></div>
<div id="entry29" class="viz"></div>
<div id="entry30" class="viz"></div>
<div id="entry31" class="viz"></div>
<div id="entry32" class="viz"></div>
<div id="entry33" class="viz"></div>
<div id="entry34" class="viz"></div>
<div id="entry35" class="viz"></div>
<div id="entry36" class="viz"></div>
<div id="entry37" class="viz"></div>
<div id="entry38" class="viz"></div>
<div id="entry39" class="viz"></div>
<div id="entry40" class="viz"></div>
<div id="entry41" class="viz"></div>
<div id="entry42" class="viz"></div>
<div id="entry43" class="viz"></div>
<div id="entry44" class="viz"></div>
<div id="entry45" class="viz"></div>
<div id="entry46" class="viz"></div>
<div id="entry47" class="viz"></div>
<div id="entry48" class="viz"></div>
<div id="entry49" class="viz"></div>
<div id="entry50" class="viz"></div>
<div id="entry51" class="viz"></div>
<div id="entry52" class="viz"></div>
<div id="entry53" class="viz"></div>
<div id="entry54" class="viz"></div>
<div id="entry55" class="viz"></div>
<div id="entry56" class="viz"></div>
<div id="entry57" class="viz"></div>
<div id="entry58" class="viz"></div>
<div id="entry59" class="viz"></div>
<div id="entry60" class="viz"></div>
<div id="entry61" class="viz"></div>
<div id="entry62" class="viz"></div>
<div id="entry63" class="viz"></div>
<div id="entry64" class="viz"></div>
<div id="entry65" class="viz"></div>
<div id="entry66" class="viz"></div>
<div id="entry67" class="viz"></div>
<div id="entry68" class="viz"></div>
<div id="entry69" class="viz"></div>
<div id="entry70" class="viz"></div>
<div id="entry71" class="viz"></div>
<div id="entry72" class="viz"></div>
<div id="entry73" class="viz"></div>
<div id="entry74" class="viz"></div>
<div id="entry75" class="viz"></div>
<div id="entry76" class="viz"></div>
<div id="entry77" class="viz"></div>
<div id="entry78" class="viz"></div>
<div id="entry79" class="viz"></div>
<div id="entry80" class="viz"></div>
<div id="entry81" class="viz"></div>
<div id="entry82" class="viz"></div>
<div id="entry83" class="viz"></div>
<div id="entry84" class="viz"></div>
<div id="entry85" class="viz"></div>
<div id="entry86" class="viz"></div>
<div id="entry87" class="viz"></div>
<div id="entry88" class="viz"></div>
<div id="entry89" class="viz"></div>
<div id="entry90" class="viz"></div>
<div id="entry91" class="viz"></div>
<div id="entry92" class="viz"></div>
<div id="entry93" class="viz"></div>
<div id="entry94" class="viz"></div>
<div id="entry95" class="viz"></div>
<div id="entry96" class="viz"></div>
<div id="entry97" class="viz"></div>
<div id="entry98" class="viz"></div>
<div id="entry99" class="viz"></div>
<div id="entry100" class="viz"></div>

<script src="/assets/data/d3.min.js"></script>

<script src="/assets/data/area-chart-interaction/data.js"></script>

<script src="/assets/data/area-chart-interaction/script.js"></script>
