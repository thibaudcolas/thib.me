---
layout: post
title: Coast to coast walk
date: 2015-01-07 10:22:07 +1300
comments: true
categories: [Dataviz, Open Data, Maps]
redirect_from:
  - /viz/coast2coast-walk
---

The Coast to Coast walk is a 16km hike across Auckland, from the Waitemata Harbour to the Manukau.

Built with GeoJSON, Leaflet, OpenStreetMap. Data from Auckland Transport.

<!-- more -->

<link rel="stylesheet" href="/assets/data/coast2coast-walk/leaflet/leaflet.css">

<style>
    #map-wrapper {
      padding: 10px;
    }

    #map {
      min-height: 480px;
    }
</style>

<div id="map-wrapper">
    <div id="map"></div>
</div>

<script src="/assets/data/coast2coast-walk/leaflet/leaflet.js"></script>

<script src="/assets/data/coast2coast-walk/coast2coast-walk.geojson.js"></script>

<script src="/assets/data/coast2coast-walk/script.js"></script>
