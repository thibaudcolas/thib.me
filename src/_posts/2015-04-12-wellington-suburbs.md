---
layout: post
title: Wellington suburbs and weather stations
date: 2015-04-12 12:02:40 +1300
comments: true
categories: [Dataviz, Open Data, Maps]
redirect_from:
    - /viz/wellington-suburbs
---

Built with GeoJSON, Leaflet, OpenStreetMap during Startup Weekend Wellington 2015.

<!-- more -->

<link rel="stylesheet" href="/assets/data/wellington-suburbs/leaflet/leaflet.css">

<style>
#map-wrapper {
  padding: 10px;
}

#map {
  min-height: 50vh;
}
</style>

<div id="map-wrapper">
    <div id="map"></div>
</div>

<p>.</p>

<script src="/assets/data/wellington-suburbs/leaflet/leaflet.js"></script>

<script src="/assets/data/wellington-suburbs/wellington-niwa-weatherstations.geojson.js"></script>

<script src="/assets/data/wellington-suburbs/wellington-suburbs.geojson.js"></script>

<script src="/assets/data/wellington-suburbs/script.js"></script>
